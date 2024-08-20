import { Link } from "react-router-dom";
import { Button } from "../../Components/Button";
import { Header } from "../../Components/Header";
import bannerImage from "../../assets/banner.png";

import { Container, Title, TitleHeighLight, TextContent } from "./styles";

const Home = () => {
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
          <img src={bannerImage} alt="banner" />
        </div>
      </Container>
    </>
  );
};

export { Home };
