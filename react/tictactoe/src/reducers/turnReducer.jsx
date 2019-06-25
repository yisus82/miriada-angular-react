import { PLAYERX, PLAYERO } from '../constants/constants';

function turnReducer(state = PLAYERX, action) {
  switch (action.type) {
    case 'PLAY_POSITION':
      return action.turn === PLAYERX ? PLAYERO : PLAYERX;
    case 'RESET_GAME':
      return PLAYERX;
    case 'FETCH_STATE_SUCCESS':
      return action.state.turn;
    default:
      return state;
  }
}

export default turnReducer;
