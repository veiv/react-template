import React, { useState } from 'react';
import ContentSection from 'components/ContentSection/ContentSection';
import Drawer from 'components/Drawer/Drawer';
import AppBar from 'components/AppBar/AppBar';
import { Route, Switch } from 'react-router-dom';
import About from '../../pages/About/About';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
});

const App = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar handleDrawerOpen={handleDrawerOpen} open={open} />
      <Drawer handleDrawerClose={handleDrawerClose} open={open} />
      <Switch>
        <Route exact from="/">
          <ContentSection />
        </Route>
        <Route exact path="/about" render={(props) => <About {...props} />} />
      </Switch>
    </div>
  );
};

export default App;
