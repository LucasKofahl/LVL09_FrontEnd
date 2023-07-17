import { RiShutDownLine} from 'react-icons/ri';
import { Conteiner, Profile, Logout } from "./styles";

export function Header(){
  return(
    <Conteiner>
      <Profile to="/profile">
        <img src="https://github.com/LucasKofahl.png" alt="Foto do usuário"/>

        <div>
          <span>Bem-vindo</span>
          <strong>Lucas Kofahl</strong>
        </div>
      </Profile>

    <Logout>
      <RiShutDownLine/>
    </Logout>


    </Conteiner>
  )
}