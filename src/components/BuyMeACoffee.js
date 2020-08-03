import React from "react";
import { motion } from "framer-motion";

import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import { withStyles, makeStyles, darken } from "@material-ui/core/styles";

import BuyMeACoffeeIcon from "../../assets/bmac.svg";
import Emoji from "../components/Emoji";

const useStyles = makeStyles((theme) => ({
  button: {
    boxShadow: theme.shadows[10],
    width: 80,
    height: 80,
    backgroundColor: "#79D6B5",
    marginBottom: theme.spacing(4),
    marginRight: theme.spacing(4),
    float: "right",
    "&:hover": {
      backgroundColor: darken("#79D6B5", 0.05),
      boxShadow: theme.shadows[10],
    },
  },
}));

const HTMLTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#f5f5f9",
    maxWidth: 180,
    color: "rgba(0, 0, 0, 0.87)",
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}))(Tooltip);

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
        to: 2,
        yoyo: Infinity,
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div animate={["after", "bounce"]} variants={buttonVariants}>
      <HTMLTooltip
        title={
          <Typography variant="body2">
            {" If we've helped you in your journey, consider suppprting ours! "}
            <Emoji symbol="❤️" label="heart" />
          </Typography>
        }
        placement="left"
        aria-label="help-support-us"
      >
        <IconButton
          className={classes.button}
          href="https://www.buymeacoffee.com/michellema"
        >
          <BuyMeACoffeeIcon height={75} width={75} />
        </IconButton>
      </HTMLTooltip>
    </motion.div>
  );
}
