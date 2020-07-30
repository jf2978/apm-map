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
  sparkle: {
    width: "20px",
    height: "20px",
  },
}));

export default function Splash({ title, subtitle }) {
  const classes = useStyles();

  const containerVariants = {
    before: {},
    after: {
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const springTransition = {
    type: "spring",
    damping: 16,
    stiffness: 200,
  };

  const letterVariants = {
    before: {
      opacity: 0,
      y: 25,
      right: 50,
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
        <Stack direction="horizontal">
          {["A", "P", "M"].map((letter, index) => (
            <Frame
              custom={index}
              size="auto"
              style={{ position: "relative" }}
              variants={letterVariants}
            >
              <Typography
                className={classes.letter}
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
        </Stack>
      </Frame>
    </Box>
  );
}
