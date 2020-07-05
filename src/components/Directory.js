import React from 'react';
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
    backgroundColor: theme.palette.grey[100],
  }
}));

export default function Directory({ pageScroll }) {
  const classes = useStyles();

  // filter (categories) state
  const [category, setCategory] = React.useState("All")
  const toggleCategory = (value) => {
    value === category ? setCategory("All") : setCategory(value)
  }

  return (
    <Container disableGutters maxWidth={false} className={classes.container}>
      <DirectoryAppBar pageScroll={pageScroll} selection={category} toggleCategory={toggleCategory}>
        <Container maxWidth="xl" className={classes.directory}>
          <DirectoryGrid
            category={category}
          />
        </Container>
      </DirectoryAppBar>
    </Container>
  );
}
