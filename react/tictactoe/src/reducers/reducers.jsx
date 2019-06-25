import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import gameReducer from './gameReducer';
import turnReducer from './turnReducer';
import numberMovementsReducer from './numberMovementsReducer';
import winnerReducer from './winnerReducer';
import fetchReducer from './fetchReducer';

export default history =>
  combineReducers({
    router: connectRouter(history),
    turn: turnReducer,
    values: gameReducer,
    numberMovements: numberMovementsReducer,
    winner: winnerReducer,
    fetch: fetchReducer
  });
