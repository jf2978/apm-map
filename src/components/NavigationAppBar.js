import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TabPanel from '@material-ui/lab/TabPanel';
import TabContext from '@material-ui/lab/TabContext';
import Link from '@material-ui/core/Link';

// fun fact I didn't know of: "a11y" is SWE lingo for accessibility
// In this case, ARIA = Accessible Rich Internet Application and the set of attributes
// help describe the web content for screen readers
function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    display: 'flex',
    justifyContent: 'flex-end',
    backgroundColor: theme.palette.background.paper,
  },
  tabs: {
    color: theme.palette.text.primary,
  },
  tabIndicator: {

  }
}));

export default function NavigationAppBar({ children }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    console.log(newValue)
    setValue(newValue);
    event.preventDefault();
  };

  return (
    <TabContext value={value}>
      <AppBar children={children} className={classes.appBar} position="static" elevated={0}>
        <Tabs
          centered
          value={value}
          onChange={handleChange}
          classes={{
            root: classes.tabs,
            indicator: classes.tabIndicator,
          }}
        >
          <LinkTab label="Directory" href="/" {...a11yProps(0)} />
          <LinkTab label="About" href="/about" {...a11yProps(1)} />
          <LinkTab label="Mentors" href="/mentors" {...a11yProps(2)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
      </AppBar>
    </TabContext>
  );
}
