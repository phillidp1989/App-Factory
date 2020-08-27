import React from 'react';
import AppBar from './components/AppBar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import EditIcon from '@material-ui/icons/Edit';
import { CssBaseline, Fab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  }
}));

export default function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <CssBaseline />
      <Router>
        <AppBar />
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
        <Fab
          component={Link}
          to="/post/new"
          className={classes.fab}
          color="secondary"
          aria-label="New Post"
        >
          <EditIcon />
        </Fab>
      </Router>
    </div>
  );
}
