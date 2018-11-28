import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import '../styles/styles.scss';
import LandingPage from '../views/LandingPage';
import Dashboard from '../components/dashboard';
import Signin from '../components/auth/signin'

const App = () => (
  <BrowserRouter>
    <div>
      <Route path="/auth/signin" component={Signin} />
      <Route path="/dashboard" component={Dashboard} />
      <Route exact path="/" component={LandingPage} />
    </div>
  </BrowserRouter>
);

export default App;
