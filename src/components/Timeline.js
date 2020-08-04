import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

import PathSVG from "../../assets/apm-map-trail.svg";

const useStyles = makeStyles((theme) => ({
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
    strokeWidth: 10,
    strokeDasharray: 1000,
    animation: `$dash 2s linear forwards infinite`,
  },
  pathOverlay: {
    stroke: theme.palette.common.white,
    strokeWidth: 15,
    strokeDasharray: 30,
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
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgcolor="white"
      className={classes.box}
    >
      <PathSVG className={`${classes.svg} ${classes.path}`}></PathSVG>
      <PathSVG className={`${classes.svg} ${classes.pathOverlay}`}></PathSVG>
    </Box>
  );
}
