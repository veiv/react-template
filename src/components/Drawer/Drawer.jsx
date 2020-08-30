import clsx from 'clsx';
import {
  Drawer as MUIDrawer,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
  Divider,
  IconButton,
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import React from 'react';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { withRouter } from 'react-router-dom';

export const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(11) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(13) + 1,
    },
    alignItems: 'center',
  },
  toolbar: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
}));

const Drawer = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  const { open, handleDrawerClose } = props;

  const { history } = props;
  const itemsList = [
    {
      text: 'Home',
      icon: <InboxIcon />,
      onClick: () => history.push('/'),
    },
    {
      text: 'About',
      icon: <MailIcon />,
      onClick: () => history.push('/about'),
    },
  ];

  return (
    <MUIDrawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <List>
        {itemsList.map((item) => {
          const { text, icon, onClick } = item;
          return (
            <ListItem button key={text} onClick={onClick}>
              {icon && <ListItemIcon>{icon}</ListItemIcon>}
              <ListItemText
                className={!open ? classes.hide : ''}
                primary={text}
              />
            </ListItem>
          );
        })}
      </List>
    </MUIDrawer>
  );
};

export default withRouter(Drawer);
