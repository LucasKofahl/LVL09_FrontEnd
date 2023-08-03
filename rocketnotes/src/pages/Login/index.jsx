import { useState } from 'react';
import { FiMail,FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container, Form, Background } from './styles';

import { useAuth } from '../../hooks/auth';

import { Input } from '../../components/Input';
import { Button  } from '../../components/Button';


export function Login(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const { signIn } = useAuth();

  function handleSignIn(){
    signIn({ email, password })
  };

  return(
    <Container>
      <Form>
      <h1>Rocket Notes</h1>

      <p>Aplicação para salvar a gerenciar seus links úteis.</p>

      <h2>Faça seu login</h2>

      <Input type="email"
      placeholder="E-mail"
      icon={FiMail}
      onChange={e => setEmail(e.target.value)}
      />
      <Input type="password"
      placeholder="Senha"
      icon={FiLock}
      onChange={e => setPassword(e.target.value)}
      />

      <Button title="Entrar" onClick={handleSignIn} />


      <Link to="/signup"> Criar conta </Link>

      </Form>

      <Background/>

    </Container>

  );
};