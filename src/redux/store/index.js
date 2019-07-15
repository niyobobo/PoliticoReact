import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import initialState from './initialState';

const middleware = [thunk];
const store = createStore(reducers, initialState, composeWithDevTools(
  applyMiddleware(...middleware)
));

export default store;