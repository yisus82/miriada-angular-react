export const PLAYERX = 'Player 1 (X)';
export const PLAYERO = 'Player 2 (O)';
export const VALUES = [['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']];
export const FETCH = {
  fetching: false,
  finished: false,
  error: null
};
export const API = 'https://api.myjson.com/bins/srqyx';

export const INITIAL_STATE = {
  turn: PLAYERX,
  values: VALUES,
  numberMovements: 0,
  winner: '',
  lastSavedGameUrl: '',
  savedGames: []
};
