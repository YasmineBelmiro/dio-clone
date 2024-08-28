import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
  
    height: 30px;
    border-bottom: 1px solid #3B3450;
    margin: 15px 0;
    display:flex;
    align-items: center;

`

export const IconContainer = styled.div`
    margin-right: 16px;
`

export const InputText = styled.input`
    background-color: transparent;
    color: #000;
    flex:1;
    border: 0;
    height: 36px;
    width: 100%;
    font-size: 20px;
`
export const ErroText = styled.p`
  color: #ff0000;
  font-size: 15px;
  margin: 5px 0;
`;
