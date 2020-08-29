import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  facebook: {
    color: '#ffffff',
    backgroundColor: '#3b5998',
    margin: 15
  },
  google: {
    backgroundColor: '#DB4437',
    color: '#ffffff',
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

function PosterLogin() {
  const classes = useStyles();

  return (
    <div className="poster">
      <h2>Login as a poster</h2>
      <div className={classes.btnContainer}>
        <a href="http://localhost:5000/auth/google" className={classes.link}>
          <Button
            variant="contained"
            className={classes.google}
            color="primary"
          >
            <div className={classes.icon}>
              <i className="fab fa-google"></i>
            </div>{' '}
            Login with Google
          </Button>
        </a>
        <a href="http://localhost:5000/auth/facebook" className={classes.link}>
          <Button
            variant="contained"
            className={classes.facebook}
            color="secondary"
          >
            <div className={classes.icon}>
              <i className="fab fa-facebook"></i>
            </div>
            Login with Facebook
          </Button>
        </a>
      </div>
    </div>
  );
}

export default PosterLogin;
