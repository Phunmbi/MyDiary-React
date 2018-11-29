import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import '../styles/styles.scss';
import authenticate from '../components/hoc/authenticate';
import LandingPage from '../views/LandingPage';
import Dashboard from '../components/Dashboard';
import Signin from '../components/auth/Signin';
import Add from '../components/Add';
import Edit from '../components/Edit';
import ViewEntry from '../components/ViewEntry';

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={LandingPage} />
      <Route path="/auth/signin" component={Signin} />
      <Route path="/dashboard" component={authenticate(Dashboard)} />
      <Route path="/entries/add" component={authenticate(Add)} />
      <Route path="/entries/edit/:id" component={authenticate(Edit)} />
      <Route path="/entries/:id" component={authenticate(ViewEntry)} />
    </div>
  </BrowserRouter>
);

export default App;
