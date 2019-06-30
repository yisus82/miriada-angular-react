import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { playPosition, resetGame, fetchState, newPlayer, saveGame } from '../../reducers/actions';
import '../../assets/styles/Game.css';
import Header from './Header';
import Board from './Board';
import Footer from './Footer';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.redirect = false;
    this.state = {
      playerName: '',
      gameName: ''
    };
  }

  handlePlayerInputChange = event => {
    this.setState({ playerName: event.target.value });
  };

  handlePlayerSubmit = event => {
    event.preventDefault();
    const playerName = this.state.playerName;
    this.setState({ playerName: '' });
    this.props.dispatch(newPlayer(playerName));
  };

  handleGameNameInputChange = event => {
    this.setState({ gameName: event.target.value });
  };

  handleGameNameSubmit = event => {
    event.preventDefault();
    const gameName = this.state.gameName;
    this.setState({ gameName: '' });
    this.saveGame(gameName);
  };

  handleSquareClick = (rowNumber, columnNumber) => {
    this.props.dispatch(
      playPosition(
        rowNumber,
        columnNumber,
        this.props.turn,
        this.props.values,
        this.props.numberMovements,
        this.props.winner
      )
    );
  };

  resetGame = () => {
    this.props.dispatch(resetGame());
    this.props.history.push('/new');
  };

  saveGame = gameName => {
    const gameInfo = {
      turn: this.props.turn,
      values: this.props.values,
      numberMovements: this.props.numberMovements,
      winner: this.props.winner,
      playerName: this.props.playerName
    };
    this.props.dispatch(saveGame(gameName, gameInfo));
  };

  componentDidMount() {
    if (this.props.continue || (this.props.match && this.props.match.params.id)) {
      if (this.props.match && this.props.match.params.id) {
        const id = Number(this.props.match.params.id);
        const savedGame = this.props.savedGames.find(game => game.id === id);
        if (savedGame) {
          this.props.dispatch(fetchState(savedGame.url));
        } else {
          this.resetGame();
        }
      } else {
        this.props.dispatch(fetchState(this.props.lastSavedGameUrl || ''));
      }
    } else {
      this.resetGame();
    }
  }

  render() {
    if (this.props.continue && this.props.fetch.fetching) {
      return <div className="game">Loading the saved game...</div>;
    } else if (this.props.continue && !this.props.fetch.fetching && this.props.fetch.error) {
      console.log(this.props.fetch.error);
      return (
        <div className="game">
          Error getting state from server. The error was: {this.props.fetch.error.toString()}
        </div>
      );
    } else {
      if (this.props.playerName !== '') {
        return (
          <div>
            <Header
              playerName={this.props.playerName}
              winner={this.props.winner}
              turn={this.props.turn}
            />
            <Board
              winner={this.props.winner}
              values={this.props.values}
              handleSquareClick={this.handleSquareClick}
            />
            <Footer
              handleGameNameSubmit={this.handleGameNameSubmit}
              handleGameNameInputChange={this.handleGameNameInputChange}
              gameName={this.state.gameName}
              numberMovements={this.props.numberMovements}
              resetGame={this.resetGame}
            />
          </div>
        );
      } else {
        return (
          <header className="game">
            <form onSubmit={this.handlePlayerSubmit}>
              <input
                type="text"
                placeholder="Player Name"
                name="name"
                value={this.state.playerName}
                onChange={this.handlePlayerInputChange}
              />
              <button type="submit">Submit</button>
            </form>
          </header>
        );
      }
    }
  }
}

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
export default withRouter(connect(mapStateToProps)(Game));
