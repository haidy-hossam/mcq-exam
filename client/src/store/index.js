import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import mcq from './reducers/mcq';
import * as mcqAction from './actions/mcq';

const initialState = {};
const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
const middleware = [thunk];

export { mcqAction };

export default createStore(
  combineReducers({
    mcq,
  }),
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);
