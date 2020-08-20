import React from "react";
import Carousel from "react-material-ui-carousel";

import { graphql, useStaticQuery } from "gatsby";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import Card from "../util/MediaCard";
import Hero from "../util/Hero";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      paddingLeft: theme.spacing(10),
      paddingRight: theme.spacing(10),
    },
  },
  carousel: {
    [theme.breakpoints.up("xs")]: {
      width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "90%",
    },
    [theme.breakpoints.up("md")]: {
      width: "50%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "70%",
    },
  },
}));

export default function MiniDirectory({ category }) {
  const classes = useStyles();

  const data = useStaticQuery(graphql`
    query GetFeaturedResources {
      allRecruitingResource(filter: { featured: { eq: true } }) {
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

  function DirectoryRow({ group }) {
    return (
      <div className={classes.item}>
        <Grid container justify="center" spacing={4} xs={12}>
          {group.map((node, index) => (
            <Grid justify="center" item xs={12} sm={6} md={4}>
              <Card loading={false} data={node} image={node.image} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }

  return (
    <>
      <Hero
        id="directory-preview"
        title="title"
        subtitle="subtitle things go here"
      />
      <Container maxWidth={false} className={classes.container}>
        <Carousel
          className={classes.carousel}
          navButtonsAlwaysVisible={true}
          autoPlay={false}
          animation="slide"
        >
          {data.allRecruitingResource.nodes.map((node, index) => (
            <div className={classes.item}>
              <Grid justify="center" item xs={12}>
                <Card loading={false} data={node} image={node.image} />
              </Grid>
            </div>
          ))}
        </Carousel>
      </Container>
    </>
  );
}
