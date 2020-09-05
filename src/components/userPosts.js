import React, { useEffect, useState, useContext } from 'react';
import PostCard from './PostCard';
import API from '../utils/API';
import { UserContext } from '../context/UserContext';

// function to check if auth

// if userX is logged in then GET post by userX

function UserPosts() {
  // not sure this is correct. Need Dan
  const { user, isAuthenticated } = useContext(UserContext);
  const [UserPosts, setUserPosts] = useState([]);

  const getUserPosts = async () => {
    try {
      const results = await API.getUserPosts(data);
      setUserPosts(results.data);
    } catch (err) {
      console.error('ERROR - UserPosts.js - UserPosts()', err);
    }
  };
}
