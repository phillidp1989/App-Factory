import React from 'react';
import AppBar from './components/AppBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AllPosts from './pages/AllPosts';
import Dashboard from './pages/Dashboard';
import NewPost from './pages/NewPost';
import PostSolutions from './pages/PostSolutions';
import UserSolutions from './pages/UserSolutions';
import UserPosts from './pages/UserPage';
import AppPost from './pages/AppPost';
import Login from './pages/Login';
import PrivateRoute from './hocs/PrivateRoute';
import DeveloperRoute from './hocs/DeveloperRoute';
import { CssBaseline } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import GuestRoute from './hocs/GuestRoute';
import SolutionForm from './pages/Solution/SolutionForm';
import { blue } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: blue
  }
});

export default function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Router>
        <Switch>
          <GuestRoute path="/login" component={Login} />
          <Route path="*" component={AppBar} />
        </Switch>
        <Route exact path="/" component={AllPosts} />
        <Route path="/userposts" component={UserPosts} />
        <Route path="/postsolutions" component={PostSolutions} />
        <Route path="/usersolutions" component={UserSolutions} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/posts/new" component={NewPost} />
        <DeveloperRoute path="/posts/solution/:id" component={SolutionForm} />
      </Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Switch>
            <GuestRoute path="/login" component={Login} />
            <Route path="*" component={AppBar} />
          </Switch>
          <Route exact path="/" component={AllPosts} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <Switch>
            <PrivateRoute path="/posts/new" component={NewPost} />
            <PrivateRoute path="/posts/edit/:id" component={NewPost} />
            <DeveloperRoute
              path="/posts/solution/:id"
              component={SolutionForm}
            />
            <Route path="/posts/:id" component={AppPost} />
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}
