import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import DirectoryCard from './DirectoryCard';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    maxWidth: '80%',
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  }
}));

export default function DirectoryGrid(props) {
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
      <Grid container spacing={4} className={classes.cardGrid}>
        {data.allResourcesJson.edges.filter((value) => {
          // TODO: filter out data that shouldn't be rendered
          return true
        }).map((value, index) => (
          <Fade in={true} timeout={1500}>
            <Grid item key={index} xs={6} lg={4}>
              <DirectoryCard data={value}/>
            </Grid>
          </Fade>
        ))}
      </Grid>
  );
}