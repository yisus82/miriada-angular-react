import { Provider } from 'react-redux';
import { createStore } from 'redux';
import React from 'react';
import { PLAYERX, VALUES } from '../constants/constants';
import GlobalState from '../reducers/reducers';
import App from './App';

export default class ReduxProvider extends React.Component {
  constructor(props) {
    super(props);
    this.initialState = {
      turn: PLAYERX,
      values: VALUES,
      numberMovements: 0,
      winner: ''
    };
    this.store = createStore(GlobalState, this.initialState);
  }
  render() {
    return (
      <Provider store={this.store}>
        <div style={{ minHeight: '100vh' }}>
          <App />
        </div>
      </Provider>
    );
  }
}
