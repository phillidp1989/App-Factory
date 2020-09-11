import axios from 'axios';

export default {
  currentUser: async () => {
    try {
      return await axios.get('http://localhost:5000/api/user', {
        withCredentials: true
      });
    } catch (err) {
      console.error('ERROR - API.js - currentUser', err);
    }
  },
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
      console.error('ERROR - API.js - likePost', err);
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
  dashboardInfo: async (id) => {
    try {
      return await axios.get(`/api/posts/dashboard/${id}`);
    } catch (err) {
      console.error('ERROR - API.js - dashboardInfo', err);
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
  },

  getPostSolutions: async () => {
    try {
      return await axios.get(
        'http://localhost:5000/api/solutions/post/5f4c1eebdc995345f4a59af2'
      );
    } catch (err) {
      console.error('ERROR - API.js - getPostSolutions', err);
    }
  },
  savePost: async (postData) => {
    try {
      return await axios.post(`/api/posts`, postData);
    } catch (err) {
      console.error('ERROR - API.js - savePost', err);
    }
  },
  github: async (username) => {
    try {
      return await axios.get(
        `https://api.github.com/users/${username}/repos?per_page=100`
      );
    } catch (err) {
      console.error('ERROR - API.js - github', err);
    }
  },
  saveSolution: async (solutionData) => {
    try {
      return await axios.post('/api/solutions', solutionData);
    } catch (err) {
      console.error('ERROR - API.js - saveSolution', err);
    }
  },
  getPost: async (id) => {
    try {
      return await axios.get(`/api/posts/${id}`);
    } catch (err) {
      console.error('ERROR - API.js - getPost', err);
    }
  }
};
