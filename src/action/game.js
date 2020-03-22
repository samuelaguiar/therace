import * as actionGame from "../constant/game";

export function updateDriverName(name) {
  return {
    type: actionGame.UPDATE_DRIVER_NAME,
    payload: { name }
  };
}

export function updateGameStart(status) {
  return {
    type: actionGame.UPDATE_GAME_START,
    payload: { status }
  };
}

export function updateGameStatus(status) {
  return {
    type: actionGame.UPDATE_GAME_STATUS,
    payload: { status }
  };
}
