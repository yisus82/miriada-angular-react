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

export function fetchState() {
  return async dispatch => {
    dispatch(fetchStateBegin());
    try {
      const response = await fetch(API);
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
    error: error
  };
}

function handleErrors(response) {
  if (!response.ok) {
    console.log('ERROR! ' + response.statusText);
    throw Error(response.statusText);
  }
  return response;
}
