import React from 'react';
// import Nav from './Nav';
import AppFilterMenu from '../../components/AppFilterMenu';
import PostCard from '../../components/PostCard';
// import AppBar from '../../components/AppBar';
import './style.css';

export default function Index() {
  return (
    <React.Fragment>
      <AppFilterMenu />
      <PostCard />
    </React.Fragment>
  );
}
