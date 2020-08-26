import React from 'react';
import Nav from './Nav';
import AppFilterMenu from '../../components/AppFilterMenu';
import './style.css';

export default function Index() {
  return (
    <React.Fragment>
      <Nav />
      <div className="main-page-container">
        <AppFilterMenu />
      </div>
    </React.Fragment>
  );
}
