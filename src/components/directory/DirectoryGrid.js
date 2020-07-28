import React from "react";
import { useStaticQuery } from "gatsby";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Card from "../MediaCard";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    width: "100%",
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

const placeholderData = [1, 2, 3, 4, 5, 6];

export default function DirectoryGrid({ category }) {
  const classes = useStyles();

  const data = useStaticQuery(graphql`
    query GetRecruitingResources {
      allRecruitingResource {
        nodes {
          id
          name
          description
          category
          tags
          image {
            childImageSharp {
              fluid(quality: 75, cropFocus: ATTENTION) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  const [loading, setLoading] = React.useState(true);
  const [memo, setMemo] = React.useState({
    All: data.allRecruitingResource.nodes,
  });

  // if our category has changed, get or fill our memoized data
  React.useEffect(() => {
    if (category in memo) return;

    const filtered = data.allRecruitingResource.nodes.filter(
      ({ node }) => node.category === category
    );
    setMemo({
      ...memo,
      [category]: filtered,
    });
  }, [data, category, memo]);

  // set loading to false once we've gotten our data
  React.useEffect(() => {
    setLoading(false);
  }, [memo]);

  return (
    <Grid container spacing={4} className={classes.cardGrid}>
      {loading
        ? placeholderData.map((value, index) => (
            <Grid item key={index} xs={12} sm={6} lg={4}>
              <Card loading={true} />
            </Grid>
          ))
        : category in memo &&
          memo[category].map((node, index) => (
            <Grid item key={index} xs={12} sm={6} lg={4}>
              <Card loading={false} data={node} image={node.image} />
            </Grid>
          ))}
    </Grid>
  );
}
