import React from 'react';
import { withRouter } from 'react-router-dom';
import '../assets/styles/SavedGame.css';

class SavedGame extends React.Component {
  handleContinueClick = () => this.props.history.push('continue/' + this.props.savedGame.id);

  handleDeleteClick = () => this.props.deleteGame(this.props.savedGame.id);

  render() {
    return (
      <div className="saved">
        <span>{this.props.savedGame.name}</span>
        <button className="saved" onClick={() => this.handleContinueClick()}>
          Continue
        </button>
        <button className="saved" onClick={() => this.handleDeleteClick()}>
          Delete
        </button>
      </div>
    );
  }
}

export default withRouter(SavedGame);
