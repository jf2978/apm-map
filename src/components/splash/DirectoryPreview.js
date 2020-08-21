import React from "react";
import Carousel from "react-material-ui-carousel";

import { graphql, useStaticQuery } from "gatsby";

import { makeStyles, darken } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

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
      width: "45%",
    },
    marginBottom: theme.spacing(5),
  },
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: theme.spacing(5, 0, 5),
  },
  label: {
    fontVariant: "small-caps",
  },
  title: {
    fontWeight: 900,
    padding: theme.spacing(2, 0, 2),
    width: "75%",
  },
  subtitle: {
    width: "85%",
    padding: theme.spacing(2, 0, 2),
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
      <Box id="directory-preview">
        <div className={classes.header}>
          <Typography
            className={classes.label}
            color="textSecondary"
            variant="h5"
            align="center"
            gutterBottom
          >
            {"directory"}
          </Typography>
          <Typography
            className={classes.title}
            variant="h3"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            {"Simplify the A/PM recruiting process"}
          </Typography>
          <Typography
            className={classes.subtitle}
            variant="h6"
            align="center"
            color="textSecondary"
            paragraph
          >
            {
              <>
                {
                  "We've collected and organized some of the best A/PM recruiting resources out there"
                }{" "}
                &mdash; {"so you can focus on getting your dream job"}
              </>
            }
          </Typography>
        </div>
      </Box>
      <Container maxWidth={false} className={classes.container}>
        <Box className={classes.carousel} bgcolor="red"></Box>
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
