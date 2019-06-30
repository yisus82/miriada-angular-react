import React from 'react';
import '../../assets/styles/Footer.css';

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
    <form onSubmit={props.handleGameNameSubmit}>
      <input
        type="text"
        placeholder="Game Name"
        name="gameName"
        value={props.gameName}
        onChange={props.handleGameNameInputChange}
      />
      <button type="submit">Submit</button>
    </form>
  </footer>
);

export default Footer;
