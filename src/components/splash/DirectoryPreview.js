import React from "react";
import Carousel from "react-material-ui-carousel";

import { graphql, useStaticQuery } from "gatsby";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import Card from "../util/MediaCard";
import Hero from "../util/Hero";

const useStyles = makeStyles((theme) => ({}));

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
      <Grid container justify="center" xs={12}>
        {group.map((node, index) => (
          <Grid item xs={4}>
            <Card loading={false} data={node} image={node.image} />
          </Grid>
        ))}
      </Grid>
    );
  }

  return (
    <>
      <Hero
        id="directory-preview"
        title="title"
        subtitle="subtitle things go here"
      />
      <Container className={classes.container}>
        <Carousel interval={6000} animation="slide">
          <DirectoryRow group={data.allRecruitingResource.nodes.slice(0, 3)} />
          <DirectoryRow group={data.allRecruitingResource.nodes.slice(3, 4)} />
        </Carousel>
      </Container>
    </>
  );
}
