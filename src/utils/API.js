import axios from 'axios';

export default {
  allPosts: async () => {
    try {
      return await axios.get('/api/posts');
    } catch (err) {
      console.error('ERROR - API.js - allPosts', err);
    }
  },
  likePost: async (postId, userId) => {
    try {
      return await axios.put('/api/posts/like', {
        postId,
        userId
      });
    } catch (err) {
      console.error('ERROR - API.js - allPosts', err);
    }
  },
  unlikePost: async (postId, userId) => {
    try {
      return await axios.put('/api/posts/unlike', {
        postId,
        userId
      });
    } catch (err) {
      console.error('ERROR - API.js - unlikePost', err);
    }
  },

  getUserPosts: async (id) => {
    try {
      // return await axios.get(`/api/posts/user/${id}`);
      return await axios.get(
        'http://localhost:5000/api/posts/user/5f458293eb85b45f1875891d'
      );
    } catch (err) {
      console.error('ERROR - API.js - getUserPosts', err);
    }
  }
};
