import { useNavigate } from "react-router-dom";

import { Button } from "../../Components/Button";
import { Header } from "../../Components/Header";
import bannerImage from "../../assets/banner.png";

import { Container, Title, TitleHighlight, TextContent } from "./styles";

const Home = () => {
  const navigate = useNavigate();

  const hanldeClickSignIn = () => {
    navigate("/login");
  };
  return (
    <>
      <Header />
      <Container>
        <div>
          <TitleHighlight>Implemente</TitleHighlight>
          <br />
          <Title>O seu futuro global agora!</Title>
          <TextContent>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do
            mundo e encare seu novo desafio profissional, evoluindo em
            comunidade com os melhores experts.
          </TextContent>
          <Button
            title="Começar agora"
            variant="secondary"
            onClick={hanldeClickSignIn}
          />
        </div>
        <div>
          <img src={bannerImage} alt="banner" />
        </div>
      </Container>
    </>
  );
};

export { Home };
