import React, { useState, useEffect } from 'react';
import { Grid, Container } from '@material-ui/core';
import { useStaticQuery } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles';
import MentorsCard from './MentorsCard';

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  cardGrid: {
    width: '100%',
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    maxWidth: 345,
    margin: theme.spacing(2),
  },
  media: {
    height: 190,
  },
}));

export default function MentorsBoard({ category }) {
  const classes = useStyles();
  const data = [
    {
      "name": "Name",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate ut pharetra sit amet.",
      "image": "https://source.unsplash.com/random/100x100",
    },
    {
      "name": "Name",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate ut pharetra sit amet.",
      "image": "https://source.unsplash.com/random/100x100",
    },
    {
      "name": "Name",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate ut pharetra sit amet.",
      "image": "https://source.unsplash.com/random/100x100",
    },
  ]
  const [loading, setLoading] = useState(true)

  return (
    <Container disableGutters maxWidth={false} className={classes.container}>
      <Container maxWidth="lg" className={classes.gridContainer}>
        <Grid container spacing={2} className={classes.cardGrid}>
          {data.map((value, index) => (
            <Grid item key={index} xs={12} sm={6}>
              <MentorsCard data={value}/>
            </Grid>
          ))
        }
        </Grid>
      </Container>
    </Container>
  );
}
