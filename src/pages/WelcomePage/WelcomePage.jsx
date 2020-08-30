import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Filter1Icon from '@material-ui/icons/Filter1';
import Filter2Icon from '@material-ui/icons/Filter2';
import TableComponent from 'components/TableComponent';
import GridComponent from 'components/GridComponent';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  flexContainer: {
    display: 'flex',
  },
  tabs: {
    flex: 1,
    marginTop: '10px',
  },
  tabPanel: {
    flex: 6,
  },
}));

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const WelcomePage = () => {
  const classes = useStyles();
  const [tab, setTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <>
      <div className={classes.toolbar} />
      <div className={classes.flexContainer}>
        <div className={classes.tabs}>
          <Tabs
            variant="fullWidth"
            value={tab}
            onChange={handleTabChange}
            orientation="vertical"
          >
            <Tab icon={<Filter1Icon />} label="Table view" />
            <Tab icon={<Filter2Icon />} label="Card view" />
          </Tabs>
        </div>

        <div className={classes.tabPanel}>
          <TabPanel value={tab} index={0}>
            <TableComponent />
          </TabPanel>
          <TabPanel value={tab} index={1}>
            <GridComponent />
          </TabPanel>
        </div>
      </div>
    </>
  );
};

export default WelcomePage;
