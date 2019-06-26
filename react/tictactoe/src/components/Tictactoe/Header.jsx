import React from 'react';
import '../../assets/styles/Header.css';

const Header = props => (
  <header className="game">
    <h3>Welcome {props.playerName !== '' ? props.playerName : 'Guest'}!</h3>
    <strong>{props.winner ? 'Winner:' : 'Turn:'} </strong> {props.winner || props.turn}
  </header>
);

export default Header;
