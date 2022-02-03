import React, { useState } from "react";
import InputMask from "react-input-mask";
import styled from "styled-components";

const InputContainer = styled.div`
  width: 100%;
  text-align: left;
  margin: 10px;

  & label {
    margin-left: 0;
  }

  & input {
    height: 30px;
    width: 100%;
  }
`;

function Input({
  description,
  placeholder,
  name,
  type,
  mask,
  value,
  onChange,
}) {
  return (
    <InputContainer>
      <label for={name}>{description}</label>
      <InputMask
        placeholder={placeholder}
        id={name}
        mask={mask}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
      />
    </InputContainer>
  );
}

export default Input;
