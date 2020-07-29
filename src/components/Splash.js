import React, { useEffect, useState } from "react";
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

export default function Splash({ title, subtitle, emoji }) {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <Video src={bg} />
      <Grow in={true} timeout={1600}>
        <Box mt="20rem">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            {title} {emoji}
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="textSecondary"
            paragraph
          >
            {subtitle}
          </Typography>
        </Box>
      </Grow>
    </Box>
  );
}
