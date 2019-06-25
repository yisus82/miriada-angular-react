import React from 'react';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import { ConnectedRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import { PLAYERX, VALUES } from '../constants/constants';
import createRootReducer from '../reducers/reducers';
import NavBar from './NavBar';
import Main from './Main';

const history = createBrowserHistory();

export default class ReduxProvider extends React.Component {
  constructor(props) {
    super(props);
    this.initialState = {
      turn: PLAYERX,
      values: VALUES,
      numberMovements: 0,
      winner: ''
    };
    this.store = createStore(
      createRootReducer(history),
      this.initialState,
      compose(applyMiddleware(routerMiddleware(history), thunk))
    );
  }
  render() {
    return (
      <Provider store={this.store}>
        <ConnectedRouter history={history}>
          <div style={{ height: '100%', width: '100%' }}>
            <NavBar />
            <Main />
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}
