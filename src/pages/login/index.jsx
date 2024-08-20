import { MdEmail, MdLock } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import { Button } from "../../Components/Button";
import { Header } from "../../Components/Header";
import { Input } from "../../Components/Input";

import {
  Container,
  Title,
  TitleLogin,
  SubtitleLogin,
  EsqueciText,
  CriarText,
  Wrapper,
  Column,
  Row,
} from "./styles";

const Login = () => {

  const navigate = useNavigate();

  const hanldeClickSignIn = () => {
    navigate("/feed");
  };

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
            <form>
              <Input placeholder="Email" leftIcon={<MdEmail />} />
              <Input
                placeholder="Senha"
                type="password"
                leftIcon={<MdLock />}
              />
              <Button title="Entrar" variant="secondary" onClick={hanldeClickSignIn} type="button"/>
            </form>
            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <CriarText>Criar conta</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Login };
