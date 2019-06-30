import { API } from '../constants/constants';

export function playPosition(row, column, turn, values, numberMovements, winner) {
  return {
    type: 'PLAY_POSITION',
    row,
    column,
    turn,
    values,
    numberMovements,
    winner
  };
}

export function resetGame() {
  return { type: 'RESET_GAME' };
}

export function fetchState(url) {
  const fetchUrl = url || API;
  return async dispatch => {
    dispatch(fetchStateBegin());
    try {
      const response = await fetch(fetchUrl);
      const res = await handleErrors(response);
      const json = await res.json();
      dispatch(fetchStateSuccess(json));
      return json;
    } catch (error) {
      console.log(error);
      return dispatch(fetchStateFailure(error));
    }
  };
}

export function fetchStateBegin() {
  return { type: 'FETCH_STATE_BEGIN' };
}

export function fetchStateSuccess(json_received) {
  return {
    type: 'FETCH_STATE_SUCCESS',
    state: json_received
  };
}

export function fetchStateFailure(error) {
  return {
    type: 'FETCH_STATE_FAILURE',
    error
  };
}

export function newPlayer(playerName) {
  return {
    type: 'NEW_PLAYER',
    playerName
  };
}

export function saveGame(gameName, gameInfo) {
  return async dispatch => {
    try {
      const options = {
        method: 'POST',
        body: JSON.stringify(gameInfo),
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        }
      };
      const response = await fetch('https://api.myjson.com/bins', options);
      const res = await handleErrors(response);
      const json = await res.json();
      dispatch(saveGameSuccess(gameName, json));
      return json;
    } catch (error) {
      console.log(error);
      return dispatch(saveGameFailure(error));
    }
  };
}

export function saveGameSuccess(gameName, jsonReceived) {
  return {
    type: 'SAVE_GAME_SUCCESS',
    gameName,
    response: jsonReceived
  };
}

export function saveGameFailure(error) {
  return {
    type: 'SAVE_GAME_FAILURE',
    error
  };
}

export function deleteGame(id, savedGames) {
  return {
    type: 'DELETE_GAME',
    id,
    savedGames
  };
}

function handleErrors(response) {
  if (!response.ok) {
    console.log('ERROR! ' + response.statusText);
    throw Error(response.statusText);
  }
  return response;
}
