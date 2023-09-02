import { RiShutDownLine} from 'react-icons/ri';
import { useAuth } from '../../hooks/auth'
import { Conteiner, Profile, Logout } from "./styles";
import { api } from "../../Service/api";
import avatarPlaceholder from "../../Assets/avatar_placeholder.svg";
import { useNavigate } from 'react-router-dom';

export function Header(){
  const { signOut, user } = useAuth();
  const navigate = useNavigate();
  
  function handleSignOut(){
    navigate("/");
    signOut();
  }

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/file/${user.avatar}` : avatarPlaceholder;

  return(
    <Conteiner>
      <Profile to="/profile">
        <img 
        src={avatarUrl} 
        alt={user.name}
        />

        <div>
          <span>Bem-vindo</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>

    <Logout onClick={handleSignOut}>
      <RiShutDownLine/>
    </Logout>


    </Conteiner>
  )
}