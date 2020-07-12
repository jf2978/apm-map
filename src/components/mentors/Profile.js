import React, { useState, useEffect } from 'react';
import { Grid, Container } from '@material-ui/core';
import { useStaticQuery, graphql } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles';
import MentorsCard from './MentorsCard';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import DirectoryCard from '../directory/DirectoryCard';

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

export default function Profile() {
  const classes = useStyles();
  const data = {
    "name": "Name",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate ut pharetra sit amet.",
    "directoryCard": {
      "name": "What I learnt after bombing my Google APM Interview",
      "link": "https://medium.com/@nikitamallya/what-i-learnt-after-bombing-my-google-apm-interview-67c8d6944ade",
      "type": "Medium Article",
      "cost": "Free",
      "creators": "Nikita Mallya",
      "description": "Overview of Nikita's Google APM Intern process",
      "stage": "Mid",
      "category": "Interview Prep",
      "tags": "Advice from an A/PM, Google APM",
      "comments": "Great insights on the intern interview process & love the insights on failure",
      "learnedFrom": "",
      "image": "https://storage.googleapis.com/apm-map-directory-images/bombing-google-apm.png"
    }
  }

  return (
    <Container bgcolor="lightgreen" disableGutters maxWidth={false} className={classes.container}>
      <Box
        p={3}
        width={500}
        display="flex"
        flexDirection="column"
        alignItems="center"
        bgcolor="lightblue"
      >
        <Avatar src="https://source.unsplash.com/random/250x250" className={classes.avatar}/>
        <Typography gutterBottom variant="h3">
          {data.name}
        </Typography>
        <Typography variant="subtitle1">
          {data.description}
        </Typography>
      </Box>
      <Box>
        <DirectoryCard loading={false} data={data["directoryCard"]}/>
      </Box>
    </Container>
  );
}
