import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Game from './Tictactoe/Game';
import Home from './Home';

const Main = props => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/new" component={Game} />
    <Route path="/continue" component={Game} />
  </Switch>
);

export default Main;
