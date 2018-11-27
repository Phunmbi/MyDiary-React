import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import '../styles/styles.scss';
import LandingPage from '../views/LandingPage';

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={LandingPage} />
    </div>
  </BrowserRouter>
);

export default App;
