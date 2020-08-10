import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Grid from "@material-ui/core/Grid";
import Card from "../MediaCard";

export default function MockInterviews() {
  const data = useStaticQuery(graphql`
    query GetMockInterviewsResources {
      allRecruitingResource(filter: { category: { eq: "Mock Interviews" } }) {
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

  return (
    <>
      {data.allRecruitingResource.nodes.map((node, index) => (
        <Grid item key={index} xs={12} sm={6} lg={4}>
          <Card loading={false} data={node} image={node.image} />
        </Grid>
      ))}
    </>
  );
}