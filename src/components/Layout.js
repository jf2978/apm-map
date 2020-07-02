import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import MapIcon from '@material-ui/icons/Map';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Copyright from '../components/Copyright';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function Layout({ children }) {
  const classes = useStyles();

  return (
    <>
      <main>{children}</main>
      <footer className={classes.footer}>
        <Copyright />
      </footer>
    </>
  );
}