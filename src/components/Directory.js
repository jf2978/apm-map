import React from 'react';
import { useStaticQuery } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import DirectoryGrid from './DirectoryGrid';
import DirectoryAppBar from './DirectoryAppBar';

const useStyles = makeStyles((theme) => ({
  directory: {
    display: 'flex',
    justifyContent: 'center',
  },
  container: {
    position: 'relative',
  }
}));

export default function Directory() {
  const classes = useStyles();
  const [category, setCategory] = React.useState("all")

  const toggleCategory = (value) => {
    value === category ? setCategory("all") : setCategory(value)
  }

  return (
    <Container disableGutters maxWidth={false} className={classes.container}>
      <DirectoryAppBar selection={category} toggleCategory={toggleCategory}>
        <Container maxWidth="xl" className={classes.directory}>
          <DirectoryGrid
            category={category}
          />
        </Container>
      </DirectoryAppBar>
    </Container>
  );
}
