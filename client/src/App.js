// App.js
import React from 'react';
import AppRoutes from './routes/AppRoutes';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Registration from './Registration';
import Login from './Login';
import UserProfile from './UserProfile';
import VehicleListing from './VehicleListing';


function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Registration} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={UserProfile} />
        <Route path="/vehicles" component={VehicleListing} />
      </div>
    </Router>
  );
}

export default App;
