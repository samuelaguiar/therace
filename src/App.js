import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

import Game from "./components/Game";
import Info from "./components/Info";
import { Provider } from "react-redux";
import React from "react";
import store from "./store";

const theme = {
  primary: "#2A3577",
  secondary: "#FFFFFF",
  accent: "#00DDDB",
  shadow: "0 3px 16px rgba(0, 0, 0, 0.46)",
  defaultFont: `'Chango', sans-serif`
};

const StyledApp = styled.div`
  display: flex;
  min-width: 100vw;
  min-height: 100vh;
`;

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Chango';
  src: url('assets/font/chango.ttf');
}

*, *:before, *:after {
    box-sizing: inherit;
  }

body {
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.secondary};
  font-family: ${props => props.theme.defaultFont};
  display: flex;
  font-size: 1rem;
  margin: 0;
}
`;

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StyledApp>
          <Info></Info>
          <Game></Game>
        </StyledApp>
        <GlobalStyle></GlobalStyle>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
