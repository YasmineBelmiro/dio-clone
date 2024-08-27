import React from "react";
import { InputContainer, IconContainer, InputText, ErroText } from "./styles";
import { Controller } from "react-hook-form";

const Input = ({ leftIcon, name, control, errorMensage, ...rest }) => {
  return (
    <>
      <InputContainer>
        {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
        <Controller
          name={name}
          control={control}
          rules={{ required: true }}
          render={({ field }) => <InputText {...field} {...rest} />}
        />
      </InputContainer>
      {errorMensage ? <ErroText> {errorMensage} </ErroText> : null}
      <ErroText>
        
      </ErroText>
    </>
  );
};
export { Input };
