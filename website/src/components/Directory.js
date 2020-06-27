import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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