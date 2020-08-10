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
import IconButton from "@material-ui/core/IconButton";

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
}));

export default function Trail() {
  // material ui icons for sections
  // all = ?, why pm = laptop, find programs = search, interview prep = work,
  // technical interview = build, mocks = group, post offer = receipt, books = books

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
      <motion.svg width="100%" height="100%" viewBox="100 500 1650 200">
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

        {/**
         * red x
         * <motion.g>
          <path
            transform="translate(0, 100)"
            fill="#ff0000"
            d="m 274.2793,352.01562 c -0.0324,0.0431 -0.0653,0.0858 -0.0977,0.12891 0.0324,-0.007 0.0651,-0.0117 0.0977,-0.0176 -2.1e-4,-0.037 2e-4,-0.0745 0,-0.11133 z"
          />
          <path
            transform="translate(0, 100)"
            fill="#ff0000"
            d="m 251.55167,496.55331 c 1.96701,4.00986 4.51766,7.68371 7.1228,11.29631 4.7465,6.17827 10.21924,11.81794 16.35387,16.63102 1.32032,1.03589 2.70162,1.99162 4.05243,2.98743 4.02141,2.79526 8.36589,5.08386 12.89736,6.93247 1.36943,0.55866 2.77616,1.02115 4.16424,1.53173 0.70831,0.45386 -5.71027,10.47092 -6.41858,10.01706 v 0 c -1.5348,-0.65415 -3.08893,-1.26466 -4.60439,-1.96245 -5.03444,-2.31808 -9.88579,-5.03533 -14.37619,-8.29343 -1.48004,-1.12892 -2.99062,-2.21889 -4.44012,-3.38677 -6.66752,-5.3721 -12.66907,-11.54679 -18.06547,-18.18421 -2.91772,-3.74429 -5.69482,-7.58472 -8.45963,-11.4408 -0.43335,-0.83253 11.34034,-6.96089 11.77368,-6.12836 z"
          />
          <path
            transform="translate(0, 100)"
            fill="#ff0000"
            d="m 296.86562,500.31974 c -3.76322,4.07337 -7.87215,7.82051 -11.91354,11.61389 -9.09932,8.48762 -18.11699,17.06166 -27.03089,25.74371 -6.14178,5.96824 -12.04351,12.17529 -17.79647,18.51719 -0.54587,0.70354 -10.49542,-7.01631 -9.94955,-7.71985 v 0 c 6.42484,-5.82253 12.51809,-11.99795 18.84942,-17.92082 8.95769,-8.54561 17.92371,-17.08759 26.55482,-25.96594 3.42893,-3.57367 6.94155,-7.11658 9.89656,-11.10385 0.48335,-0.80537 11.873,6.0303 11.38965,6.83567 z"
          />
        </motion.g>
         *
         */}

        {/**
          * placeholder circle
          *  <g id="layer1" transform="translate(-94.571436,-206.71428)">
          <circle
            transform="translate(250, 500)"
            style={{
              opacity: 1,
              fill: "#999999",
              fillOpacity: 0.56470588,
              stroke: "#000000",
              strokeWidth: 1.86535549,
              strokeMiterlimit: 4,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            cx="123.92858"
            cy="236.07143"
            r="28.424467"
          />
        </g>
          */}
      </motion.svg>
      <IconButton className={classes.button} href="#">
        <ReceiptIcon id="receipt" width={50} height={50} />
      </IconButton>
    </>
  );
}
