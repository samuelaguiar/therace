import * as actionGame from "../action/game";

import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import Button from "./Button";
import Controls from "./Controls";
import InpupGroup from "./InpupGroup";
import Logo from "./Logo";

const moveInfo = keyframes`
0% {
  width: 30%;
  height: 30%;
}
50% {
  width: 80%;
  height: 30%;
}
100% {
  width: 80%;
  height: 80%;
}
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;

  .move-info {
    animation: ${moveInfo} 1s cubic-bezier(0.515, 0.61, 0.155, 1) forwards;
  }
`;

function Info() {
  const { driverName, isGameStarted } = useSelector(state => state);
  const dispatch = useDispatch();
  const [driverInput, setDriverInput] = useState("");

  function updateDriverName(name) {
    dispatch(actionGame.updateDriverName(name));
  }

  function gameStart() {
    dispatch(actionGame.updateGameStart(true));
  }

  return (
    <InfoContainer>
      <div className={`info-component ${isGameStarted && "move-info"}`}>
        <Logo title={driverName} isGameStarte={isGameStarted}></Logo>
        {isGameStarted ? (
          <Controls></Controls>
        ) : (
          <>
            <InpupGroup
              label="What's your name, driver?"
              name="name"
              value={driverInput}
              handleChange={setDriverInput}
            ></InpupGroup>
            <Button
              text="Let's Race!"
              clickHandler={() => {
                updateDriverName(driverInput);
                gameStart();
              }}
            ></Button>
          </>
        )}
      </div>
    </InfoContainer>
  );
}

export default Info;
