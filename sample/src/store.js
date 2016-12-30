import { createStore } from 'redux'
import rootReducer from './reducers/index'

import posts from './data/posts';
import comments from './data/comments';

let defaultState = {
  posts,
  comments
}


const store = createStore(rootReducer, defaultState);
export default store;

