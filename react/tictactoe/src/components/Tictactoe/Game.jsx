import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { playPosition, resetGame, fetchState, newPlayer } from '../../reducers/actions';
import '../../assets/styles/Game.css';
import Header from './Header';
import Board from './Board';
import Footer from './Footer';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.redirect = false;
    this.state = {
      playerName: ''
    };
  }

  handlePlayerInputChange = event => {
    this.setState({ playerName: event.target.value });
  };

  handlePlayerSubmit = event => {
    event.preventDefault();
    this.props.dispatch(newPlayer(this.state.playerName));
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
    this.redirect = true;
  };

  componentDidMount() {
    if (this.props.continue) {
      this.props.dispatch(fetchState());
    } else {
      this.resetGame();
    }
  }

  render() {
    if (this.redirect) {
      this.redirect = false;
      return <Redirect to="/new" />;
    }
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
            <Footer numberMovements={this.props.numberMovements} resetGame={this.resetGame} />
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
    fetch: state.fetch
  };
}
export default connect(mapStateToProps)(Game);
