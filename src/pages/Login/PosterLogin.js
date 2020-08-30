import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import GoogleLogin from '../../images/btn_google_signin_dark_normal_web.png';

const useStyles = makeStyles((theme) => ({
  facebook: {
    color: '#ffffff',
    backgroundColor: '#3b5998',
    margin: 15,
    '&:hover, &:focus': {
      backgroundColor: '#003069'
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
  button: {
    width: 250
  },
  img: {
    width: '100%'
  },
  poster: {
    [theme.breakpoints.up(780)]: {
      width: '50%'
    }
  }
}));

function PosterLogin() {
  const classes = useStyles();

  return (
    <div className={classes.poster}>
      <Typography variant="h6">Login as a poster</Typography>
      <div className={classes.btnContainer}>
        <Button
          variant="contained"
          className={classes.facebook}
          href="http://localhost:5000/auth/facebook"
        >
          <div className={classes.icon}>
            <i className="fab fa-facebook"></i>
          </div>
          Login with Facebook
        </Button>
        <Button
          href="http://localhost:5000/auth/google"
          className={classes.button}
        >
          <img src={GoogleLogin} alt="google" className={classes.img} />
        </Button>
      </div>
    </div>
  );
}

export default PosterLogin;
