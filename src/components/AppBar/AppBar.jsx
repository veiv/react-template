import React from 'react';
import clsx from 'clsx';
import {
  AppBar as MUIAppBar,
  Toolbar,
  IconButton,
  Typography,
  makeStyles,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { drawerWidth } from '../Drawer/';

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
}));

const AppBar = (props) => {
  const classes = useStyles();

  const { open, handleDrawerOpen } = props;

  return (
    <MUIAppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, {
            [classes.hide]: open,
          })}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          Reinio Prototype
        </Typography>
      </Toolbar>
    </MUIAppBar>
  );
};

export default AppBar;
