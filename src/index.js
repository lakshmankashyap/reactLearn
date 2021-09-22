import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './App.js'
const counter = (state = 0, action) => {
switch(action.type) {
case 'INCREMENT':
   return state = state + 1;
case 'DECREMENT':
   return state = state - 1;
default:
   return state;
 }
};
const store = createStore(counter);
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);