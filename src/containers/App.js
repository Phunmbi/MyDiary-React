import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import '../styles/styles.scss';
import authenticate from '../components/hoc/authenticate';
import LandingPage from '../views/LandingPage';
import Dashboard from '../components/Dashboard';
import Signin from '../components/auth/Signin';
import Add from '../components/Add';

const App = () => (
  <BrowserRouter>
    <div>
      <Route path="/auth/signin" component={Signin} />
      <Route path="/dashboard" component={authenticate(Dashboard)} />
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/entries/add" component={authenticate(Add)} />
    </div>
  </BrowserRouter>
);

export default App;
