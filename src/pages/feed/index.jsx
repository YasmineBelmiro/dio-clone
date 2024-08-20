import { Header } from "../../Components/Header";
import { UserInfo } from "../../Components/UserInfo";
import { Card } from "../../Components/Card";

import { Container, Column, Title, TitleHighlight } from "./styles";

const Feed = () => {
  return (
    <>
      <Header autenticado={true}/>
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighlight># RANK TOP 5 DA SEMANA</TitleHighlight>
          <UserInfo
            nome="Yasmine Belmiro"
            image="https://avatars.githubusercontent.com/u/159196338?v=4="
            percentual={90}
          />
          <UserInfo
            nome="Yasmine Belmiro"
            image="https://avatars.githubusercontent.com/u/159196338?v=4="
            percentual={82}
          />
          <UserInfo
            nome="Yasmine Belmiro"
            image="https://avatars.githubusercontent.com/u/159196338?v=4="
            percentual={74}
          />
          <UserInfo
            nome="Yasmine Belmiro"
            image="https://avatars.githubusercontent.com/u/159196338?v=4="
            percentual={61}
          />
          <UserInfo
            nome="Yasmine Belmiro"
            image="https://avatars.githubusercontent.com/u/159196338?v=4="
            percentual={58}
          />
        </Column>
      </Container>
    </>
  );
};

export { Feed };
