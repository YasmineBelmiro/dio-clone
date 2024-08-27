import { MdEmail, MdLock } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Button } from "../../Components/Button";
import { Header } from "../../Components/Header";
import { Input } from "../../Components/Input";
import { api } from "../../service/api";

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

const schema = yup
  .object({
    email: yup.string().email("email n é valido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(8, "No minino 8 caracteres")
      .required("Campo obrigatório"),
  })
  .required();

const Login = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ resolver: yupResolver(schema), mode: "onChange" });

  const onSubmit = async FormData => {
    try {
      const { data } = await api.get(`user?email${FormData.email}&senha=${FormData.password}`);
      if(data.length === 1){
        navigate("/feed");
      }else{
        alert('Email ou senha incorretos.')
      }
    } catch {
      alert("Houve um erro!");
    }
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                name="email"
                errorMensage={errors.email?.message}
                control={control}
                placeholder="Email"
                leftIcon={<MdEmail />}
              />
              <Input
                name="password"
                control={control}
                errorMensage={errors.password?.message}
                placeholder="Senha"
                type="password"
                leftIcon={<MdLock />}
              />
              <Button title="Entrar" variant="secondary" type="submit" />
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
