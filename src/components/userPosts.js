import React, { useState, useContext } from 'react';
import PostCard from './PostCard';
import PostResults from './PostResults';
import API from '../utils/API';
import { UserContext } from '../context/UserContext';
import { Grid } from '@material-ui/core';
import postData from './dummyData';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

// function to check if auth

// if userX is logged in then GET post by userX

export default function UserPosts() {
  // not sure this is correct. Need Dan
  const { user, isLoaded } = useContext(UserContext);
  const [UserPosts, setUserPosts] = useState([]);

  const getUserPosts = async () => {
    try {
      const results = await API.getUserPosts(data);
      setUserPosts(results.data);
    } catch (err) {
      console.error('ERROR - UserPosts.js - UserPosts()', err);
    }
  };

  return (
    <React.Fragment>
      {posts.map((post) => (
        <Grid item xs={10} spacing={2}>
          <Card className={classes.root}>
            <CardHeader
              avatar={
                <Avatar aria-label="post" className={classes.avatar}>
                  P
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              key={title}
              title={title}
              subheader="September 14, 2016"
            />

            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {description}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="thumb up">
                <ThumbUpAltIcon />
              </IconButton>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>More About:</Typography>
                <Typography paragraph>{details}</Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
      ))}
    </React.Fragment>
  );
}
