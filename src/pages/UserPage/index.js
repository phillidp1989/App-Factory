import React from 'react';
import UserPosts from '../../components/userPosts';
import { Grid } from '@material-ui/core';

export default function Index() {
  return (
    <Grid container justify="center" alignItems="center" spacing={2}>
      <UserPosts />
    </Grid>
  );
}
