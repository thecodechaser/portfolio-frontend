import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import projectsReducer from './projects/projects';

const reducer = combineReducers({
  projectsReducer,
});

const store = createStore(
  reducer, applyMiddleware(logger, thunk),
);

export default store;
