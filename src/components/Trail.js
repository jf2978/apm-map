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
import ReceiptIcon from "@material-ui/icons/Receipt";
import RoomRoundedIcon from "@material-ui/icons/RoomRounded";
import IconButton from "@material-ui/core/IconButton";

import MapPin from "../components/MapPin";

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
  pin: {
    marginLeft: "-100%",
  },

  iconPath: {
    fill: "#FFFFFF",
  },

  pathSliderPathDrawn: {
    stroke: "rgba(255, 255, 255, 0.5)",
  },

  itemIcon: {
    width: "45px",
    height: "45px",
    position: "relative",
    top: "50%",
    transform: "translateY(-50%)",
  },

  pathSliderItem: {
    position: "absolute",
    left: "-37px",
    top: "-37px",
    cursor: "pointer",
    textDecoration: "none",
    outline: "none",
  },

  itemCircle: {
    width: "74px",
    height: "74px",
    backgroundColor: "#2189A5",
    boxShadow: "0 0 0 1px rgba(255, 255, 255, 0.5)",
    borderRadius: "100%",
    "&:hover, &:focus": {
      backgroundColor: darken("#1D7891", 0.05),
    },
  },

  itemTitle: {
    position: "absolute",
    top: "150%",
    left: "50%",
    transform: "translateX(-50%)",
    color: "#FFFFFF",
    fontSize: "25px",
    fontVariant: "small-caps",
    whiteSpace: "nowrap",
    opacity: 0,
    pointerEvents: "none",
    transition: "0.5s",
  },
  icon: {
    position: "absolute",
  },
}));

export default function Trail() {
  // material ui icons for sections
  // all = ?, why pm = laptop, find programs = search, interview prep = work,
  // technical interview = build, mocks = group, post offer = receipt, books = books

  const classes = useStyles();

  const pathRef = useRef(null);
  const iconRef = useRef(null);
  const circleRef = useRef(null);

  const [isInViewport, setIsInViewport] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [showPin, setShowPin] = useState(false);
  const [showStops, setShowStops] = useState(false);
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useViewportScroll();

  const yRange = useTransform(scrollYProgress, [0, 0.02], [0, 1]);
  const stopPoints = [0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9];

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
        duration: 2,
      },
    },
  };

  // NOTE: getTotalLength sucks in Safari
  // TODO implement workaround https://stackoverflow.com/questions/51889547/svg-pathlength-dont-work-on-safari
  function translateAlongPath(path, percent) {
    var len = path.getTotalLength();
    var point = path.getPointAtLength(percent * len);

    return point;
  }

  // once our component is mounted onto the DOM, we can get the points on our path
  useEffect(() => {
    setShowStops(true);

    translateAlongPath(pathRef.current, 0.5);
  }, [pathRef]);

  function onComplete() {
    setShowPin(true);
    setIsComplete(true);
  }

  return (
    <>
      <motion.svg width="100%" height="100%" viewBox="0 0 1600 375">
        <motion.svg
          x="-10%"
          y="-100%"
          id="dashed-trail"
          style={{ overflow: "visible" }}
        >
          <motion.path
            id="trail"
            ref={pathRef}
            className={classes.path}
            initial="before"
            animate={pathControls}
            variants={pathVariants}
            onAnimationComplete={onComplete}
            d="m 108.57143,557.14286 c 54.71545,56.94918 137.75473,85.23698 215.85727,73.53299 42.33495,-6.34407 82.28863,-23.50566 120.40401,-42.99189 38.11538,-19.48622 75.00423,-41.48126 114.26765,-58.53643 74.82712,-32.50325 160.05864,-46.23249 238.82161,-24.97328 43.07992,11.62786 82.70562,33.13515 122.53932,53.24395 39.83369,20.10879 81.06661,39.22246 125.25301,45.43894 39.7768,5.5961 80.3348,0.47532 119.6194,-7.905 39.2845,-8.38033 77.8425,-20.00594 117.2773,-27.64843 103.9896,-20.15327 211.9087,-12.07209 315.4105,10.45291 70.1073,15.25738 138.7834,37.08393 204.8356,65.10052"
            fill="none"
          />
          <motion.path
            id="trail-overlay"
            className={classes.pathOverlay}
            d="m 108.57143,557.14286 c 54.71545,56.94918 137.75473,85.23698 215.85727,73.53299 42.33495,-6.34407 82.28863,-23.50566 120.40401,-42.99189 38.11538,-19.48622 75.00423,-41.48126 114.26765,-58.53643 74.82712,-32.50325 160.05864,-46.23249 238.82161,-24.97328 43.07992,11.62786 82.70562,33.13515 122.53932,53.24395 39.83369,20.10879 81.06661,39.22246 125.25301,45.43894 39.7768,5.5961 80.3348,0.47532 119.6194,-7.905 39.2845,-8.38033 77.8425,-20.00594 117.2773,-27.64843 103.9896,-20.15327 211.9087,-12.07209 315.4105,10.45291 70.1073,15.25738 138.7834,37.08393 204.8356,65.10052"
            fill="none"
          />
        </motion.svg>
        {showStops && (
          <motion.svg
            id="trail-stop"
            x="-10%"
            y="-100%"
            width="25%"
            height="25%"
            style={{ overflow: "visible" }}
          >
            {stopPoints.map((val, idx) => {
              var len = pathRef.current.getTotalLength();
              var point = pathRef.current.getPointAtLength(val * len);

              return (
                <a href="#">
                  <motion.circle
                    cx={point.x}
                    cy={point.y}
                    r="18"
                    stroke="black"
                    strokeWidth="6"
                    fill="white"
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
