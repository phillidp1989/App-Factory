import React, { useState, useEffect } from 'react';
import DevPost from './devPost';
import { Grid } from '@material-ui/core';
import BasicPagination from './Pagniation';
import API from '../utils/API';

export default function DevPostResults() {
  const [solutions, setSolutions] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [postsPerPage] = useState(5)

  useEffect(() => {
    const getPostSolutions = async () => {
      try {
        // const { data } = await API.allPosts();
        // setPosts(data);
        const { data } = await API.getPostSolutions();
        setSolutions(data.solutions);
        console.log(data);
      } catch (err) {
        console.error('ERROR - UserPosts() - getPostSolutions', err);
      }
    };
    getPostSolutions();
  }, []);

  // // Pagination logic
  // const indexOfLastPost = currentPage * postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // // Page change handler
  // const handleChange = (event, value) => {
  //   setCurrentPage(value);
  // };

  return (
    <React.Fragment>
      {solutions.map((solution) => (
        <Grid key={solution.repoName} item xs={10}>
          <DevPost
            id={solution._id}
            title={solution.repoName}
            summary={solution.repoDescription}
            score={solution.score}
            deployed_link={solution.deployedLink}
            repo_link={solution.repoLink}
            likedBy={solution.likedBy}
          />
        </Grid>
      ))}
      {/* <Grid item xs={10} >
        <BasicPagination postsPerPage={postsPerPage} totalPosts={posts.length} handleChange={handleChange} />
      </Grid> */}
    </React.Fragment>
  );
}
