import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Carousel from "react-material-ui-carousel";

import Card from "../util/MediaCard";

export default function DirectoryPreview() {
  // dummy query that just gets 6 resources
  const data = useStaticQuery(graphql`
    query GetFeaturedResources {
      allRecruitingResource(limit: 6, sort: { fields: id }) {
        nodes {
          id
          name
          description
          category
          tags
          link
          image {
            childImageSharp {
              fixed(
                width: 250
                height: 200
                quality: 75
                cropFocus: ATTENTION
              ) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `);

  return (
    <>
      <Box bgcolor="lightgreen" height={500}>
        <Carousel
          style={{
            width: 300,
            height: 300,
          }}
          animation="slide"
        >
          {data.allRecruitingResource.nodes.map((node, index) => (
            <Card loading={false} data={node} image={node.image} />
          ))}
        </Carousel>
      </Box>
    </>
  );
}
