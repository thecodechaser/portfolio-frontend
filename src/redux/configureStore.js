import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import projectsReducer from './projects/projects';
import postsReducer from './blogs/posts';
import commentsReducer from './blogs/comments';
import repliesReducer from './blogs/replies';
import likesReducer from './blogs/likes';

const reducer = combineReducers({
  projectsReducer, postsReducer, commentsReducer, repliesReducer, likesReducer,
});

const store = createStore(
  reducer, applyMiddleware(logger, thunk),
);

export default store;
