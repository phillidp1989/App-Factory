import React, { useState, useEffect } from 'react';
import PostSolution from './PostSolution';
import { Grid } from '@material-ui/core';
import API from '../utils/API';

export default function PostSolutionsResults() {
  const [solutions, setSolutions] = useState([]);

  useEffect(() => {
    const getPostSolutions = async () => {
      try {
        const { data } = await API.getPostSolutions();
        setSolutions(data.solutions);
        console.log(data.solutions);
      } catch (err) {
        console.error('ERROR - UserPosts() - getPostSolutions', err);
      }
    };
    getPostSolutions();
  }, []);

  return (
    <React.Fragment>
      {solutions.map((solution) => (
        <Grid key={solution.repoName} item xs={10}>
          <PostSolution
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
    </React.Fragment>
  );
}
