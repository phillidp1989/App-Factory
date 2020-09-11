import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import API from '../utils/API';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: '100%',
    marginBottom: 20
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function DevPost() {
  const classes = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;
  const [posts, setPosts] = useState([]);
  const [solutions, setSolutions] = useState([]);

  useEffect(() => {
    const getPostSolutions = async () => {
      try {
        // const { postData } = await API.allPosts();
        // setPosts(postData);
        const { solutionsData } = await API.getPostSolutions(posts._id);
        setSolutions(solutionsData);
      } catch (err) {
        console.error('ERROR - UserPosts() - getPostSolutions', err);
      }
    };
    getPostSolutions();
  }, []);

  return (
    <React.Fragment>
      {solutions.map((solution) => (
        <Grid item xs={10} key={solution.title}>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                {solution.title}
              </Typography>
              <Typography variant="body2" component="p">
                A few demo words on how the app has been built.
                <br />
              </Typography>
              <Typography variant="body2" component="p">
                Link to deployed application
                <br />
              </Typography>
              <Typography variant="body2" component="p">
                ALink to GitHub repo
                <br />
              </Typography>
            </CardContent>
            {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
          </Card>
        </Grid>
      ))}
    </React.Fragment>
  );
}
