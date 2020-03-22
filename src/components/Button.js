import React from "react";
import styled from "styled-components";

const ButtonComponent = styled.button`
  outline: 0;
  border: 3px solid ${props => props.theme.accent};
  background-color: ${props => props.theme.accent};
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  color: ${props => props.theme.primary};
  font-family: ${props => props.theme.defaultFont};
  margin-top: 1rem;
  cursor: pointer;
  transition: 0.2s ease all;

  &:hover {
    transform: skewX(-15deg);
  }

  &:active {
    transform: translate(-0.5rem);
  }
`;

function Button({ text, clickHandler }) {
  return <ButtonComponent onClick={clickHandler}>{text}</ButtonComponent>;
}

export default Button;
