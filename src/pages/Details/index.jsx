import { Conteiner, Links, Content } from './styles';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { api } from '../../Service/api';

import { Header } from '../../components/Header';
import { Tag } from '../../components/Tag';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';


export function Details() {
  const [data, setData] = useState(null);

  const params = useParams();
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1)
  };

  async function handleRemove() {
    const confirm = window.confirm("Deseja realmente remover a nota?");

    if(confirm){
      await api.delete(`/notes/${params.id}`);
      navigate(-1);
    }
  }

  useEffect(() => {
    async function fetcNotes(){
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }

    fetcNotes();
  }, []);

  return(
    <Conteiner>
    <Header/>
    {
      data &&
    <main>
      <Content>
        <ButtonText
        title="Excluir Nota"
        onClick={handleRemove}
        />

          <h1>
            {data.note.title}
          </h1>

          <p>
            {data.note.description}
          </p>

          { 
          data.links &&
          <Section title="Links úteis">
            <Links>
              {
                data.links.map(link => (
                <li key={String(link.id)}>
                  <a href={link.url} target="_blank">
                    {link.url}
                  </a>
                </li>
                ))
              }
            </Links>
          </Section>
          }

          
          {
            data.tags &&
            <Section title="Marcadores">
              {
                data.tags.map(tag => (
                  <Tag
                  key={String(tag.id)}
                  title={tag.name}
                  />
                ))
              }
            </Section>
          }

          <Button
            title="Voltar"
            onClick={handleBack}
          />

      </Content>
    </main>
    }
    </Conteiner>
  )
}