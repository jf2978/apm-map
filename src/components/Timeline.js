import React from "react";
import Box from "@material-ui/core/Container";
import Container from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

import Trail from "./Trail";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
  },
  box: {
    width: "100%",
    [theme.breakpoints.up("xs")]: {
      padding: theme.spacing(4, 2, 4),
    },
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(4, 2, 4),
    },
  },
  svg: {
    width: "100%",
    strokeDashoffset: 1000,
  },
  path: {
    stroke: theme.palette.common.black,
    strokeWidth: 8,
    strokeDasharray: 1000,
    animation: `$dash 2s linear forwards infinite`,
  },
  pathOverlay: {
    stroke: theme.palette.background.paper,
    strokeWidth: 15,
    strokeDasharray: 25,
    marginLeft: "-100%",
  },
  "@keyframes dash": {
    to: {
      strokeDashoffset: 0,
    },
  },
}));

export default function Timeline() {
  const classes = useStyles();

  return (
    <Container disableGutters maxWidth="lg" className={classes.container}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        bgcolor="white"
        className={classes.box}
      >
        <Trail />
      </Box>
    </Container>
  );
}
