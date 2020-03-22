import React from "react";
import styled from "styled-components";

const ControlsComponent = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 17rem;
  justify-content: space-between;

  .title {
    width: 100%;
    margin: 2rem 0 1rem;

    h3 {
      color: ${props => props.theme.accent};
      margin: 0;
    }
  }
`;

const ControlKey = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 75px;
  justify-content: center;
  margin-bottom: 1rem;

  .key {
    outline: 0;
    border: 3px solid ${props => props.theme.accent};
    border-radius: 1rem;
    background-color: transparent;
    padding: 1rem;
    color: ${props => props.theme.accent};
    font-family: ${props => props.theme.defaultFont};
    margin-bottom: 0.5rem;
  }
`;

const keys = [
  { key: "A", label: "LEFT" },
  { key: "S", label: "MIDDLE" },
  { key: "D", label: "RIGHT" },
  { key: "⬅", label: "LEFT" },
  { key: "➡", label: "RIGHT" },
  { key: "ESC", label: "PAUSE" }
];

function Controls() {
  return (
    <ControlsComponent>
      <div className="title">
        <h3>Controls</h3>
      </div>
      {keys.map((k, i) => (
        <ControlKey key={i}>
          <div className="key">{k.key}</div>
          <div className="label">{k.label}</div>
        </ControlKey>
      ))}
    </ControlsComponent>
  );
}
export default Controls;
