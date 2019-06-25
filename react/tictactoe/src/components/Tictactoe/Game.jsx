import React from 'react';
import { connect } from 'react-redux';
import { playPosition, resetGame } from '../../reducers/actions';
import '../../assets/styles/Game.css';
import Header from './Header';
import Board from './Board';
import Footer from './Footer';

class Game extends React.Component {
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
  };

  render() {
    return (
      <div>
        <Header winner={this.props.winner} turn={this.props.turn} />
        <Board
          winner={this.props.winner}
          values={this.props.values}
          handleSquareClick={this.handleSquareClick}
        />
        <Footer numberMovements={this.props.numberMovements} resetGame={this.resetGame} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    values: state.values,
    turn: state.turn,
    numberMovements: state.numberMovements,
    winner: state.winner
  };
}
export default connect(mapStateToProps)(Game);
