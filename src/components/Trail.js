import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

import { makeStyles } from "@material-ui/core/styles";

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

export default function Trail({ overlay }) {
  const classes = useStyles();

  return (
    <motion.svg
      preserveAspectRatio="none"
      viewBox="0 0 725 190"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(classes.svg, {
        [classes.pathOverlay]: overlay,
        [classes.path]: !overlay,
      })}
    >
      <motion.path
        d="M70.5,260.5c24.94-36.09,64.72-82.66,109-79,65.51,5.42,85.51,116.21,144,116,59.65-.22,82.63-115.61,138-112,52.14,3.4,69.64,108.22,116,105,37.11-2.58,47.71-71.24,86-71,32.35.2,40,49.31,71,51,47.82,2.61,67-111.81,118-115,47.09-2.95,61.4,92.82,123,113,82.81,27.12,154.88-159.27,231-144,25.57,5.13,59.69,33.41,85,151"
        transform="translate(-70.09 -123.11)"
        fill-opacity="null"
        stroke-opacity="null"
        fill="none"
      />
    </motion.svg>
  );
}
