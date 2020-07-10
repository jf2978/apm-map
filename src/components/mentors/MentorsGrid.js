import React, { useState, useEffect } from 'react';
import { Grid, Container } from '@material-ui/core';
import { useStaticQuery, graphql } from 'gatsby'
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

export default function MentorsGrid({ category }) {
  const classes = useStyles();
  const data = useStaticQuery(graphql`
    query MentorsQuery {
      allMentorsJson {
        edges {
          node {
            id
            name
            description
            image
          }
        }
      }
    }
  `)
  const [loading, setLoading] = useState(true)

  return (
    <Container disableGutters maxWidth={false} className={classes.container}>
      <Container maxWidth="lg" className={classes.gridContainer}>
        <Grid container spacing={2} className={classes.cardGrid}>
          {data.allMentorsJson.edges.map((edge, index) => (
              <Grid item key={index} xs={12} sm={6}>
                <MentorsCard data={edge.node}/>
              </Grid>
            ))
          }
        </Grid>
      </Container>
    </Container>
  );
}
