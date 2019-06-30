function lastSavedGameReducer(state = '', action) {
  let url = '';
  switch (action.type) {
    case 'DELETE_GAME':
      const game = action.savedGames.find(game => game.id === action.id);
      if (game) {
        if (game.url === state) {
          const index = action.savedGames.indexOf(game);
          if (index > 0) {
            url = action.savedGames[index - 1].url;
          }
        }
      }
      return url;
    case 'SAVE_GAME_SUCCESS':
      return action.response.uri;
    default:
      return state;
  }
}

export default lastSavedGameReducer;
