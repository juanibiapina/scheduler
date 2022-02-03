import React, { useState } from "react";
import InputMask from "react-input-mask";
import styled from "styled-components";

const InputContainer = styled.div`
  font-family: Helvetica, Arial, sans-serif;
  color: #cccccc;
  width: 100%;
  text-align: left;
  margin: 5px 0;

  & * {
    display: inline-block;
  }

  & label {
    font-size: 16px;
    margin-left: 0;
  }

  & input {
    height: 30px;
    width: 100%;
    border: #999999 2px solid;
    border-radius: 4px;
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
