function numberMovementsReducer(state = 0, action) {
  switch (action.type) {
    case 'PLAY_POSITION':
      return state + 1;
    case 'RESET_GAME':
      return 0;
    case 'FETCH_STATE_SUCCESS':
      return action.state.numberMovements;
    default:
      return state;
  }
}

export default numberMovementsReducer;
