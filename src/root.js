import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const enhancers = composeWithDevTools({});
const state = {
  auth: {
    authenticated: localStorage.getItem('token'),
    firstName: localStorage.getItem('firstName'),
    lastName: localStorage.getItem('lastName'),
  },
};

export default ({ children }) => {
  const store = createStore(
    rootReducer,
    state,
    enhancers(applyMiddleware(thunk)),
  );

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
