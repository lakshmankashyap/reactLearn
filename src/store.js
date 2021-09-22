import { createStore } from 'redux'
import {postsReducer} from './reducers/post'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    posts: postsReducer
});

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;