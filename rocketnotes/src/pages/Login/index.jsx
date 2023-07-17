import { FiMail,FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container, Form, Background } from './styles';

import { Input } from '../../components/Input';
import { Button  } from '../../components/Button';


export function Login(){
  return(
    <Container>
      <Form>
      <h1>Rocket Notes</h1>

      <p>Aplicação para salvar a gerenciar seus links úteis.</p>

      <h2>Faça seu login</h2>

      <Input type="email" placeholder="E-mail" icon={FiMail}/>
      <Input type="password" placeholder="Senha" icon={FiLock}/>

      <Button title="Entrar" />


      <Link to="/signup"> Criar conta </Link>

      </Form>

      <Background/>

    </Container>

  );
};