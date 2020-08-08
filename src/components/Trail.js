import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useTransform,
  useSpring,
  useViewportScroll,
  useMotionValue,
} from "framer-motion";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  path: {
    width: "100%",
    stroke: theme.palette.common.black,
    strokeWidth: 8,
  },
  pathOverlay: {
    width: "100%",
    stroke: "#e4e4d9",
    strokeWidth: 15,
    strokeDasharray: 15,
    marginLeft: "-100%",
  },
}));

export default function Trail() {
  const classes = useStyles();

  const trailRef = useRef(null);
  const theUseRef = useRef(null);

  const [isComplete, setIsComplete] = useState(false);
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.06], [0, 1]);
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });
  const circleXPos = useMotionValue(0);
  const circleYPos = useMotionValue(0);

  //scrollYProgress.onChange(() => console.log(scrollYProgress.current));
  yRange.onChange(() => console.log(yRange.current));

  return (
    <>
      <motion.svg viewBox="0 0 725 190" className={classes.path}>
        <motion.defs>
          <motion.g height="100" width="100">
            <motion.circle
              id="circle"
              r="10"
              stroke="black"
              stroke-width="3"
              fill="red"
            />
          </motion.g>
        </motion.defs>
        <motion.path
          ref={trailRef}
          style={{ pathLength }}
          d="M70.5,260.5c24.94-36.09,64.72-82.66,109-79,65.51,5.42,85.51,116.21,144,116,59.65-.22,82.63-115.61,138-112,52.14,3.4,69.64,108.22,116,105,37.11-2.58,47.71-71.24,86-71,32.35.2,40,49.31,71,51,47.82,2.61,67-111.81,118-115,47.09-2.95,61.4,92.82,123,113,82.81,27.12,154.88-159.27,231-144,25.57,5.13,59.69,33.41,85,151"
          transform="translate(-70.09 -123.11)"
          fill="none"
        />
        <motion.use
          ref={theUseRef}
          transform="translate(-70.09 -123.11)"
          xlinkHref="#circle"
        />
      </motion.svg>
      <svg viewBox="0 0 725 190" className={classes.pathOverlay}>
        <path
          d="M70.5,260.5c24.94-36.09,64.72-82.66,109-79,65.51,5.42,85.51,116.21,144,116,59.65-.22,82.63-115.61,138-112,52.14,3.4,69.64,108.22,116,105,37.11-2.58,47.71-71.24,86-71,32.35.2,40,49.31,71,51,47.82,2.61,67-111.81,118-115,47.09-2.95,61.4,92.82,123,113,82.81,27.12,154.88-159.27,231-144,25.57,5.13,59.69,33.41,85,151"
          transform="translate(-70.09 -123.11)"
          fill="none"
        />
      </svg>
    </>
  );
}
