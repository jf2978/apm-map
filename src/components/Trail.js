// great blog post that taught me a lot about how SVGs work: https://www.sarasoueidan.com/blog/svg-coordinate-systems/

import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useAnimation,
  useTransform,
  useSpring,
  useViewportScroll,
  useMotionValue,
} from "framer-motion";

import { makeStyles, darken } from "@material-ui/core/styles";

import MapPin from "../components/MapPin";

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
  pin: {
    marginLeft: "-100%",
  },
}));

export default function Trail() {
  const classes = useStyles();

  const pathRef = useRef(null);
  const pinRef = useRef(null);
  const circleRef = useRef(null);

  const [isInViewport, setIsInViewport] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [showPin, setShowPin] = useState(false);
  const [pinPosition, setPinPosition] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useViewportScroll();

  const yRange = useTransform(scrollYProgress, [0, 0.02], [0, 1]);

  // spring transition helper function
  const springTransition = (damping, stiffness, velocity) => ({
    type: "spring",
    damping: damping,
    stiffness: stiffness,
    velocity: velocity,
  });

  const containerVariants = {
    before: {},
    after: {},
  };

  useEffect(() => {
    yRange.onChange((v) => setIsInViewport(v >= 1));

    if (isInViewport && !isComplete) {
      pathControls.start("after");
    }
  }, [yRange, isInViewport, isComplete]);

  const pathControls = useAnimation();
  const pathKeyframes = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];
  const pathVariants = {
    before: {
      pathLength: 0,
    },
    after: {
      pathLength: pathKeyframes,
      transition: {
        duration: 3,
      },
    },
  };

  const pinVariants = {
    before: {
      y: -200,
      rotate: -10,
      transition: springTransition(10, 500, 15),
    },
    after: {
      translateX: pinPosition.x,
      translateY: pinPosition.y,
      transition: springTransition(50, 700, 15),
    },
  };

  // NOTE: getTotalLength sucks in Safari
  // TODO implement workaround https://stackoverflow.com/questions/51889547/svg-pathlength-dont-work-on-safari
  function translateAlongPath(path, percent) {
    var len = path.getTotalLength();
    var point = path.getPointAtLength(percent * len);
  }

  useEffect(() => {
    translateAlongPath(pathRef.current, 0);
  }, [pathRef]);

  function onComplete() {
    setShowPin(true);
    setIsComplete(true);
  }

  return (
    <>
      <motion.svg
        width="85%"
        height="85%"
        viewBox="108.57142639160156 493.9756164550781 1700 175"
      >
        <motion.g>
          <motion.path
            id="trail"
            ref={pathRef}
            className={classes.path}
            initial="before"
            animate={pathControls}
            variants={pathVariants}
            onAnimationComplete={onComplete}
            transform="translate(0, 20)"
            d="m 108.57143,557.14286 c 54.71545,56.94918 137.75473,85.23698 215.85727,73.53299 42.33495,-6.34407 82.28863,-23.50566 120.40401,-42.99189 38.11538,-19.48622 75.00423,-41.48126 114.26765,-58.53643 74.82712,-32.50325 160.05864,-46.23249 238.82161,-24.97328 43.07992,11.62786 82.70562,33.13515 122.53932,53.24395 39.83369,20.10879 81.06661,39.22246 125.25301,45.43894 39.7768,5.5961 80.3348,0.47532 119.6194,-7.905 39.2845,-8.38033 77.8425,-20.00594 117.2773,-27.64843 103.9896,-20.15327 211.9087,-12.07209 315.4105,10.45291 70.1073,15.25738 138.7834,37.08393 204.8356,65.10052"
            fill="none"
          />
          <motion.path
            className={classes.pathOverlay}
            transform="translate(0, 20)"
            d="m 108.57143,557.14286 c 54.71545,56.94918 137.75473,85.23698 215.85727,73.53299 42.33495,-6.34407 82.28863,-23.50566 120.40401,-42.99189 38.11538,-19.48622 75.00423,-41.48126 114.26765,-58.53643 74.82712,-32.50325 160.05864,-46.23249 238.82161,-24.97328 43.07992,11.62786 82.70562,33.13515 122.53932,53.24395 39.83369,20.10879 81.06661,39.22246 125.25301,45.43894 39.7768,5.5961 80.3348,0.47532 119.6194,-7.905 39.2845,-8.38033 77.8425,-20.00594 117.2773,-27.64843 103.9896,-20.15327 211.9087,-12.07209 315.4105,10.45291 70.1073,15.25738 138.7834,37.08393 204.8356,65.10052"
            fill="none"
          />
        </motion.g>
      </motion.svg>
    </>
  );
}
