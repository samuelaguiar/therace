import * as actionGame from "../action/game";

import { PAUSED, RUNNING } from "../constant/game";
import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import BG from "../assets/img/bg.gif";
import Car from "../assets/img/car.png";
import PauseBG from "../assets/img/bg-pause.jpg";

const moveCar = keyframes`
0% {
  transform: translate(0px, 0px);
}
25% {
  transform: translate(1px, 0px);
}
50% {
  transform: translate(0px, 1px);
}
75% {
  transform: translate(1px, 1px);
}
`;

const countdown = keyframes`
from {
  opacity: 1;
  transform: scale(1);
}
to {
  opacity: 0;
  transform: scale(.5);
}
`;

const GameComponent = styled.div`
  display: flex;
  flex: ${props => (props.isGameStarted ? 1 : 0)};
  background: url(${props => (props.gameStatus === RUNNING ? BG : PauseBG)});
  background-repeat: no-repeat;
  background-size: cover;
  transition: flex 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  .pause {
    position: fixed;
    top: calc(50% - 3rem);
    margin-left: calc(22.5% - 7rem);
    font-size: 5rem;
    text-shadow: ${props => props.theme.shadow};
  }

  .countdown {
    margin-left: calc(25% - 7.5rem);
    top: calc(50% - 7.5rem);
    font-size: 15rem;
    position: fixed;
    text-shadow: ${props => props.theme.shadow};
    animation: ${countdown} 1s cubic-bezier(0.55, 0.055, 0.675, 0.19) infinite;
  }

  .car {
    display: ${props => (props.isGameStarted ? "block" : "none")};
    position: relative;
    justify-content: ${props => props.action};
    width: 100%;

    img {
      max-width: 12vw;
      position: absolute;
      bottom: 2%;
      left: ${props => `calc(${lanesPos[props.action].left})`};
      transition: left 0.4s ease;
      animation: 0.5s infinite ease;
      animation-name: ${props => (props.gameStatus === RUNNING ? moveCar : "")};
    }
  }
`;

const lanesPos = {
  left: {
    left: "0%"
  },
  middle: {
    left: "50% - 7vw"
  },
  right: {
    left: "100% - 14vw"
  }
};
const pos = ["left", "middle", "right"];

function Game() {
  const { isGameStarted, gameStatus } = useSelector(state => state);
  const [action, setAction] = useState("middle");
  const [countdown, setCountdown] = useState(4);
  const dispatch = useDispatch();

  useEffect(() => {
    let interval = null;
    if (countdown && isGameStarted) {
      interval = setInterval(() => {
        setCountdown(countdown - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    if (!countdown) {
      dispatch(actionGame.updateGameStatus(RUNNING));
    }
    return () => clearInterval(interval);
  }, [countdown, dispatch, isGameStarted]);

  useEffect(() => {
    function handleKeyChange(e) {
      const actionIndex = pos.indexOf(action);
      switch (e.keyCode) {
        case 27:
          (gameStatus === RUNNING &&
            dispatch(actionGame.updateGameStatus(PAUSED))) ||
            (gameStatus === PAUSED &&
              dispatch(actionGame.updateGameStatus(RUNNING)));
          break;
        case 83:
          gameStatus === RUNNING && setAction(pos[1]);
          break;
        case 37:
        case 65:
          gameStatus === RUNNING &&
            actionIndex &&
            setAction(pos[actionIndex - 1]);
          break;
        case 39:
        case 68:
          gameStatus === RUNNING &&
            actionIndex !== pos.length - 1 &&
            setAction(pos[actionIndex + 1]);
          break;
        default:
          break;
      }
    }
    window.addEventListener("keydown", handleKeyChange);
    return () => {
      window.removeEventListener("keydown", handleKeyChange);
    };
  }, [action, dispatch, gameStatus]);

  return (
    <GameComponent
      isGameStarted={isGameStarted}
      gameStatus={gameStatus}
      action={action}
    >
      {countdown > 0 && countdown < 4 && (
        <div className="countdown">{countdown}</div>
      )}
      {gameStatus === PAUSED && <div className="pause">Pause</div>}
      <div className="car">
        <img src={Car} alt="Car" />
      </div>
    </GameComponent>
  );
}

export default Game;
