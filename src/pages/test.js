import React, { useEffect, useState } from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Fade from "@material-ui/core/Fade";
import { getThemeProps } from "@material-ui/styles";
import { Grow } from "@material-ui/core";

export default function Test({ data }) {
  return (
    <Container>
      <Img fluid={data.fileName.childImageSharp.fluid} alt="" />
    </Container>
  );
}

// image path is relative to what's specified in gatsby-config; static/images in this case
export const query = graphql`
  query {
    fileName: file(relativePath: { eq: "jeff.jpg" }) {
      childImageSharp {
        fixed(width: 250, height: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
