import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import PostForm from './PostForm';
import {
  Container,
  Paper,
  Typography,
  Zoom,
  Fab,
  Grow
} from '@material-ui/core';
import PostAddIcon from '@material-ui/icons/PostAdd';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3)
    }
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    color: theme.palette.common.white,
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[600]
    }
  }
}));

export default function Index() {
  const classes = useStyles();

  const [postData, setPostData] = useState({
    title: '',
    summary: '',
    description: '',
    categories: [
      {
        name: 'Business',
        checked: false
      },
      {
        name: 'Design',
        checked: false
      },
      {
        name: 'Gaming',
        checked: false
      },
      {
        name: 'Journalism',
        checked: false
      },
      {
        name: 'Marketing',
        checked: false
      }
    ],
    technologies: []
  });

  const [err, setErr] = useState({
    title: false,
    summary: false,
    categories: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostData({ ...postData, [name]: value });
  };

  const handleCategory = (e) => {
    const { name, checked } = e.target;
    const { categories } = postData;
    const i = categories.findIndex((obj) => obj.name === name);
    const updatedCategories = [...categories];
    updatedCategories[i] = { name, checked };
    setPostData({
      ...postData,
      categories: updatedCategories
    });

    //Checking for errors
    const chosenCategoryCount = updatedCategories.filter(
      ({ checked }) => checked
    ).length;
    setErr((e) => ({
      ...e,
      categories: chosenCategoryCount > 2 || chosenCategoryCount === 0
    }));
  };


  const inputErrCheck = (e) => {
    const { name, value } = e.target;
    // Setting error state if required input changes to empty
    setErr({ ...err, [name]: value.length === 0 });
  };

  return (
    <React.Fragment>
      <Grow in={true} style={{ transitionDelay: '300ms' }}>
        <Container component={Paper} className={classes.root}>
          <Typography variant="h4">Enter Your New App Idea:</Typography>
          <br />
          <PostForm
            postData={postData}
            setPostData={setPostData}
            handleChange={handleChange}
            handleCategory={handleCategory}
            inputErrCheck={inputErrCheck}
            err={err}
          />
        </Container>
      </Grow>
      <Zoom in={true}>
        <Fab
          href=""
          className={classes.fab}
          color="secondary"
          aria-label="New Post"
        >
          <PostAddIcon />
        </Fab>
      </Zoom>
    </React.Fragment>
  );
}
