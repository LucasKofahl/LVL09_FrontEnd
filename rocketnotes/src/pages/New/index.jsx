import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { NoteItem} from '../../components/NoteItem'
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { api } from '../../Service/api';
import { useNavigate } from 'react-router-dom';

import { Container, Form } from './styles';

export function New() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("")

  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleAddLink(){
    setLinks(prevState => [...prevState, newLink]);
    setNewLink("");
  }

  function handleRemoveLink(deleted) {
    setLinks(prevState => prevState.filter(link => link !== deleted));
  }

  function handleAddTag(){
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted){
    setTags(prevState => prevState.filter(tags => tags !== deleted));
  }

  async function handleNewNotes(){
    if(!title){
      return alert("Digite o título da nota!")
    }

    if(newLink){
      return alert("Um link não foi confirmado! Confirme ele ou deixe o campo vázio!")
    };
    
    if(newTag){
      return alert("Uma tag não foi confirmada! Confirme ela ou deixe o campo vázio!")
    };



    await api.post("/notes", {
      title,
      description,
      tags,
      links
    });

    alert("Nota criada com sucesso!");
    navigate("/");
  }

  return(
      <Container>
        <Header />


        <main>
          <Form>
            <header>
              <h1>Criar nota</h1>
              <Link to="/">Voltar</Link>
            </header>

            <Input
            placeholder="Título"
            onChange={e => setTitle(e.target.value)}
            />
            <Textarea placeholder="Observações"/>

            <Section title="Link úteis">
              {
                links.map((link, index) => (
                <NoteItem
                  key={String(index)}
                  value={link}
                  onclick={() => handleRemoveLink(link)}
                />
                ))
              }
              <NoteItem
              isnew
              placeholder="Novo link"
              value={newLink}
              onChange={e => setNewLink(e.target.value)}
              onclick={handleAddLink}
              />
            </Section>

            <Section title="Marcadores">
              <div className='tags'>
                {
                tags.map((tag, index) => (
                  <NoteItem
                  key={String(index)}
                  value={tag}
                  onclick={() => {handleRemoveTag(tag)}}
                  />

                ))
                }

              <NoteItem placeholder="Nova tag"
              isnew
              onChange={e => setNewTag(e.target.value)}
              value={newTag}
              onclick={handleAddTag}
              />
              </div>
            </Section>

            <Button
            title="Salvar"
            onClick={handleNewNotes}
            />

          </Form>
        </main>
      </Container>
    );
};