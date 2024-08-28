import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 80%;
  height: 90px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  .logo {
    width: 140px;
  }
`;

export const Wrapper = styled.div`
    background-color: #151515;
    width: 100%;
    height: 90px;
    display:flex
    justify-content: center;
    align-items: center
`;

export const BuscarInputContainer = styled.div`
  width: 275px;
  height: 30px;
  background: #2d2d37;
  border-radius: 8px;
  padding: 2px 5px;
  margin: 0 12px;

  display: flex;
`;

export const Menu = styled.a`
  font-family: "Open Sans", sans-serif;
  font-style: normal;

  font-size: 18px;
  line-height: 25px;
  color: #ffffff;
  margin-right: 22px;
  transition: color 0.5s ease;
  text-decoration: none;
  &:hover {
    color: #932ed1;

    
  }
`;

export const UserPicture = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 22px;
  border: 3px solid #ffffff;
`;

export const Input = styled.input`
  background: transparent;
  flex: 1;
  border: 0;
  color: #ffffff;
`;
