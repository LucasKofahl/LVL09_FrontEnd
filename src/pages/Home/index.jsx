import { FiPlus, FiSearch } from 'react-icons/fi'
import { Container, Brand, Menu, Search, Content, NewNote} from './styles';

import { Header } from '../../components/Header'
import { Note } from '../../components/Note'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { ButtonText } from '../../components/ButtonText'
import { useState, useEffect } from 'react';
import { api } from '../../Service/api';
import { useNavigate } from 'react-router-dom';

export function Home() {
  const [tags, setTags] = useState([]);
  const [tagsSelected, setTagsSelected] = useState([]);
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState([]);

  const navigate = useNavigate();


  function handleTagSelected(tagName){
    if(tagName === "all"){
      return setTagsSelected([])
    }
    const alreadySelected = tagsSelected.includes(tagName);

    if(alreadySelected){
      const filteredTags = tagsSelected.filter(tag => tag !== tagName);
      setTagsSelected(filteredTags);


    } else {
      setTagsSelected(prevState => [...prevState, tagName]);
    }

  }

  function handleDetails(id){
    navigate(`/details/${id}`)
  }

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get("/tags");
      setTags(response.data);
    }
    fetchTags();
  }, []);

  useEffect(() => {
    async function fetchNotes(){
      const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`);
      setNotes(response.data);
    }

    fetchNotes();

  }, [tagsSelected, search]);

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
        <Input
        placeholder="Pesquisar pelo título"
        icon={FiSearch}
        onChange={(e) => setSearch(e.target.value)}
        />
      </Search>

      <Content>
        <Section title={'Minhar notas'}>
          {
          notes.map(note => (
            <Note
            key={String(note.id)}
            data={note}
            onClick={() => handleDetails(note.id)}
            />
          ))
          }
        </Section>

      </Content>

      <NewNote to="/new">
        <FiPlus/>
          Criar nota
      </NewNote>
    </Container>
  );
};

