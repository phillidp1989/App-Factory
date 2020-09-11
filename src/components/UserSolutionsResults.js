import React, { useState, useEffect } from 'react';
import UserSolution from './UserSolution';
import { Grid } from '@material-ui/core';
import API from '../utils/API';

export default function UserSolutionsResults() {
  const [solutions, setSolutions] = useState([]);

  useEffect(() => {
    const getUserSolutions = async () => {
      try {
        const { data } = await API.getUserSolutions();
        setSolutions(data.solutions);
        console.log(data.solutions);
      } catch (err) {
        console.error('ERROR - UserPosts() - getUserSolutions', err);
      }
    };
    getUserSolutions();
  }, []);

  return (
    <React.Fragment>
      {solutions.map((solution) => (
        <Grid key={solution.repoName} item xs={10}>
          <UserSolution
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
