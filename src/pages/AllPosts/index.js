import React from 'react';
import Nav from './Nav';
import AppFilterMenu from '../../components/AppFilterMenu';
import PostCard from '../../components/PostCard';
import './style.css';

export default function Index() {
  return (
    <React.Fragment>
      <Nav />
      <div className="main-page-container">
        <AppFilterMenu />
        <PostCard />
      </div>
    </React.Fragment>
  );
}
