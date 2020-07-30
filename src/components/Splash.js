import React, { useEffect, useState } from "react";
import { Frame, Stack, useAnimation, useCycle } from "framer";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Fade from "@material-ui/core/Fade";
import { getThemeProps } from "@material-ui/styles";
import { Grow } from "@material-ui/core";

import bg from "../../static/assets/bg-video-1.mp4";
import Video from "../components/Video";
import Emoji from "../components/Emoji";

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
}));

export default function Splash({ title, subtitle }) {
  const classes = useStyles();

  // container: top-level Frame div
  const containerVariants = {
    before: {},
    after: { transition: { staggerChildren: 0.75 } },
  };

  const springTransition = {
    type: "spring",
    damping: 16,
    stiffness: 200,
  };

  /**
   * A-P-M letter sequence
   */
  const letterControls = useAnimation();
  async function letterSequence() {
    await letterControls.start("after");
    return await letterControls.start("slide");
  }

  const letterVariants = {
    before: (i) => ({
      opacity: 0,
      y: 25,
      x: i * 50,
      transition: springTransition,
    }),
    after: {
      opacity: 1,
      y: 0,
      transition: springTransition,
    },
    slide: (i) => ({
      opacity: 1,
      y: 0,
      x: 0,
      transition: springTransition,
    }),
  };

  useEffect(() => {
    sequence();
  }, []);

  const mapControls = useAnimation();
  async function sequence() {
    await letterControls.start("after");
    await letterControls.start("slide");
    return await mapControls.start("after");
  }

  const mapVariants = {
    before: {
      opacity: 0,
      y: 25,
      transition: springTransition,
    },
    after: {
      opacity: 1,
      y: 0,
      transition: springTransition,
    },
  };

  return (
    <Box className={classes.box}>
      {true && <Video src={bg} />}
      <Frame
        style={{
          display: "flex",
          justifyContent: "center",
        }}
        center="y"
        width="auto"
        initial="before"
        animate="after"
        variants={containerVariants}
      >
        <Stack
          style={{
            display: "flex",
            justifyContent: "center",
          }}
          center="y"
          width="auto"
          direction="horizontal"
        >
          {["A", "P", "M"].map((letter, index) => (
            <Frame
              custom={index}
              center="y"
              size="auto"
              style={{ position: "relative" }}
              animate={letterControls}
              variants={letterVariants}
            >
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                {letter}
              </Typography>
            </Frame>
          ))}
          <Stack
            style={{
              display: "flex",
              justifyContent: "center",
            }}
            center="y"
            width="auto"
            direction="horizontal"
          >
            <Frame
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              center="y"
              size="auto"
              initial="before"
              animate={mapControls}
              variants={mapVariants}
            >
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Map
              </Typography>
            </Frame>
            <Frame
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              center="y"
              size="auto"
              initial="before"
              animate={mapControls}
              variants={mapVariants}
            >
              <Typography variant="h2" align="center">
                <Emoji symbol="🗺️" label="map" />
              </Typography>
            </Frame>
            <Frame
              style={{ position: "relative" }}
              center="y"
              size={"auto"}
              initial="before"
              animate={mapControls}
              variants={mapVariants}
            >
              <Typography variant="h5" color="textPrimary" gutterBottom>
                <Emoji style={classes.emoji} symbol="✨" label="sparkle" />
              </Typography>
            </Frame>
          </Stack>
        </Stack>
      </Frame>
    </Box>
  );
}
