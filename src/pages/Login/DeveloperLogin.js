import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  github: {
    color: '#ffffff',
    backgroundColor: '#333',
    margin: 15,
    "&:hover, &:focus": {
      backgroundColor: '#0c0c0c',
    }
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
  developer: {
    [theme.breakpoints.up(780)]: {
      width: '50%'
    }
  }
}));

export default function DeveloperLogin() {
  const classes = useStyles();

  return (
    <div className={classes.developer}>
      <Typography variant="h6">
        Login as a developer
      </Typography>
      <div className={classes.btnContainer}>
        <Button
          variant="contained"
          className={classes.github}
          color="primary"
          href="http://localhost:5000/auth/github"
        >
          <div className={classes.icon}>
            <i className="fab fa-github"></i>
          </div>{' '}
          Login with Github
        </Button>
      </div>
    </div>
  );
}

