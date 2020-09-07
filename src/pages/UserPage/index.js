import React from 'react';
import UserPosts from '../../components/userPosts';
// import API from '../../utils/API';
import { Grid } from '@material-ui/core';

export default function Index(props) {
  return (
    <Grid container justify="center" alignItems="center" spacing={2}>
      {props.results.map((result) => (
        <UserPosts />
      ))}
    </Grid>
  );
}
