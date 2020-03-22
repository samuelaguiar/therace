import * as actionGame from "../constant/game";

import { createStore } from "redux";

const initialState = {
  isGameStarted: false,
  gameStatus: actionGame.NOT_STARTED,
  driverName: ""
};

function game(state = initialState, action) {
  switch (action.type) {
    case actionGame.UPDATE_DRIVER_NAME:
      return { ...state, driverName: action.payload.name };
    case actionGame.UPDATE_GAME_START:
      return { ...state, isGameStarted: action.payload.status };
    case actionGame.UPDATE_GAME_STATUS:
      return { ...state, gameStatus: action.payload.status };
    default:
      return state;
  }
}

const store = createStore(game);

export default store;
