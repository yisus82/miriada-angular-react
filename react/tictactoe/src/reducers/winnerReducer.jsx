import { PLAYERX, PLAYERO } from '../constants/constants';

function winnerReducer(state = '', action) {
  switch (action.type) {
    case 'PLAY_POSITION':
      const value = action.turn === PLAYERX ? 'X' : 'O';
      let values = JSON.parse(JSON.stringify(action.values));
      values[action.row][action.column] = value;
      if (action.turn === PLAYERX) {
        if (
          (values[0][0] === 'X' && values[0][1] === 'X' && values[0][2] === 'X') ||
          (values[1][0] === 'X' && values[1][1] === 'X' && values[1][2] === 'X') ||
          (values[2][0] === 'X' && values[2][1] === 'X' && values[2][2] === 'X') ||
          (values[0][0] === 'X' && values[1][0] === 'X' && values[2][0] === 'X') ||
          (values[0][1] === 'X' && values[1][1] === 'X' && values[2][1] === 'X') ||
          (values[0][2] === 'X' && values[1][2] === 'X' && values[2][2] === 'X') ||
          (values[0][0] === 'X' && values[1][1] === 'X' && values[2][2] === 'X') ||
          (values[0][2] === 'X' && values[1][1] === 'X' && values[2][0] === 'X')
        ) {
          return PLAYERX;
        }
      } else if (
        (values[0][0] === 'O' && values[0][1] === 'O' && values[0][2] === 'O') ||
        (values[1][0] === 'O' && values[1][1] === 'O' && values[1][2] === 'O') ||
        (values[2][0] === 'O' && values[2][1] === 'O' && values[2][2] === 'O') ||
        (values[0][0] === 'O' && values[1][0] === 'O' && values[2][0] === 'O') ||
        (values[0][1] === 'O' && values[1][1] === 'O' && values[2][1] === 'O') ||
        (values[0][2] === 'O' && values[1][2] === 'O' && values[2][2] === 'O') ||
        (values[0][0] === 'O' && values[1][1] === 'O' && values[2][2] === 'O') ||
        (values[0][2] === 'O' && values[1][1] === 'O' && values[2][0] === 'O')
      ) {
        return PLAYERO;
      }
      if (action.numberMovements === 8) {
        return 'TIE';
      }
      return '';
    case 'RESET_GAME':
      return '';
    case 'FETCH_STATE_SUCCESS':
      return action.state.winner;
    default:
      return state;
  }
}

export default winnerReducer;
