import { FETCH } from '../constants/constants';

function fetchReducer(state = FETCH, action) {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case 'FETCH_STATE_BEGIN':
      newState.fetching = true;
      return newState;
    case 'FETCH_STATE_SUCCESS':
      newState.fetching = false;
      newState.finished = true;
      return newState;
    case 'FETCH_STATE_FAILURE':
      newState.fetching = false;
      newState.error = action.error;
      return newState;
    default:
      return state;
  }
}

export default fetchReducer;
