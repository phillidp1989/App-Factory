import React from 'react';
// import AppFilterMenu from '../../components/AppFilterMenu';
// import PostResults from '../../components/PostResults';
import UserPosts from '../../components/userPosts';
// import API from '../../utils/API';
import { Grid } from '@material-ui/core';

// function to check if auth

// if userX is logged in then GET post by userX
// import React, { useState, useEffect } from 'react';
// import PostCard from '../../components/PostCard';
// import userPosts from '../../components/userPosts';
// import axios from 'axios';
// import { Grid } from '@material-ui/core';

// export default function userPostsPage() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const getAllPosts = async () => {
//       try {
//         const results = await axios.get(
//           // 'https://app-factory-e6ff0.web.app/allposts'
//           // 'http://localhost:5000/api/posts'
//           // 'http://localhost:5000/api/posts/user/5f458293eb85b45f1875891d'
//           'https://app-factory-api.herokuapp.com/api/posts/user/5f458293eb85b45f1875891d'
//           // 'https://app-factory-api.herokuapp.com/api/posts'
//         );
//         console.log(results);
//         setPosts(results);
//         console.log(results);
//       } catch (err) {
//         console.error('ERROR - userPostsPage() - getAllPosts', err);
//       }
//     };
//     getAllPosts();
//   }, []);
//   console.log(this.state.results);

//   return (
//     <React.Fragment>
//       {posts.map((post) => (
//         <Grid item xs={10} spacing={2}>
//           <userPosts
//             // key={data.title}
//             // title={post.title}
//             // description={data.description}
//             // details={data.details}
//             results={this.state.results}
//           />
//         </Grid>
//       ))}
//     </React.Fragment>
//   );
// }

export default function Index() {
  return (
    <Grid container justify="center" alignItems="center" spacing={2}>
      <UserPosts />
    </Grid>
  );
}

// class UserPostsPage extends Component {
//   state = {
//     posts: []
//   };

//   componentDidMount() {
//     API.getAllPosts()
//       .then((res) => this.setState({ posts: res.data.postSeed }))
//       .catch((err) => console.log(err));
//   }

//   render() {
//     return (
//       <Grid container justify="center" alignItems="center" spacing={2}>
//         <UserPosts />
//       </Grid>
//     );
//   }
// }

// export default UserPostsPage;
