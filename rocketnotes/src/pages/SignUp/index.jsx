import { FiMail,FiLock, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Container, Form, Background } from './styles';

import { Input } from '../../components/Input';
import { Button  } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';


export function SignUp(){
  return(
    <Container>
      <Background/>

      <Form>
      <h1>Rocket Notes</h1>

      <p>Aplicação para salvar a gerenciar seus links úteis.</p>

      <h2>Cria sua conta</h2>

      <Input type="text" placeholder="Nome" icon={FiUser}/>
      <Input type="email" placeholder="E-mail" icon={FiMail}/>
      <Input type="password" placeholder="Senha" icon={FiLock}/>

      <Button title="Cadastrar" />


      <Link to="/">Voltar para o login</Link>

      </Form>

      

    </Container>

  );
};