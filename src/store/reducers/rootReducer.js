import { combineReducers } from 'redux';
import postReducer from './postReducer';

const rootReducers = combineReducers({
  posts: postReducer,
});

export default rootReducers;
