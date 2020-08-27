import React, { useState } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { AppBar, Toolbar, IconButton, Typography, InputBase, Menu, MenuItem, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  titleMobile: {
    flexGrow: 1,
    display: 'block',
    textAlign: 'center',
    marginTop: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    marginRight: theme.spacing(1),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto'
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch'
      }
    }
  }
}));

export default function SearchAppBar() {
  const classes = useStyles();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const login = (newState) => {
    setIsLoggedIn(newState);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Typography className={classes.titleMobile} variant="h6" noWrap>
          <IconButton component={Link} to="/" aria-label="Home">
            <HomeIcon />
          </IconButton>
          App Factory
        </Typography>
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            <IconButton component={Link} to="/" aria-label="Home">
              <HomeIcon />
            </IconButton>
            App Factory
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          {isLoggedIn ? (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem
                  component={Link}
                  to="/dashboard"
                  onClick={handleClose}
                >
                  My dashboard
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleClose();
                    login(false);
                  }}
                >
                  Logout
                </MenuItem>
              </Menu>
            </div>
          ) : (
            <Button onClick={(e) => login(true)} color="inherit">
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
