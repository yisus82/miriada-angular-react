import { combineReducers } from 'redux';
import gameReducer from './gameReducer';
import turnReducer from './turnReducer';
import numberMovementsReducer from './numberMovementsReducer';
import winnerReducer from './winnerReducer';

const GlobalState = combineReducers({
  turn: turnReducer,
  values: gameReducer,
  numberMovements: numberMovementsReducer,
  winner: winnerReducer
});

export default GlobalState;
