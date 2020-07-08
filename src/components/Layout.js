import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Copyright from '../components/Copyright';
import NavigationAppBar from '../components/NavigationAppBar';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function Layout({ children }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <NavigationAppBar value={value} handler={handleChange}/>
      <main>{children}</main>
      <footer className={classes.footer}>
        <Copyright />
      </footer>
    </>
  );
}