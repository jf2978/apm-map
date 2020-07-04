import React, { useState, useEffect, useLayoutEffect, useMemo } from 'react';
import Grid from '@material-ui/core/Grid';
import { useStaticQuery } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import DirectoryCard from './DirectoryCard';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    width: '100%',
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  }
}));

export default function DirectoryGrid({ category }) {
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

  var showCards = false
  const [memo, setMemo] = useState({
    "all": data.allResourcesJson.edges,
  })

  // if not yet in our memo, filter the data for the given category
  useMemo(() => {
    console.log("useMemo called!")
    if (!(category in memo)) {
      console.log("category not in memo...")
      showCards = false
      const filtered = data.allResourcesJson.edges.filter(({ node }) => node.category === category);
      setMemo({
        ...memo,
        [category]: filtered,
      })
    }
  }, [data, category])

  useLayoutEffect(() => {
    console.log("useEffect called!")
    showCards = true
  }, [memo])

  console.log(showCards)
  return (
    <Grid container spacing={4} className={classes.cardGrid}>
      {console.log("rendering...") || showCards && memo[category].map((edge, index) => (
        <Fade in={true} timeout={1500}>
          <Grid item key={index} xs={12} sm={6} lg={4}>
            <DirectoryCard data={edge.node}/>
          </Grid>
        </Fade>
      ))}
    </Grid>
  );
}
