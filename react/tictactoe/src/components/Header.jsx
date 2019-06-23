import React from 'react';
import '../assets/styles/Header.css';

const Header = props => (
  <header>
    <strong>{props.winner ? 'Winner:' : 'Turn:'} </strong> {props.winner || props.turn}
  </header>
);

export default Header;
