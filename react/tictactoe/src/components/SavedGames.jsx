import React from 'react';
import { connect } from 'react-redux';
import SavedGame from './SavedGame';
import '../assets/styles/SavedGames.css';
import { deleteGame } from '../reducers/actions';

const SavedGames = props => {
  const savedGames = props.savedGames.map((savedGame, index) => {
    return (
      <li key={index}>
        <SavedGame
          savedGame={savedGame}
          deleteGame={id => props.dispatch(new deleteGame(id, props.savedGames))}
        />
      </li>
    );
  });
  return <ul>{savedGames.length > 0 ? savedGames : 'There are no saved games yet.'}</ul>;
};

function mapStateToProps(state) {
  return {
    values: state.values,
    turn: state.turn,
    numberMovements: state.numberMovements,
    winner: state.winner,
    playerName: state.playerName,
    fetch: state.fetch,
    lastSavedGameUrl: state.lastSavedGameUrl,
    savedGames: state.savedGames
  };
}
export default connect(mapStateToProps)(SavedGames);
