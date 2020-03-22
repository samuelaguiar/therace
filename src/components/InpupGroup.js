import React from "react";
import styled from "styled-components";

const InpupGroupComponent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;

  input {
    outline: 0;
    border: 3px solid ${props => props.theme.accent};
    border-radius: 1rem;
    background-color: transparent;
    padding: 0.5rem 1rem;
    color: ${props => props.theme.accent};
    font-family: ${props => props.theme.defaultFont};
    margin-top: 1rem;
  }

  input::placeholder {
    color: #00dddb60;
  }
`;

function InpupGroup({ label, name, value, handleChange, disabled = false }) {
  return (
    <InpupGroupComponent>
      {label && <span>{label}</span>}
      <input
        type="text"
        name={name}
        placeholder="Type anything..."
        value={value}
        disabled={disabled}
        onChange={e => handleChange(e.target.value)}
      />
    </InpupGroupComponent>
  );
}

export default InpupGroup;
