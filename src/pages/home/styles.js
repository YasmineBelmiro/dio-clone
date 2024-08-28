import styled from "styled-components";

export const Container = styled.main`
  width: 100%;

  margin: 0 auto;
  margin-top: 14%;
  
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  font-family: "Open Sans";
  font-style: normal;

  font-size: 45px;
  width: 820px;
  margin-bottom: 50px;

  text-align: justify;
  color: #ffffff;
`;

export const TextContent = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 28px;

  width: 820px;
  text-align: justify;
  margin-bottom: 50px;
  color: #ffffff;
`;

export const Banner = styled.div`
  img {
    display: block;
    margin-left: 400px;
  }
`;
