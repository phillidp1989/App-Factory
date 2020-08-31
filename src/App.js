import React from 'react';
import AppBar from './components/AppBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import PrivateRoute from './hocs/PrivateRoute';
import { CssBaseline } from '@material-ui/core';
import GuestRoute from './hocs/GuestRoute';

export default function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Router>
        <AppBar />
        <Switch>
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <GuestRoute path="/login" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}
