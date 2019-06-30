import React from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/styles/NavBar.css';

const NavBar = props => (
  <header>
    <h1>Welcome to Tic Tac Toe!</h1>
    <nav>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/new">
        New Game
      </NavLink>
      <NavLink to="/continue">Continue</NavLink>
      <NavLink exact to="/games">
        Saved Games
      </NavLink>
    </nav>
  </header>
);

export default NavBar;
