import { useState } from 'react';
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { useAuth } from '../../hooks/auth';
import { api } from '../../Service/api';
import { useNavigate } from 'react-router-dom';

import avatarPlaceholder from '../../Assets/avatar_placeholder.svg';

import { Container, Form, Avatar } from "./styles";



export function Profile() {
  const  { user, updateProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState();
  const [passwordNew, setPasswordNew] = useState();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/file/${user.avatar}` : avatarPlaceholder;
  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1)
  };

  async function handleUpdate(){
    const updated = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld,
    };
    
    const userUpdated = Object.assign(user, updated);
      
    
    await updateProfile({ user: userUpdated, avatarFile });
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  return(
    <Container>
      <header>
        <button type='button' onClick={handleBack}>
          <FiArrowLeft/>
        </button>
      </header>

      <Form>
        <Avatar>
          <img 
          src={avatar} 
          alt="Foto do usuário"
          />
          <label htmlFor="avatar">
            <FiCamera />

            <input
            id="avatar"
            type="file"
            onChange={handleChangeAvatar}
            />
          </label>
        </Avatar>

        <Input 
        type="text" 
        placeholder="Nome" 
        icon={FiUser}
        value={name}
        onChange={e => setName(e.target.value)}
        />

        <Input 
        type="email" 
        placeholder="E-mail" 
        icon={FiMail}
        value={email}
        onChange={e => setEmail(e.target.value)}
        />

        <Input 
        type="password" 
        placeholder="Senha atual" 
        icon={FiLock}
        onChange={e => setPasswordOld(e.target.value)}
        />

        <Input 
        type="password" 
        placeholder="Nova senha" 
        icon={FiLock}
        onChange={e => setPasswordNew(e.target.value)}
        />

        <Button title="Salvar" onClick={handleUpdate}/>
      </Form>
    </Container>
)
};