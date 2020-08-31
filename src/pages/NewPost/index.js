import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Paper,
  Typography,
  Grid,
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Zoom,
  Fab
} from '@material-ui/core';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Autocomplete from '@material-ui/lab/Autocomplete';
import technologies from './technologies.json';
import PostAddIcon from '@material-ui/icons/PostAdd';
import { green } from '@material-ui/core/colors';

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
  return (
    <React.Fragment>
      <Container component={Paper} className={classes.root}>
      </Container>
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
