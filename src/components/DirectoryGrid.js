import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import DirectoryCard from './DirectoryCard';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    width: '80%',
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
            type
            category
            cost
          }
        }
      }
    }
  `)

  return (
      <Grid container spacing={4} className={classes.cardGrid}>
        {data.allResourcesJson.edges.filter((edge) => {
          // const matchTag = (v) => props.filtered["tags"].includes(v);

          return props.filtered["categories"].includes(edge.node.category)

          // other filters (non-MVP)
          //props.filtered["costs"].includes(edge.node.cost) &&
          //props.filtered["stages"].includes(edge.node.stage) &&
          //props.filtered["types"].includes(edge.node.type)

        }).map((edge, index) => (
          <Fade in={true} timeout={1500}>
            <Grid item key={index} xs={6} lg={4}>
              <DirectoryCard data={edge.node}/>
            </Grid>
          </Fade>
        ))}
      </Grid>
  );
}