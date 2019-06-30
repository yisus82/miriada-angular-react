function savedGamesReducer(state = [], action) {
  switch (action.type) {
    case 'DELETE_GAME':
      const filteredGames = state.filter(game => game.id !== action.id);
      return filteredGames;
    case 'SAVE_GAME_SUCCESS':
      let newState = JSON.parse(JSON.stringify(state));
      const newSavedGame = {
        id: Date.now(),
        name: action.gameName,
        url: action.response.uri
      };
      newState.push(newSavedGame);
      return newState;
    default:
      return state;
  }
}

export default savedGamesReducer;
