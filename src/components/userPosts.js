import React, { useState, useEffect, useContext } from 'react';
import PostCard from './PostCard';
import axios from 'axios';
import { Grid } from '@material-ui/core';
import { UserContext } from '../context/UserContext';

export default function UserPosts() {
  const [posts, setPosts] = useState([]);
  const { user, isLoaded } = useContext(UserContext);

  useEffect(() => {
    const getAllPosts = async () => {
      try {
        if (user) {
          const { data } = await axios.get(
            `https://app-factory-api.herokuapp.com/api/posts/user/${user}`
            // 'https://app-factory-djd.herokuapp.com/api/posts/user/5f458293eb85b45f1875891d'
          );

          setPosts(data);
        }
      } catch (err) {
        console.error('ERROR - UserPosts() - getAllPosts', err);
      }
    };
    getAllPosts();
  }, [isLoaded]);

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
