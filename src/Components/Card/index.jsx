import React from "react";
import {
  CardContainer,
  ImageBackground,
  Content,
  UserInfo,
  UserPicture,
  PostInfo,
  HasInfo,
} from "./styles";
import { FiThumbsUp } from "react-icons/fi";

const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src="https://blog.rocketseat.com.br/content/images/2024/02/htmlcssjs.png"/>
      <Content>
        <UserInfo>
          <UserPicture src="https://avatars.githubusercontent.com/u/159196338?v=4"/>
          <div>
            <h4>Yasmine Belmiro</h4>
            <p>Há 8 minutos</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projeto para curso de HTML e CSS</h4>
          <p>
            Projeto feito no curso de html e css no bootcamp da dio do Global
            avanade...<strong>Saiba Mais</strong>
          </p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #JS</h4>
          <p>
            <FiThumbsUp /> 10
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  );
};

export { Card };
