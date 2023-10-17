import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import rootReducer from './redux/Reducers/RootReducer';
//Provider is a global COmponent
//Anything which you will pass to provider will be accessble to all component of react
const redux = require('redux');
const createStore = require('redux').createStore;
//Create Store is a function
const myStore = createStore(rootReducer);
//console.log(myStore);
//now get the latest value of store
//console.log(myStore.getState());
ReactDOM.render(
  <React.StrictMode>
    <Provider store={myStore} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

