import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Grow } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  box: {
    [theme.breakpoints.up("xs")]: {
      padding: theme.spacing(4, 2, 4),
    },
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(4, 2, 4),
    },
  },
}));

export default function Timeline() {
  const classes = useStyles();

  return <Box height={400} bgcolor="lightgreen" className={classes.box}></Box>;
}
