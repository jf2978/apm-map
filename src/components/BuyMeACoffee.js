import React from "react";

import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import { makeStyles, darken } from "@material-ui/core/styles";

import BuyMeACoffeeIcon from "../../assets/bmac.svg";
import { motion } from "framer-motion";

const useStyles = makeStyles((theme) => ({
  button: {
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[10],
    width: 100,
    height: 90,
    backgroundColor:"#79D6B5",
    float: "right",
    margin: theme.spacing(3),
    "&:hover": {
      backgroundColor: darken("#79D6B5", 0.1),
      boxShadow: theme.shadows[10],
    },
  },
}));

export default function BuyMeACoffee() {
  const classes = useStyles();

  // spring transition helper function
  const springTransition = (damping, stiffness) => ({
    type: "spring",
    damping: damping,
    stiffness: stiffness,
  });

  const buttonVariants = {
    before: {
      opacity: 0,
      y: 25,
      transition: springTransition(20, 500),
    },
    after: {
      opacity: 1,
      y: 0,
      transition: springTransition(20, 500),
    },
    bounce: {
      y: 0,
      transition: {
        from: 0,
        to: 5,
        yoyo: Infinity,
        duration: 1,
      },
    },
  };

  return (
    <motion.div
      animate={["after", "bounce"]}
      variants={buttonVariants}
    >
      <Button
      variant="contained"
      color="red"
      className={classes.button}
      href="https://www.buymeacoffee.com/michellema"
    >
        <BuyMeACoffeeIcon height={80} width={80} />
      </Button>
    </motion.div>
  );
}
