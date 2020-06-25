import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import MapIcon from '@material-ui/icons/Map';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Copyright from '../components/Copyright';
import { Container } from '@material-ui/core';
import DirectoryGrid from './DirectoryGrid';
import FilterMenu from './Menu';

const useStyles = makeStyles((theme) => ({
  directory: {
    display: 'flex',
    justifyContent: 'space-between',
  }
}));

export default function Directory() {
  const classes = useStyles();

  return (
    <Container maxWidth="xl" className={classes.directory}>
      <FilterMenu/>
      <DirectoryGrid/>
    </Container>
  );
}