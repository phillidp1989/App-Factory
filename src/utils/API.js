import axios from 'axios';

export default {
  getAllPosts: async (query) => {
    try {
      return await axios.request({
        method: 'GET',
        url: 'https://app-factory-api.herokuapp.com/api/posts',
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
        url:
          'https://app-factory-api.herokuapp.com/api/user/5f458293eb85b45f1875891d',
        data: query
      });
    } catch (err) {
      console.error('ERROR - API.js - getAllPosts', err);
    }
  }
};

// export default {
//   getAllPosts: function () {
//     return axios.get('/posts');
//   },
//   getUserPosts: function () {
//     return axios.get('/posts/user/:id');
//   }
// };
