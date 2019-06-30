import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Game from './Tictactoe/Game';
import Home from './Home';
import SavedGames from './SavedGames';

const Main = props => (
  <Switch>
    <Route key="home" exact path="/" component={Home} />
    <Route key="new" path="/new" component={Game} />
    <Route key="continue" exact path="/continue" render={() => <Game continue />} />
    <Route key="continue_id" path="/continue/:id" component={Game} />
    <Route key="games" path="/games" component={SavedGames} />
  </Switch>
);

export default Main;
