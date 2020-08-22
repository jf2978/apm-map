import React from "react";
import { Link, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { motion } from "framer-motion";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  signup: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    marginLeft: theme.spacing(2),
  },
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    margin: theme.spacing(5, 0, 5),
  },
  label: {
    fontVariant: "small-caps",
  },
  title: {
    fontWeight: 900,
    margin: theme.spacing(2, 0, 2),
    width: "75%",
  },
  subtitle: {
    width: "85%",
    margin: theme.spacing(2, 0, 2),
    fontStyle: "normal",
  },
  substackWatermark: {
    height: "20px",
    width: "100px",
    backgroundImage:
      "url(https://cdn.substack.com/image/fetch/w_200,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack.com%2Fimg%2Fsubstack_wordmark.black.png)",
    backgroundSize: "100%",
    opacity: 0.3,
    transition: "all 0.25s ease-out",

    "&:hover": {
      backgroundImage:
        "url(https://cdn.substack.com/image/fetch/w_200,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack.com%2Fimg%2Fsubstack_wordmark.png)",
      opacity: 1,
    },
  },
}));

export default function Layout({ children }) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <div className={classes.header}>
        <Typography
          className={classes.label}
          color="textSecondary"
          variant="h5"
          align="center"
          gutterBottom
        >
          {"newsletter"}
        </Typography>
        <Typography
          className={classes.title}
          variant="h3"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          {"Want to be kept in the loop?"}
        </Typography>
        <Typography
          className={classes.subtitle}
          variant="h6"
          align="center"
          color="textSecondary"
        >
          {
            "Get advice from our network of students and recent grads in A/PM programs"
          }
        </Typography>
      </div>
      <div className={classes.signup}>
        <iframe
          src="https://thepmcollective.substack.com/embed"
          width="100%"
          height="100%"
          style={{
            border: "1px",
            solid: "#EEE",
            background: "white",
          }}
          frameborder="0"
          scrolling="no"
        ></iframe>
      </div>
    </footer>
  );
}
