import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  github: {
    color: '#ffffff',
    backgroundColor: '#333',
    margin: 15
  },
  btnContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  icon: {
    marginRight: 10
  },
  link: {
    textDecoration: 'none !important'
  }
}));

function DeveloperLogin() {
  const classes = useStyles();

  return (
    <div className="developer">
      <h2>Login as a developer</h2>
      <div className={classes.btnContainer}>
        <a href="http://localhost:5000/auth/github" className={classes.link}>
          <Button
            variant="contained"
            className={classes.github}
            color="primary"
          >
            <div className={classes.icon}>
              <i className="fab fa-github"></i>
            </div>{' '}
            Login with Github
          </Button>
        </a>
      </div>
    </div>
  );
}

export default DeveloperLogin;
