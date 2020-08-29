import React from 'react';
import AppBar from './components/AppBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import LoginCard from './pages/Login';
import { CssBaseline } from '@material-ui/core';

export default function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Router>
        <AppBar />
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/login" component={LoginCard} />
        </Switch>
      </Router>
    </div>
  );
}
