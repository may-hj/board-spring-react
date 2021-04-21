import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'

// import counterReducer from 'counter/reducer/Counter.reducer'
import counterSlice from 'counter/reducer/Counter.slice'

import App from './App';

import 'index.css';

const rootReducer = combineReducers({counterSlice})
// const store = createStore(rootReducer)
const store = configureStore({reducer : rootReducer})

ReactDOM.render(
  <Provider store={ store }>
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
