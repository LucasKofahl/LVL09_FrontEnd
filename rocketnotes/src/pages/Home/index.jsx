import { FiPlus, FiSearch } from 'react-icons/fi'
import { Container, Brand, Menu, Search, Content, NewNote} from './styles';

import { Header } from '../../components/Header'
import { Note } from '../../components/Note'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { ButtonText } from '../../components/ButtonText'
import { useState, useEffect } from 'react';
import { api } from '../../Service/api';

export function Home() {
  const [tags, setTags] = useState([]);
  const [tagsSelected, setTagsSelected] = useState([]);


  function handleTagSelected(tagName){
    const alreadySelected = tagsSelected.includes(tagName);

    if(alreadySelected){
      const filteredTags = tagsSelected.filter(tag => tag !== tagName);
      setTagsSelected(filteredTags);


    } else {
      setTagsSelected(prevState => [...prevState, tagName]);
    }

  }

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get("/tags");
      setTags(response.data);
    }
    fetchTags();
  }, []);

  return(
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header/>

      <Menu>
        <li>
          <ButtonText
            title="Todos"
            onClick={() => handleTagSelected("all")}
            isactive={tagsSelected.length === 0}
          />
        </li>
        {
          tags && tags.map(tags => (
          <li key={String(tags.id)}>
            <ButtonText 
              title={tags.name}
              onClick={() => handleTagSelected(tags.name)}
              isactive={tagsSelected.includes(tags.name)}
            />
          </li>
          ))
        }
        
      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo título" icon={FiSearch}/>
      </Search>

      <Content>
        <Section title={'Minhar notas'}>
          <Note data={{
          title: 'React',
          tags: [
              { id: '1', name: 'react'}, 
              { id: '2', name: 'rocketseat'}
            ]
          }}
        />
        </Section>

      </Content>

      <NewNote to="/new">
        <FiPlus/>
          Criar nota
      </NewNote>
    </Container>
  );
};

