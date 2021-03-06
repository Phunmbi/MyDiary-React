import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import '../styles/styles.scss';
import authenticate from '../components/hoc/authenticate';
import LandingPage from '../views/LandingPage';
import Dashboard from '../components/dashboard';
import Signin from '../components/auth/Signin';
import Add from '../components/add';
import Edit from '../components/Edit';
import ViewEntry from '../components/ViewEntry';
import DeleteEntry from '../components/Delete';
import Profile from '../components/Profile';

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/auth/signin" component={Signin} />
      <Route exact path="/dashboard" component={authenticate(Dashboard)} />
      <Route exact path="/entries/add" component={authenticate(Add)} />
      <Route exact path="/entries/edit/:id" component={authenticate(Edit)} />
      <Route exact path="/entries/view/:id" component={authenticate(ViewEntry)} />
      <Route exact path="/entries/delete/:id" component={authenticate(DeleteEntry)} />
      <Route exact path="/profile" component={authenticate(Profile)} />
    </div>
  </BrowserRouter>
);

export default App;
