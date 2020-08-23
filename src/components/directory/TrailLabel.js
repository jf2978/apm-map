import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  },
}));

export default function TrailLabel({ label }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography>{label}</Typography>
    </div>
  );
}
