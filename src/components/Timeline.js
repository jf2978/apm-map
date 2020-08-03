import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Grow } from "@material-ui/core";

import PathSVG from "../../assets/timeline-path.svg";

const useStyles = makeStyles((theme) => ({
  box: {
    [theme.breakpoints.up("xs")]: {
      padding: theme.spacing(4, 2, 4),
    },
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(4, 2, 4),
    },
  },
  path: {
    position: "absolute",
    stroke: theme.palette.common.black,
    strokeWidth: 10,
    strokeDasharray: 1000,
    strokeDashoffset: 1000,
    animation: `$dash 2s linear forwards infinite`,
  },
  pathOverlay: {
    position: "absolute",
    stroke: theme.palette.common.white,
    strokeWidth: 15,
    strokeDasharray: 50,
    strokeDashoffset: 100,
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
    <Box
      display="flex"
      justifyContent="center"
      height={350}
      bgcolor="white"
      className={classes.box}
    >
      <PathSVG className={classes.path}></PathSVG>
      <PathSVG className={classes.pathOverlay}></PathSVG>
    </Box>
  );
}
