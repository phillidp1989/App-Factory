import React from 'react';
import AppBar from './components/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AllPosts from './pages/AllPosts/index';

export default function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Router>
        <AppBar />
        <Switch>
          <Route exact path="/allposts" component={AllPosts} />
        </Switch>
      </Router>
    </div>
  );
}
