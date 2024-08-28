import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/logo-dio.png";
import {
  Container,
  Row,
  Wrapper,
  BuscarInputContainer,
  Menu,
  Input,
  UserPicture,
} from "./styles";
import { Button } from "../Button";

const Header = ({ autenticado }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation(); 

  const handleClickSignIn = () => {
    navigate("/login");
  };

  const handleClickRegister = () => {
    navigate("/register")
  }
  return (
    <Wrapper>
      <Container>
        <Row>
          <a href="/"><img className="logo" src={logo} alt="logo" /></a>
          {autenticado ? (
            <>
              <BuscarInputContainer>
                <Input placeholder="Buscar..." />
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>

        <Row>
          {autenticado ? (
            <UserPicture src="https://avatars.githubusercontent.com/u/159196338?v=4=" />
          ) : (
            <>
              <Menu href="https://www.dio.me/bootcamp">Bootcamps</Menu>
              <Menu href="https://www.dio.me/projects">Projetos</Menu>
              <Menu href="https://www.dio.me/articles">Comunidade</Menu>
              <Menu href="https://www.dio.me/planos">Planos</Menu>
              <Menu href="https://www.dio.me/talent-match">Empresas</Menu>
              {pathname === "/login" && (
                <Button title="Cadastrar" onClick={handleClickRegister} />
              )}
              {pathname === "/register" && (
                <Button title="Entrar" onClick={handleClickSignIn} />
              )}
              {pathname === "/" && (
                <>
                  <Button title="Entrar" onClick={handleClickSignIn} />
                  <Button variant="secondary" title="Cadastrar" onClick={handleClickRegister} />
                </>
              )}
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
};

export { Header };
