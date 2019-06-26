function playerReducer(state = '', action) {
  switch (action.type) {
    case 'NEW_PLAYER':
      return action.playerName;
    case 'FETCH_STATE_SUCCESS':
      let playerName = action.state.playerName ? action.state.playerName : '';
      return playerName;
    case 'RESET_GAME':
      return '';
    default:
      return state;
  }
}

export default playerReducer;
