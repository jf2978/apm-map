// great blog post that taught me a lot about how SVGs work: https://www.sarasoueidan.com/blog/svg-coordinate-systems/

import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useAnimation,
  useTransform,
  useViewportScroll,
} from "framer-motion";

import { makeStyles, darken } from "@material-ui/core/styles";
import { CATEGORIES } from "../constants/filters";

const useStyles = makeStyles((theme) => ({
  path: {
    stroke: theme.palette.common.black,
    strokeWidth: 12,
  },
  pathOverlay: {
    stroke: "#e4e4d9",
    strokeWidth: 20,
    strokeDasharray: 30,
    marginLeft: "-100%",
  },
  circle: {
    stroke: theme.palette.common.black,
    strokeWidth: 6,
    fill: theme.palette.common.white,

    "&:hover": {
      cursor: "pointer",
      fill: darken("#FFF", 0.2),
      boxShadow: "0px 5px 5px #FFF",
    },
  },
}));

export default function Trail({ toggleCategory }) {
  // material ui icons for sections
  // all = ?, why pm = laptop, find programs = search, interview prep = work,
  // technical interview = build, mocks = group, post offer = receipt, books = books

  const classes = useStyles();
  const pathRef = useRef(null);

  const [isInViewport, setIsInViewport] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [showStops, setShowStops] = useState(false);

  const { scrollYProgress } = useViewportScroll();

  const yRange = useTransform(scrollYProgress, [0, 0.02], [0, 1]);
  const stopPoints = [0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9];

  useEffect(() => {
    yRange.onChange((v) => setIsInViewport(v >= 1));

    if (isInViewport && !isComplete) {
      pathControls.start("after");
      setShowStops(true);
      circleControls.start("after");
    }
  }, [yRange, isInViewport, isComplete]);

  // container variant helper function
  const containerVariantsWithStagger = (stagger) => ({
    before: {},
    after: { transition: { staggerChildren: stagger } },
  });

  // animate an SVG path to smoothly increase pathLength
  const pathControls = useAnimation();
  const pathKeyframes = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];
  const pathVariants = {
    before: {
      pathLength: 0,
    },
    after: {
      pathLength: pathKeyframes,
      transition: {
        duration: 2,
      },
    },
  };

  // animate circles to fade in stagger
  const circleControls = useAnimation();
  const circleVariants = {
    before: {
      scale: 0,
      transition: {
        duration: 1,
      },
    },
    after: {
      scale: 1,
    },
    pulsate: {
      scale: [1.1, 1],
      transition: {
        yoyo: Infinity,
        duration: 1,
      },
    },
  };

  // TODO implement path.getTotalLength workaround https://stackoverflow.com/questions/51889547/svg-pathlength-dont-work-on-safari

  return (
    <>
      <motion.svg width="100%" height="100%" viewBox="0 0 1600 375">
        {/** dashed trail */}
        <motion.svg x="-10%" y="-100%" style={{ overflow: "visible" }}>
          <motion.path
            ref={pathRef}
            className={classes.path}
            initial="before"
            animate={pathControls}
            variants={pathVariants}
            onAnimationComplete={() => setIsComplete(true)}
            d="m 108.57143,557.14286 c 54.71545,56.94918 137.75473,85.23698 215.85727,73.53299 42.33495,-6.34407 82.28863,-23.50566 120.40401,-42.99189 38.11538,-19.48622 75.00423,-41.48126 114.26765,-58.53643 74.82712,-32.50325 160.05864,-46.23249 238.82161,-24.97328 43.07992,11.62786 82.70562,33.13515 122.53932,53.24395 39.83369,20.10879 81.06661,39.22246 125.25301,45.43894 39.7768,5.5961 80.3348,0.47532 119.6194,-7.905 39.2845,-8.38033 77.8425,-20.00594 117.2773,-27.64843 103.9896,-20.15327 211.9087,-12.07209 315.4105,10.45291 70.1073,15.25738 138.7834,37.08393 204.8356,65.10052"
            fill="none"
          />
          <motion.path
            className={classes.pathOverlay}
            d="m 108.57143,557.14286 c 54.71545,56.94918 137.75473,85.23698 215.85727,73.53299 42.33495,-6.34407 82.28863,-23.50566 120.40401,-42.99189 38.11538,-19.48622 75.00423,-41.48126 114.26765,-58.53643 74.82712,-32.50325 160.05864,-46.23249 238.82161,-24.97328 43.07992,11.62786 82.70562,33.13515 122.53932,53.24395 39.83369,20.10879 81.06661,39.22246 125.25301,45.43894 39.7768,5.5961 80.3348,0.47532 119.6194,-7.905 39.2845,-8.38033 77.8425,-20.00594 117.2773,-27.64843 103.9896,-20.15327 211.9087,-12.07209 315.4105,10.45291 70.1073,15.25738 138.7834,37.08393 204.8356,65.10052"
            fill="none"
          />
        </motion.svg>
        {/** path stops  */}
        {showStops && (
          <motion.svg
            x="-10%"
            y="-100%"
            width="25%"
            height="25%"
            style={{ overflow: "visible" }}
            initial="before"
            animate="after"
            variants={containerVariantsWithStagger(0.2)}
          >
            {stopPoints.map((val, idx) => {
              var len = pathRef.current.getTotalLength();
              var point = pathRef.current.getPointAtLength(val * len);

              return (
                <a onClick={() => toggleCategory(CATEGORIES[idx + 1])}>
                  <motion.circle
                    cx={point.x}
                    cy={point.y}
                    r="18"
                    className={classes.circle}
                    custom={idx}
                    initial="before"
                    whileHover="pulsate"
                    animate={circleControls}
                    variants={circleVariants}
                  />
                </a>
              );
            })}
          </motion.svg>
        )}
      </motion.svg>
    </>
  );
}
