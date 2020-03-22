import styled, { keyframes } from "styled-components";

import Car from "../assets/img/car.png";
import React from "react";

const disappear = keyframes`
from {
  transform: scaleY(1)
}
to {
  transform: scaleY(0)
}
`;

const appear = keyframes`
from {
  transform: scaleY(0)
}
to {
  transform: scaleY(1)
}
`;

const LogoComponent = styled.div`
  .line {
    position: relative;

    .not-playing {
      display: flex;
      transform-origin: top;
    }

    .playing {
      position: absolute;
      min-width: 400px;
      top: 0;
      color: ${props => props.theme.accent};
      transform: scaleY(0);
      transform-origin: bottom;
    }
  }

  .disappear {
    animation: ${disappear} 0.5s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
    animation-delay: 1s;
  }

  .appear {
    animation: ${appear} 0.5s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
    animation-delay: 1s;
  }

  h1,
  h3 {
    text-transform: uppercase;
    margin: 0;
  }

  h1 {
    font-size: 4rem;
    margin-top: -0.2em;
  }

  h3 {
    font-size: 2rem;
  }

  img {
    max-width: 2.25rem;
    margin-left: 1rem;
  }
`;

const whoIsTheDriver = title =>
  title.length ? `${title.split(" ")[0].toUpperCase()}'S` : `NO-NAME'S`;

function Logo({ title }) {
  return (
    <LogoComponent title={title}>
      <div className="line">
        <div className={`not-playing ${title.length && "disappear"}`}>
          <h3>The</h3>
          <img src={Car} alt="Car" />
        </div>
        <div className={`playing ${title.length && "appear"}`}>
          <h3>{whoIsTheDriver(title)}</h3>
        </div>
      </div>
      <h1>Race</h1>
    </LogoComponent>
  );
}

export default Logo;
