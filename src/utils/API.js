import axios from 'axios';

export default {
  getAllPosts: async (query) => {
    try {
      return await axios.request({
        method: 'GET',
        url: '/allposts',
        data: query
      });
    } catch (err) {
      console.error('ERROR - API.js - getAllPosts', err);
    }
  },

  getUserPosts: async (query) => {
    try {
      return await axios.request({
        method: 'GET',
        url: '/userPosts',
        data: query
      });
    } catch (err) {
      console.error('ERROR - API.js - getAllPosts', err);
    }
  }
};
