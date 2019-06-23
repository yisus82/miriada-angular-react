import React from 'react';
import Square from './Square';
import '../assets/styles/Board.css';

const Board = props => {
  const board = props.values.map((rowValues, rowIndex) => {
    const row = rowValues.map((value, columnIndex) => {
      return (
        <Square
          winner={props.winner}
          value={value}
          key={`(${rowIndex},${columnIndex})`}
          rowIndex={rowIndex}
          columnIndex={columnIndex}
          handleSquareClick={props.handleSquareClick}
        />
      );
    });
    return (
      <div className="row" key={rowIndex}>
        {row}
      </div>
    );
  });

  return <div>{board}</div>;
};

export default Board;
