import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { Noteitem} from '../../components/Noteitem'
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';


import { Container, Form } from './styles';

export function New() {
  return(
      <Container>
        <Header />


        <main>
          <Form>
            <header>
              <h1>Criar nota</h1>
              <Link to="/">Voltar</Link>
            </header>

            <Input placeholder="Título"/>

            <Textarea placeholder="Observações"/>

            <Section title="Link úteis">
              <Noteitem value="https://rocketseat.com.br"/>
              <Noteitem placeholder="Novo link" isnew/>
            </Section>

            <Section title="Marcadores">
              <div className='tags'>
              <Noteitem value="react"/>
              <Noteitem placeholder="Nova tag" isnew/>
              </div>
            </Section>

            <Button title="Salvar"/>

          </Form>
        </main>
      </Container>
    );
};