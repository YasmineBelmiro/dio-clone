import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 90px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 120px;
  
`;

export const Wrapper = styled.div`
  max-width: 400px;
  background-color: #FFF;
  display: flex;
  flex-direction: column;
  padding: 40px;
  justify-content: center;
  align-itens: center;
  text-align: center;
  border-radius: 20px;
`;

export const Column = styled.div`
  flex: 1;
`;

export const Title = styled.h2`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  max-width: 90%;
  margin-bottom: 20px;
  line-height: 44px;

  color: #ffffff;
`;

export const TitleRegister = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  margin-bottom: 8px;
  color: #7F28B5;
`;

export const SubtitleRegister = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 25px;
  margin-bottom: 35px;
  color: #000;
`;


export const LoginText = styled.a`
  font-family: "Open Sans";
  font-style: normal;
 text-decoration: none;
  font-size: 22px;
  line-height: 19px;

  color: #000;

  &:hover{
    text-decoration: underline;
    cursor: pointer;
    }
`;

export const TextContent = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 28px;

  width: 820px;
  margin-bottom: 50px;
  color: #ffffff;
`;

export const CompanyContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 1.5rem 1.5rem 3rem;
    max-width: 67%;

    div{
        display: flex;
        flex-direction: row;
        justify-content: space-between;}

    img{
        max-height: 1.625rem;
        max-width: 6.625rem;
        padding: 0 0.25rem;
        object-fit: contain;
        height: auto;
        width: auto;
    }
}`;

export const Text = styled.p`
  font-family: "Open Sans";
  font-style: normal;

  font-size: 15px;
  line-height: 28px;
  text-align: left;
  color: #000;
`;

export const TenhoConta = styled.p`
  font-family: "Open Sans";
  font-style: normal;

  font-size: 19px;
  line-height: 28px;

  color: #000;
`;

