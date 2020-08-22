import React from "react";
import Carousel from "react-material-ui-carousel";

import { graphql, useStaticQuery } from "gatsby";

import { makeStyles, darken } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import WebIcon from "@material-ui/icons/Web";
import Button from "@material-ui/core/Button";

import Card from "../util/MediaCard";
import Link from "../util/Link";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
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
    [theme.breakpoints.up("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      width: "50%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "40%",
    },
    margin: theme.spacing(0, 10, 0),
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
    fontStyle: "normal",
  },
  highlights: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      width: "50%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "40%",
    },
  },
  callout: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(5),
  },
  button: {
    width: "25%",
    padding: theme.spacing(1),
  },
}));

export default function DirectoryPreview({ category }) {
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
      <Container maxWidth={"xl"} className={classes.container}>
        <div className={classes.highlights}>
          <div className={classes.callout}>
            <Typography
              style={{ width: "40%" }}
              color="textSecondary"
              variant="h2"
              align="center"
              gutterBottom
            >
              {"150+"}
            </Typography>
            <Typography
              style={{ width: "60%" }}
              variant="h6"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              {"resources recommended by professional PMs"}
            </Typography>
          </div>
          <div className={classes.callout}>
            <Typography
              style={{ width: "40%" }}
              color="textSecondary"
              variant="h2"
              align="center"
              gutterBottom
            >
              {"1"}
            </Typography>
            <Typography
              style={{ width: "60%" }}
              variant="h6"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              {"easy-to-navigate directory"}
            </Typography>
          </div>
        </div>
        <Carousel
          className={classes.carousel}
          navButtonsAlwaysVisible={true}
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
      <div className={classes.buttonContainer}>
        <Button
          component={Link}
          to={"/directory"}
          className={classes.button}
          variant="contained"
          color="primary"
        >
          <Typography
            className={classes.label}
            color="white"
            variant="button"
            align="center"
            gutterBottom
          >
            {"see more"}
          </Typography>
        </Button>
      </div>
    </>
  );
}
