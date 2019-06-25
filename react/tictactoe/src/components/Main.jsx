import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Game from './Tictactoe/Game';
import Home from './Home';

const Main = props => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route key="new" path="/new" component={Game} />
    <Route key="continue" path="/continue" render={() => <Game continue />} />
  </Switch>
);

export default Main;
