import React from 'react';
import '../assets/styles/Square.css';

const Square = props => (
  <button
    onClick={() => {
      if (props.value === '-' && !props.winner) {
        props.handleSquareClick(props.rowIndex, props.columnIndex);
      }
    }}
    className={'square' + (props.value !== '-' || props.winner ? ' disabled' : '')}
  >
    {props.value}
  </button>
);

export default Square;
