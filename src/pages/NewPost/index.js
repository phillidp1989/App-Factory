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
  };

  const chosenCategoryCount = postData.categories.filter(
    ({ checked }) => checked
  ).length;
  const error = chosenCategoryCount > 2;

  return (
    <React.Fragment>
      <Container component={Paper} className={classes.root}>
        <Typography variant="h4">Enter Your New App Idea:</Typography>
        <br />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3}>
            <TextField
              required
              fullWidth
              id="title"
              name="title"
              label="Name"
              value={postData.title}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              required
              fullWidth
              id="summary"
              name="summary"
              label="Brief summary"
              value={postData.summary}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">
              Select all categories that apply:
            </Typography>
            <FormControl required fullWidth error={error} component="fieldset">
              <FormLabel component="legend">Pick up to two</FormLabel>
              <FormGroup row>
                {postData.categories.map(({ name, checked }) => (
                  <FormControlLabel
                    key={name}
                    label={name}
                    control={
                      <Checkbox
                        name={name}
                        checked={checked}
                        onChange={handleCategory}
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                      />
                    }
                  />
                ))}
              </FormGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Typography variant="h6">Enter detailed description:</Typography>
            <CKEditor
              editor={ClassicEditor}
              onChange={(event, editor) => {
                const description = editor.getData();
                setPostData({ ...postData, description });
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Autocomplete
              multiple
              id="tags-standard"
              options={technologies}
              getOptionLabel={(option) => option.title}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="standard"
                  label="Technologies required (optional)"
                />
              )}
              onChange={(e, technologies) =>
                setPostData({ ...postData, technologies })
              }
            />
          </Grid>
        </Grid>
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
}
