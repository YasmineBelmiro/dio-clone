import { Button } from "../../Components/Button";
import { Header } from "../../Components/Header";
import { Input } from "../../Components/Header/styles";

import { Container, Title, TitleHeighLight, TextContent } from "./styles";

const Login = () => {
  return (
    <>
      <Header />
      <Container>
        <div>
          <TitleHeighLight>Implemente</TitleHeighLight>
          <br />
          <Title>O seu futuro global agora!</Title>
          <TextContent>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do
            mundo e encare seu novo desafio profissional, evoluindo em
            comunidade com os melhores experts.
          </TextContent>
          <Button title='Começar agora' variant="secondary" onClick={() => null} />
        </div>
        <div>
          <Input placeholder="Email"/>
        </div>
      </Container>
    </>
  );
};

export { Login };
