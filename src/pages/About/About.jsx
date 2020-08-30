import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  toolbar: {
    margin: '10vh',
  },
});

const About = () => {
  const classes = useStyles();
  return <div className={classes.toolbar}>This is the about page</div>;
};

export default About;
