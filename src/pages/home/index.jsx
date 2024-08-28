import { useNavigate } from "react-router-dom";

import { Button } from "../../Components/Button";
import { Header } from "../../Components/Header";
import bannerImage from "../../assets/banner.png";

import { Container, Title, TextContent, Banner } from "./styles";

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
          <Title>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do
            mundo
          </Title>
          <TextContent>
            +1.750 cursos, bootcamps, projetos e formações nas carreiras de
            back-end, front-end, mobile, games, data, inteligência artificial &
            cloud para elevar o seu nível profissional e conquistar
            oportunidades nas empresas mais desejadas do mundo
          </TextContent>
          <Button
            title="Começar agora"
            variant="secondary"
            onClick={hanldeClickSignIn}
          />
        </div>
        <Banner>
          <img src={bannerImage} alt="banner" />
        </Banner>
      </Container>
    </>
  );
};

export { Home };
