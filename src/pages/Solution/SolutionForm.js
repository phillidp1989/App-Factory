import React, { useState, useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Paper,
  Typography,
  Zoom,
  Fab,
  Grow,
  Grid
} from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import { green } from '@material-ui/core/colors';
import GitHubIcon from '@material-ui/icons/GitHub';
import NotesIcon from '@material-ui/icons/Notes';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import LinkIcon from '@material-ui/icons/Link';
import DescriptionIcon from '@material-ui/icons/Description';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import CommentIcon from '@material-ui/icons/Comment';
import Avatar from '@material-ui/core/Avatar';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import CircularProgress from '@material-ui/core/CircularProgress';
import { UserContext } from '../../context/UserContext';
import API from '../../utils/API';
import PostAddIcon from '@material-ui/icons/PostAdd';

const useStyles = makeStyles((theme) => ({
  containerRoot: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3)
    },
    width: '100%',
    margin: 0
  },
  grid: {
    width: '100%'
  },
  alertRoot: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2)
    }
  },
  title: {
    textAlign: 'center'
  },
  textRoot: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch'
    }
  },
  link: {
    marginTop: 15,
    width: '90%'
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
  },
  textField: {
    display: 'flex'
  },
  commentButton: {
    marginLeft: 10
  },
  listItem: {
    marginTop: 5
  }
}));

export default function SolutionForm() {
  const classes = useStyles();
  const { user } = useContext(UserContext);

  // State
  const [secondary, setSecondary] = useState(false);
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const loading = open && options.length === 0;
  const [comment, setComment] = useState('');
  const [solutionData, setSolutionData] = useState({
    comments: [],
    repoName: '',
    repoDescription: '',
    repoLink: '',
    deployedLink: '',
    postId: '',
    developerId: ''
  });

  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      // const results = await API.github(user.username);
      const { data } = await API.github('phillidp1989');

      if (active) {
        setOptions(data);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  // Repo search handler
  const onTagsChange = (e, value) => {
    if (value) {
      setSolutionData({
        ...solutionData,
        repoName: value.name,
        repoDescription: value.description,
        repoLink: value.html_url
      });
    } else {
      setSolutionData({
        ...solutionData,
        repoName: '',
        repoDescription: '',
        repoLink: ''
      });
    }
  };

  // Handle comments text area
  const commentChange = (e) => {
    setComment(e.target.value);
  };

  // Add comments handler
  const commentSubmit = (e, value) => {
    e.preventDefault();
    setSolutionData({
      ...solutionData,
      comments: [...solutionData.comments, comment]
    });
    setComment("")
  };

  // Handle comment deletion
  const deleteComment = (e) => {
    const key = e.currentTarget.parentNode.getAttribute("data-key");
    setSolutionData({
      ...solutionData,
      comments: solutionData.comments.filter((comment, index) => index !== parseInt(key))
    });
  }

  console.log(solutionData);

  return (
    <React.Fragment>
      <Grow in={true} style={{ transitionDelay: '300ms' }}>
        <Container component={Paper} className={classes.root}>
          <Grid
            container
            justify="center"
            alignItems="center"
            spacing={10}
            className={classes.containerRoot}
          >
            <Grid item xs={12}>
              <Typography variant="h4" className={classes.title}>
                New Solution
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4} className={classes.grid}>
              <Alert severity="info" icon={<GitHubIcon fontSize="inherit" />}>
                <AlertTitle>Repository</AlertTitle>Link your Github repo to this
                solution
              </Alert>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Autocomplete
                id="asynchronous-demo"
                style={{ width: '90%' }}
                open={open}
                onOpen={() => {
                  setOpen(true);
                }}
                onClose={() => {
                  setOpen(false);
                }}
                onChange={onTagsChange}
                getOptionSelected={(option, value) =>
                  option.name === value.name
                }
                getOptionLabel={(option) => option.name}
                options={options}
                loading={loading}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Search for a Github Repo"
                    variant="outlined"
                    InputProps={{
                      ...params.InputProps,
                      endAdornment: (
                        <React.Fragment>
                          {loading ? (
                            <CircularProgress color="inherit" size={20} />
                          ) : null}
                          {params.InputProps.endAdornment}
                        </React.Fragment>
                      )
                    }}
                  />
                )}
              />
              {!solutionData.repoLink ? null : (
                <Alert
                  variant="outlined"
                  severity="success"
                  className={classes.link}
                  icon={<LinkIcon fontSize="inherit" />}
                >
                  Link to repo: {solutionData.repoLink}
                </Alert>
              )}
              {!solutionData.repoDescription ? null : (
                <Alert
                  variant="outlined"
                  severity="warning"
                  className={classes.link}
                  icon={<DescriptionIcon fontSize="inherit" />}
                >
                  Description: {solutionData.repoDescription}
                </Alert>
              )}
            </Grid>
            <Grid item xs={12}>
              <Divider variant="middle" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Alert severity="info" icon={<NotesIcon fontSize="inherit" />}>
                <AlertTitle>Comments</AlertTitle>Add any comments, notes or
                updates on the progress of your solution
              </Alert>
            </Grid>
            <Grid item xs={12} sm={8}>
              <form className={classes.textField} noValidate autoComplete="off">
                <TextField
                  id="standard-basic"
                  label="Comment"
                  style={{ width: '90%' }}
                  onChange={commentChange}
                  value={comment}
                />
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.commentButton}
                  onClick={commentSubmit}
                >
                  Add
                </Button>
              </form>
              <div className={classes.demo}>
                <List>
                  {solutionData.comments.map((comment, index) => (
                    <ListItem key={index} className={classes.listItem}>
                      <ListItemAvatar>
                        <Avatar>
                          <CommentIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={comment}
                      />
                      <ListItemSecondaryAction data-key={index}>
                        <IconButton edge="end" aria-label="delete" onClick={deleteComment}>
                          <DeleteIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  ))}
                </List>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Grow>
      <Zoom in={true}>
        <Fab
          // onClick={postForm}
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
