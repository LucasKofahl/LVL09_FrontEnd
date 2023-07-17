import { Conteiner, Links, Content } from './styles';

import { Header } from '../../components/Header';
import { Tag } from '../../components/Tag';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';


export function Details() {
  return(
    <Conteiner>
    <Header/>

    <main>
      <Content>
        <ButtonText title="Excluir Nota"/>

          <h1>
            Introdução ao React
          </h1>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Iure id maxime, optio quidem cum, a inventore repellat sunt provident hic 
            quis architecto ut doloribus soluta nemo sed quae, officiis eveniet?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Iure id maxime, optio quidem cum, a inventore repellat sunt provident hic 
            quis architecto ut doloribus soluta nemo sed quae, officiis eveniet?
          </p>

          <Section title="Links úteis">
            <Links>
              <li>
                <a href="#">https://www.rocketseat.com.br/</a>
              </li>
            
            </Links>
          </Section>

          
          <Section title="Marcadores">

            <Tag title="express"></Tag>
            <Tag title="nodejs"></Tag>
            
          </Section>  

          <Button title="Voltar"/>

      </Content>
    </main>

    </Conteiner>
  )
}