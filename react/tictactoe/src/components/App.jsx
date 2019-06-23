import React from 'react';
import '../assets/styles/App.css';
import Header from './Header.jsx';
import Board from './Board.jsx';
import Footer from './Footer';

const PLAYERX = 'Player 1 (X)';
const PLAYERO = 'Player 2 (O)';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      turn: PLAYERX,
      values: [['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']],
      numberMovements: 0,
      winner: ''
    };
  }

  handleSquareClick = (rowNumber, columnNumber) => {
    let newValues = [...this.state.values];
    newValues[rowNumber][columnNumber] = this.state.turn === PLAYERX ? 'X' : 'O';
    const newNumberMovements = this.state.numberMovements + 1;
    const newWinner = this.checkWinner();
    this.setState({
      turn: this.state.turn === PLAYERX ? PLAYERO : PLAYERX,
      values: newValues,
      numberMovements: newNumberMovements,
      winner: newWinner
    });
  };

  checkWinner = () => {
    if (
      (this.state.values[0][0] === 'X' &&
        this.state.values[0][1] === 'X' &&
        this.state.values[0][2] === 'X') ||
      (this.state.values[1][0] === 'X' &&
        this.state.values[1][1] === 'X' &&
        this.state.values[1][2] === 'X') ||
      (this.state.values[2][0] === 'X' &&
        this.state.values[2][1] === 'X' &&
        this.state.values[2][2] === 'X') ||
      (this.state.values[0][0] === 'X' &&
        this.state.values[1][0] === 'X' &&
        this.state.values[2][0] === 'X') ||
      (this.state.values[0][1] === 'X' &&
        this.state.values[1][1] === 'X' &&
        this.state.values[2][1] === 'X') ||
      (this.state.values[0][2] === 'X' &&
        this.state.values[1][2] === 'X' &&
        this.state.values[2][2] === 'X') ||
      (this.state.values[0][0] === 'X' &&
        this.state.values[1][1] === 'X' &&
        this.state.values[2][2] === 'X') ||
      (this.state.values[0][2] === 'X' &&
        this.state.values[1][1] === 'X' &&
        this.state.values[2][0] === 'X')
    ) {
      return PLAYERX;
    } else if (
      (this.state.values[0][0] === 'O' &&
        this.state.values[0][1] === 'O' &&
        this.state.values[0][2] === 'O') ||
      (this.state.values[1][0] === 'O' &&
        this.state.values[1][1] === 'O' &&
        this.state.values[1][2] === 'O') ||
      (this.state.values[2][0] === 'O' &&
        this.state.values[2][1] === 'O' &&
        this.state.values[2][2] === 'O') ||
      (this.state.values[0][0] === 'O' &&
        this.state.values[1][0] === 'O' &&
        this.state.values[2][0] === 'O') ||
      (this.state.values[0][1] === 'O' &&
        this.state.values[1][1] === 'O' &&
        this.state.values[2][1] === 'O') ||
      (this.state.values[0][2] === 'O' &&
        this.state.values[1][2] === 'O' &&
        this.state.values[2][2] === 'O') ||
      (this.state.values[0][0] === 'O' &&
        this.state.values[1][1] === 'O' &&
        this.state.values[2][2] === 'O') ||
      (this.state.values[0][2] === 'O' &&
        this.state.values[1][1] === 'O' &&
        this.state.values[2][0] === 'O')
    ) {
      return PLAYERO;
    }
    if (this.state.numberMovements === 8) {
      return 'TIE';
    }
    return '';
  };

  resetGame = () => {
    if (this.state.numberMovements !== 0) {
      this.setState({
        turn: PLAYERX,
        values: [['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']],
        numberMovements: 0,
        winner: ''
      });
    }
  };

  render() {
    return (
      <div>
        <h1>Welcome to Tic Tac Toe!</h1>
        <Header winner={this.state.winner} turn={this.state.turn} />
        <Board
          winner={this.state.winner}
          values={this.state.values}
          handleSquareClick={this.handleSquareClick}
        />
        <Footer numberMovements={this.state.numberMovements} resetGame={this.resetGame} />
      </div>
    );
  }
}
