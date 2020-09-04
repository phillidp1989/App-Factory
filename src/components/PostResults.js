import React, { useState, useEffect } from 'react';
import PostCard from './PostCard';
import postData from './dummyData';
import { Grid } from '@material-ui/core';

export default function PostResults() {
  const classes = useStyles();
  const [posts, setPost] = useState([]);
  useEffect(() => {
    setPost(postData);
  }, []);

  return (
    <React.Fragment>
      {posts.map((post) => (
        <Grid item xs={12} className={classes.root}>
          <PostCard
            key={post.title}
            title={post.title}
            description={post.description}
            details={post.details}
          />
        </Grid>
      ))}
    </React.Fragment>
  );
}
