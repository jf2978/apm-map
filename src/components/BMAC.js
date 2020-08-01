import React from "react";

import Fab from "@material-ui/core/Fab";
import { makeStyles, darken } from "@material-ui/core/styles";

import BuyMeACoffeeIcon from "/assets/bmac.svg";

const useStyles = makeStyles((theme) => ({
  fab: {
    background: "#79D6B5",
    float: "right",
    margin: theme.spacing(3),
    "&:hover": {
      background: darken("#79D6B5", 0.1),
    },
  },
}));

export default function BuyMeACoffee() {
  const classes = useStyles();

  return (
    <Fab
      id="bmac"
      className={classes.fab}
      href="https://www.buymeacoffee.com/michellema"
    >
      <BuyMeACoffeeIcon />
    </Fab>
  );
}
