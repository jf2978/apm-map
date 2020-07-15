import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Fade from '@material-ui/core/Fade';
import { getThemeProps } from '@material-ui/styles';
import { Grow } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundColor: theme.palette.background.paper,
    [theme.breakpoints.up("xs")]: {
      padding: theme.spacing(4,2,4)
    },
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(4,2,4)
    },
  },
}));

export default function Hero({ id, title, subtitle, emoji }) {
  const classes = useStyles();

  return (
    <Box id={id} className={classes.hero}>
      <Grow
        in={true}
        timeout={1600}
      >
        <div>
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            {title} {emoji}
          </Typography>
          <Typography variant="h6" align="center" color="textSecondary" paragraph>
            {subtitle}
          </Typography>
        </div>
      </Grow>
    </Box>
  );
}