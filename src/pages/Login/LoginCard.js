import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PosterLogin from './PosterLogin';
import DeveloperLogin from './DeveloperLogin';

import { Typography, Card, CardContent, Grow, Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    width: '90%',
    flexGrow: 1
  },
  root: {
    minWidth: '90%',
    [theme.breakpoints.up(780)]: {
      minWidth: '60%'
    },
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  divider: {
    marginTop: 20,
    marginBottom: 20
  },
  dividerContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    [theme.breakpoints.up(780)]: {
      display: 'none'
    }
  },
  border: {
    borderBottom: '1px solid black',
    width: '50%'
  },
  content: {
    paddingLeft: 10,
    paddingRight: 10
  },
  flex: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up(780)]: {
      flexDirection: 'row',
      justifyContent: 'space-evenly'
    }
  },
  vertical: {
    display: 'none',
    [theme.breakpoints.up(780)]: {
      display: 'block',
      border: `1px solid ${theme.palette.divider}`,
      marginTop: 20
    }
  }
}));

export default function RoleSelection() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedA: false
  });

  return (
    <div className={classes.container}>
      <Grow
        in={!state.checkedA}
        {...(!state.checkedA ? { timeout: 2000 } : { timeout: 2000 })}
      >
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography variant="h5" component="h2" className={classes.paper}>
              Welcome to App Factory
            </Typography>
            <div className={classes.flex}>
              <PosterLogin />
              <div className={classes.dividerContainer}>
                <div className={classes.border} />
                <span className={classes.content}>or</span>
                <div className={classes.border} />
              </div>
              <Divider
                className={classes.vertical}
                orientation="vertical"
                flexItem
              />
              <DeveloperLogin />
            </div>
          </CardContent>
        </Card>
      </Grow>
    </div>
  );
}
