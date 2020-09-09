import React, { useState, useEffect } from 'react';
import PostCard from './PostCard';
import axios from 'axios';
import { Grid } from '@material-ui/core';

export default function UserPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getAllPosts = async () => {
      try {
        const { data } = await axios.get(
          'https://app-factory-api.herokuapp.com/api/posts/user/5f458293eb85b45f1875891d'
          // 'https://app-factory-djd.herokuapp.com/api/posts/user/5f458293eb85b45f1875891d'
        );

        setPosts(data);
      } catch (err) {
        console.error('ERROR - UserPosts() - getAllPosts', err);
      }
    };
    getAllPosts();
  }, []);

  return (
    <React.Fragment>
      {posts.map((post) => (
        <Grid item xs={10} spacing={2} key={post.title}>
          <PostCard
            title={post.title}
            description={post.description}
            summary={post.summary}
          />
        </Grid>
      ))}
    </React.Fragment>
  );
}
