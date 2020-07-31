import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import IconButton from "@material-ui/core/IconButton";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Zoom from "@material-ui/core/Zoom";

import bg from "../../static/assets/bg-video-1.mp4";
import Video from "../components/Video";
import Emoji from "../components/Emoji";
import ScrollTop from "../components/directory/DirectoryAppBar";

const useStyles = makeStyles((theme) => ({
  box: {
    display: "flex",
    justifyContent: "center",
    height: "100vh",
    width: "100vw",
    backgroundImage: `url(${bg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  title: {
    color: theme.palette.grey[50],
  },
  subtitle: {
    color: theme.palette.grey[300],
  },
}));

export default function Splash(props) {
  const classes = useStyles();

  // container variant helper function
  const containerVariantsWithStagger = (stagger) => ({
    before: {},
    after: { transition: { staggerChildren: stagger } },
  });

  // spring transition helper function
  const springTransition = (damping, stiffness) => ({
    type: "spring",
    damping: damping,
    stiffness: stiffness,
  });

  /**
   * Frame div variants
   */
  const letterVariants = {
    before: (i) => ({
      opacity: 0,
      x: i * 25,
      y: 25,
      transition: springTransition(100, 500),
    }),
    after: {
      opacity: 1,
      y: 0,
      transition: springTransition(100, 500),
    },
    slide: {
      x: 0,
      transition: springTransition(100, 500),
    },
  };

  const mapVariants = {
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
  };

  const arrowVariants = {
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
    pulsate: {
      y: 10,
      transition: {
        from: 0,
        to: 10,
        flip: Infinity,
        duration: 1,
      },
    },
  };

  /**
   * Animation sequence
   */
  const apmControls = useAnimation();
  const mapControls = useAnimation();
  const subtitleControls = useAnimation();
  const arrowControls = useAnimation();

  async function sequence() {
    await apmControls.start("after");
    await apmControls.start("slide");
    await mapControls.start("after");
    subtitleControls.start("after");
    arrowControls.start("after");
    return arrowControls.start("pulsate");
  }

  useEffect(() => {
    sequence();
  }, []);

  return (
    <Box className={classes.box}>
      <Video src={bg} />
      <motion.div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
        size="auto"
      >
        <motion.div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
          size="auto"
        >
          <motion.div
            style={{
              display: "flex",
              marginInlineEnd: "1em",
            }}
            background={""}
            size="auto"
            initial="before"
            animate={apmControls}
            variants={containerVariantsWithStagger(0.75)}
          >
            {["A", "P", "M"].map((letter, index) => (
              <motion.div
                custom={index}
                background={""}
                position="relative"
                center="y"
                size="auto"
                variants={letterVariants}
              >
                <Typography
                  className={classes.title}
                  component="h1"
                  variant="h2"
                  align="center"
                  color="white"
                  gutterBottom
                >
                  {letter}
                </Typography>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            style={{
              display: "flex",
              marginInlineEnd: "1em",
              justifyContent: "center",
            }}
            background={""}
            size="auto"
            initial="before"
            animate={mapControls}
            variants={containerVariantsWithStagger(0.1)}
          >
            <motion.div
              background={""}
              position="relative"
              center="y"
              size="auto"
              variants={mapVariants}
            >
              <Typography
                className={classes.title}
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Map
              </Typography>
            </motion.div>
            <motion.div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              background={""}
              center="y"
              position="relative"
              size="auto"
              variants={mapVariants}
            >
              <Typography variant="h2" align="center">
                {"\u00A0"}
                <Emoji symbol="🗺️" label="map" />
              </Typography>
            </motion.div>
            <motion.div
              position="relative"
              center="y"
              size="auto"
              variants={mapVariants}
              background={""}
            >
              <Typography variant="h6" align="center">
                <Emoji symbol="✨" label="sparkle" />
              </Typography>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
          background={""}
          size="auto"
          initial="before"
          animate={subtitleControls}
          variants={containerVariantsWithStagger(0.1)}
        >
          <motion.div
            background={""}
            position="relative"
            center="y"
            size="auto"
            variants={mapVariants}
          >
            <Typography
              className={classes.subtitle}
              variant="h6"
              align="center"
              color="textSecondary"
              paragraph
            >
              {props.subtitle}
            </Typography>
          </motion.div>
        </motion.div>
        <motion.div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
          background={""}
          size="auto"
          initial="before"
          animate={arrowControls}
          variants={containerVariantsWithStagger(0.1)}
        >
          <motion.div
            background={""}
            position="relative"
            center="y"
            size="auto"
            variants={arrowVariants}
          >
            <ScrollToDirectory {...props}>
              <Fab
                color="transparent"
                size="small"
                variant="extended"
                aria-label="scroll to directory"
              >
                <KeyboardArrowDownIcon />
              </Fab>
            </ScrollToDirectory>
          </motion.div>
        </motion.div>
      </motion.div>
    </Box>
  );
}

function ScrollToDirectory(props) {
  const { children } = props;

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#directory-hero"
    );

    console.log(anchor);
    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Zoom in>
      <div onClick={handleClick} role="presentation">
        {children}
      </div>
    </Zoom>
  );
}
