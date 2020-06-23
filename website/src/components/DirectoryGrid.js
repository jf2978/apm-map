import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Fade from '@material-ui/core/Fade';
import DirectoryCard from './DirectoryCard';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  }
}));

export default function DirectoryGrid() {
  const classes = useStyles();
  const data = useStaticQuery(graphql`
    query ResourcesQuery {
      allResourcesJson {
        edges {
          node {
            image
            description
            link
            name
            stage
            tags
            category
            cost
          }
        }
      }
    }
  `)

  return (
    <Container className={classes.cardGrid} maxWidth="xl">
      <Grid container spacing={4}>
        {data.allResourcesJson.edges.map((card, index) => (
          <Fade in={true} timeout={1500}>
            <Grid item key={index} xs={6} sm={4} md={3}>
              <DirectoryCard data={card}/>
            </Grid>
          </Fade>
        ))}
      </Grid>
    </Container>
  );
}