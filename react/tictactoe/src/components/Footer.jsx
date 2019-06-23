import React from 'react';
import '../assets/styles/Footer.css';

const Footer = props => (
  <footer>
    <p>
      <strong>Number of movements:</strong> {props.numberMovements}
    </p>
    <button
      className={'btn' + (props.numberMovements === 0 ? ' disabled' : '')}
      onClick={() => props.resetGame()}
    >
      Reset game
    </button>
  </footer>
);

export default Footer;
