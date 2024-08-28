import { MdEmail, MdLock, MdCheck, MdPerson, MdPhone } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Button } from "../../Components/Button";
import { Header } from "../../Components/Header";
import { Input } from "../../Components/Input";
import { api } from "../../service/api";

import avanade from "../../assets/avanade.png";
import aws from "../../assets/aws.png";
import pan from "../../assets/banco-pan.png";
import carrefour from "../../assets/carrefour.png";
import gtf from "../../assets/gft.png";
import ifood from "../../assets/ifood.png";
import inter from "../../assets/inter.png";
import microsoft from "../../assets/microsoft.png";
import ntt from "../../assets/ntt-data.png";
import philips from "../../assets/philips.png";
import santander from "../../assets/santander.png";
import vivo from "../../assets/vivo.png";

import {
  Container,
  Title,
  TitleRegister,
  SubtitleRegister,
  LoginText,
  Wrapper,
  Column,
  TextContent,
  CompanyContainer,
  Text,
  TenhoConta,
} from "./styles";

const schema = yup
  .object({
    nome: yup.string().required("Campo obrigatório"),
    email: yup.string().email("email n é valido").required("Campo obrigatório"),
    telefone: yup.string().required("Campo obrigatório"),
    password: yup
      .string()
      .min(8, "No minino 8 caracteres")
      .required("Campo obrigatório"),
  })
  .required();

const Register = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ resolver: yupResolver(schema), mode: "onChange" });

  const onSubmit = async (FormData) => {
    try {
      const response = await api.post('user', {
        nome: FormData.nome,
        email: FormData.email,
        telefone: FormData.telefone,
        password: FormData.password
      });
      if (response.status === 201) {
        console.log("Cadastro realizado com sucesso. Redirecionando para o feed...");
        navigate("/feed");
      } else {
        alert("Não foi possível realizar o cadastro. Verifique os dados e tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao tentar realizar o cadastro:", error);
      alert("Houve um erro ao tentar realizar o cadastro!");
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras
          </Title>
          <TextContent>
            <MdCheck color="#22DD7A" /> +1.750 cursos, bootcamps, projetos e
            formações nas carreiras de back-end, front-end, mobile, games, data,
            inteligência artificial & cloud;
          </TextContent>
          <TextContent>
            <MdCheck color="#22DD7A" /> Conquiste certificados reconhecidos por
            grandes empresas de tecnologia em Java, Python, .NET, C#,
            JavaScript, Node.js, React, Angular, SQL, AWS, Azure, GCP, MongoDB,
            Kotlin, Swift entre mais de 500 tecnologias;
          </TextContent>
          <TextContent>
            <MdCheck color="#22DD7A" />
            +10.000 pessoas contratadas por grandes empresas no Brasil e
            exterior.
          </TextContent>
          <CompanyContainer>
            <div>
              <img src={ifood} alt="Ifood" />
              <img src={santander} alt="Santander" />
              <img src={inter} alt="Inter" />
              <img src={avanade} alt="Avanade" />
            </div>
            <div>
              <img src={carrefour} alt="Carrefour" />
              <img src={aws} alt="Aws" />
              <img src={ntt} alt="NTT data" />
              <img src={pan} alt="Banco pan" />
            </div>
            <div>
              <img src={gtf} alt="GTF" />
              <img src={philips} alt="Philips" />
              <img src={vivo} alt="Vivo" />
              <img src={microsoft} alt="Microsoft" />
            </div>
          </CompanyContainer>
        </Column>
        <Column>
          <Wrapper>
            <TitleRegister>Crie sua conta grátis</TitleRegister>
            <SubtitleRegister>Preencha seus dados</SubtitleRegister>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                name="nome"
                errorMensage={errors.nome?.message}
                control={control}
                placeholder="*Nome completo"
                leftIcon={<MdPerson color="#7F28B5" size={20} />}
              />
              <Input
                name="email"
                errorMensage={errors.email?.message}
                control={control}
                placeholder="*O seu melhor @email"
                leftIcon={<MdEmail color="#7F28B5" size={20} />}
              />
              <Input
                name="telefone"
                errorMensage={errors.telefone?.message}
                control={control}
                placeholder="+55 (99) 99999-9999"
                leftIcon={<MdPhone color="#7F28B5" size={20} />}
              />
              <Input
                name="password"
                control={control}
                errorMensage={errors.password?.message}
                placeholder="Senha"
                type="password"
                leftIcon={<MdLock color="#7F28B5" size={20} />}
              />
              <Button
                title="Criar minha conta grátis"
                variant="tertiary"
                type="submit"
              />
            </form>
            <Text color="#000">
              Ao clicar em "criar minha conta grátis", declaro que aceito as
              Políticas de Privacidade e os Termos de Uso da DIO.
            </Text>

            <TenhoConta>
              Já tenho conta. <LoginText href="#"> Fazer login</LoginText>
            </TenhoConta>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Register };
