import React from 'react';
import AppBar from './components/AppBar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import NewPost from './pages/NewPost';
import AddIcon from '@material-ui/icons/Add';
import { CssBaseline, Fab, Zoom } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'fixed',
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
          <Route exact path="/post/new" component={NewPost} />
        </Switch>
        <Zoom in={true}>
          <Fab
            component={Link}
            to="/post/new"
            className={classes.fab}
            color="secondary"
            aria-label="New Post"
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </Router>
    </div>
  );
}
