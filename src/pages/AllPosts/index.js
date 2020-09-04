import React from 'react';
import AppFilterMenu from '../../components/AppFilterMenu';
import PostResults from '../../components/PostResults';
import './style.css';
import { Grid } from '@material-ui/core';

export default function Index() {
  return (
    <Grid container justify="center" alignItems="center" spacing={20}>
      <AppFilterMenu />
      <PostResults />
    </Grid>
  );
}
