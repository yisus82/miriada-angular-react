import { PLAYERX, VALUES } from '../constants/constants';

function gameReducer(state = VALUES, action) {
  switch (action.type) {
    case 'PLAY_POSITION':
      const newValue = action.turn === PLAYERX ? 'X' : 'O';
      let newState = JSON.parse(JSON.stringify(state));
      newState[action.row][action.column] = newValue;
      return newState;
    case 'RESET_GAME':
      return VALUES;
    default:
      return state;
  }
}
export default gameReducer;
