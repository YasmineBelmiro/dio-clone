import styled, { css } from "styled-components";

export const ButtonContainer = styled.button`
  background: transparent;
  border-radius: 8px;
  position: relative;

  font-family: "Open Sans", sans-serif;
  font-size: 1rem;
  font-weight: bold;

  color: #ffffff;
  padding: 0.6rem 1.5rem;
  min-width: 120px;

  transition: background-color 0.1s ease;
  margin: 0 10px;
  border: 2px solid #ffffff;

  &:hover {
    border: none;
    background-color: #7f28b5;
    cursor: pointer;
  }

  ${({ variant }) =>
    variant !== "primary" &&
    css`
      border: none;
      background: #7f28b5;
      opacity: 0.9;
      text-align: center;

      &:hover {
        opacity: 1;
        cursor: pointer;
      }
    `}

  ${({ variant }) =>
    variant == "secondary" &&
    css`
      width: 190px;
      font-size: 18px;
      border: none;
      background: #7f28b5;
      opacity: 0.9;
      text-align: center;

      &:hover {
        opacity: 1;
        cursor: pointer;
      }
    `}

    ${({ variant }) =>
      variant == "tertiary" &&
      css`
        width: 350px;
        border: none;
        background: #7f28b5;
        opacity: 0.9;
        text-align: center;
        margin: 20px 0;
  
        &:hover {
          opacity: 1;
          cursor: pointer;
        }
      `}
`;
