import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Grid from '@material-ui/core/Grid';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

const myProjects = [
  {
    title: 'BURGER APP',
    tech: 'NodeJS - JS - Express - Handlebars - ORM - MySQL - Heroku',
    description:
      'Burger App is an application that allows one to order a specific burger and then devour it',
    details:
      'More About this Idea - More About this Idea- More About this Idea More About this Idea - More About this Idea- More About this Idea More About this Idea - More About this Idea- More'
  },
  {
    title: 'EMPLOYEE SUMMARY',
    tech: 'NodeJS - JS',
    description: "A CLI webapp to build a team's organization chart",
    details:
      'More About this Idea - More About this Idea- More About this Idea More About this Idea - More About this Idea- More About this Idea More About this Idea - More About this Idea- More'
  },
  {
    title: 'THE MUSIC APP',
    tech: 'jQuery - LastFM & audd.io API - Materialize',
    description:
      'A webapp to find every information you need on your favourite music'
  },
  {
    title: 'WEATHER APP',
    tech: 'HTML - CSS - JavaScript - OpenWeather API',
    description: 'A webapp to quickly check the weather anywhere on the planet',
    details:
      'More About this Idea - More About this Idea- More About this Idea More About this Idea - More About this Idea- More About this Idea More About this Idea - More About this Idea- More'
  }
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '70vw'
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: red[500]
  },
  // from the spacing grid
  control: {
    padding: theme.spacing(2)
  }
}));

export default function PostCard() {
  // Material UI card
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  // Material UI spacing
  const [spacing, setSpacing] = React.useState(2);

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
    <Grid
      container
      spacing={3}
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Grid item xs={12} sm={12} md={12} spacing={2}>
        <Card className={classes.root}>
          {myProjects.map((project) => (
            <React.Fragment>
              <CardHeader
                avatar={
                  <Avatar aria-label="post" className={classes.avatar}>
                    P
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={project.title}
                subheader="September 14, 2016"
              />

              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="thumb up">
                  <ThumbUpAltIcon />
                </IconButton>
                {/* <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton> */}
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>More About:</Typography>
                  <Typography paragraph>{project.details}</Typography>
                  {/* <Typography paragraph>{project.details}</Typography> */}
                </CardContent>
              </Collapse>
            </React.Fragment>
          ))}
          ;
        </Card>
      </Grid>
    </Grid>
  );
}
