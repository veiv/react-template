import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducers from './reducers/rootReducer';

const store = createStore(rootReducers, applyMiddleware(thunkMiddleware));

store.subscribe(() => {});
export default store;
