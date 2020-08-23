import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Carousel from "react-material-ui-carousel";

import Card from "../util/MediaCard";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100vw",
    height: "70vh",
    background: theme.palette.primary,
  },
  item: {
    height: "100%",
    width: "100%",
    // TODO make these responsive
  },
}));

function Item({ node }) {
  const classes = useStyles();

  return (
    <div item className={classes.item}>
      <Card loading={false} data={node} image={node.image} />
    </div>
  );
}

export default function DirectoryPreview() {
  const classes = useStyles();

  // placeholder query that just gets 6 random resources
  // TODO pick actual featured resources and mark them with a new field (filterable in graphQL)
  const data = useStaticQuery(graphql`
    query GetFeaturedResources2 {
      allRecruitingResource(
        limit: 6
        filter: {
          name: {
            in: [
              "Success in Tech"
              "College PM"
              "Lewis Lin's Slack Community"
              "Subtle Asian PM"
            ]
          }
        }
      ) {
        nodes {
          id
          name
          description
          category
          tags
          link
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

  return (
    <>
      <Container maxWidth={"lg"} className={classes.container}>
        <Grid container>
          <Grid justify="center" item xs={6}>
            <Box className={classes.item} bgcolor="lightgreen">
              Discover 150+ recruiting resources
            </Box>
          </Grid>
          <Grid justify="center" item xs={1}></Grid>
          <Grid justify="center" item xs={5}>
            <Carousel animation="slide">
              {data.allRecruitingResource.nodes.map((node, index) => (
                <Item node={node} />
              ))}
            </Carousel>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
