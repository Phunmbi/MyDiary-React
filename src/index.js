import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import App from './containers/App';
import Root from './root';


ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.getElementById('index')
);
