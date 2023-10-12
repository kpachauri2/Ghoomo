// AppRoutes.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Registration from '../components/Registration';
import Login from '../components/Login';
import UserProfile from '../components/UserProfile';
import VehicleListing from '../components/VehicleListing';

const AppRoutes = () => (
  <Router>
    <Switch>
      <Route path="/register" component={Registration} />
      <Route path="/login" component={Login} />
      <Route path="/profile" component={UserProfile} />
      <Route path="/vehicles" component={VehicleListing} />
    </Switch>
  </Router>
);

export default AppRoutes;
