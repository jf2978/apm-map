import React, { useState, useEffect } from 'react';
import { Grid, Container } from '@material-ui/core';
import { useStaticQuery, graphql } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles';
import MentorsCard from './MentorsCard';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
  box: {
  },
  avatar: {
    width: theme.spacing(25),
    height: theme.spacing(25),
  },
}));

export default function Profile({ data }) {
  const classes = useStyles();

  return (
    <Container bgcolor="lightgreen" disableGutters maxWidth={false} className={classes.container}>
      <Box
        p={3}
        maxWidth="lg"
        display="flex"
        flexDirection="column"
        alignItems="center"
        bgcolor="lightblue"
      >
        <Avatar src="https://source.unsplash.com/random/250x250" className={classes.avatar}/>
        <Typography gutterBottom variant="h3">
          Name
        </Typography>
        <Typography variant="subtitle1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        </Typography>
      </Box>
    </Container>
  );
}
