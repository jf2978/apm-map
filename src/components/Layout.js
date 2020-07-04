import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Copyright from '../components/Copyright';

const useStyles = makeStyles((theme) => ({
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