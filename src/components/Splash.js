import React, { useEffect, useState } from "react";
import { Frame, Scroll, useCycle } from "framer";

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
  const apm = Array.from("APM");

  const containerVariants = {
    before: {},
    after: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const letterVariants = {
    before: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 16,
        stiffness: 200,
      },
    },
    after: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 16,
        stiffness: 200,
      },
    },
  };

  return (
    <Box className={classes.box}>
      {false && <Video src={bg} />}
      <Frame
        style={{
          display: "flex",
          justifyContent: "center",
        }}
        center="y"
        width={"100%"}
        variants={containerVariants}
        initial={"before"}
        animate={"after"}
        backgroundColor="rgba(0, 170, 255, 0.5)"
        size={300}
      >
        {apm.map((letter, index) => (
          <Frame
            key={index}
            size={"auto"}
            style={{ position: "relative" }} // Position elements
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
      </Frame>
    </Box>
  );
}
