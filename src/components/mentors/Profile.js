import React, { useState, useEffect } from 'react';
import { Grid, Container, darken, IconButton, ThemeProvider } from '@material-ui/core';
import { useStaticQuery, graphql, Link } from 'gatsby'
import { makeStyles, withStyles} from '@material-ui/core/styles';
import MentorsCard from './MentorsCard';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import DirectoryCard from '../directory/DirectoryCard';
import Emoji from '../Emoji';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import Button from '@material-ui/core/Button';
import {  } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: "column",
  },
  avatar: {
    width: theme.spacing(25),
    height: theme.spacing(25),
  },
  cardGrid: {
    paddingBottom: theme.spacing(8),
  },
  card: {
    maxWidth: 375,
    margin: theme.spacing(2),
  },
  icon: {
    height: 30,
    width: 30,
  },
  linkedinButton: {
    height: 50,
    width: 50,
    color: '#ffff',
    backgroundColor: '#0072b1',
    boxShadow: theme.shadows[10],
    '&:hover': {
      color: theme.palette.common.black,
      backgroundColor: theme.palette.common.white,
    }
  },
  twitterButton: {
    height: 50,
    width: 50,
    color: '#ffff',
    backgroundColor: '#00acee',
    boxShadow: theme.shadows[10],
    '&:hover': {
      color: theme.palette.common.black,
      backgroundColor: theme.palette.common.white,
    }
  },
}));

export default function Profile() {
  const classes = useStyles();
  const data = {
    "name": "Michelle Ma",
    "description": "APM @ Yahoo. Passionate about all things mental/health & wellness. Co-creator of APM Map",
    "image": "https://storage.cloud.google.com/mentors-pics/mima-profile-pic.jpg?authuser=2&organizationId=819335046878",
    "recommendations": [
      {
        "name": "APM List",
        "id": 4,
        "link": "https://apmlist.com/",
        "type": "Website",
        "cost": "Free",
        "creators": "Ryan Hill (Yahoo APM)",
        "description": "Find APM programs to apply to, and advice on breaking into the field.",
        "stage": "Early",
        "category": "Find APM Programs",
        "tags": "",
        "comments": "--",
        "learnedFrom": "--",
        "image": "https://storage.googleapis.com/apm-map-directory-images/apm-list.png"
      },
      {
        "name": "The College Product Manager Guide",
        "id": 86,
        "link": "https://www.notion.so/The-College-Product-Manager-Guide-f0b7c36363c04cc69cb7d0f1e8dc954d",
        "type": "Notion page",
        "cost": "Free",
        "creators": "Martin Anquetil (Incoming Google APM)",
        "description": "Overview of of why PM",
        "stage": "Early",
        "category": "Understand Why PM",
        "tags": "Build PM skills, Advice from an A/PM",
        "comments": "Loved the portion on relevant skills to PM and how to build them",
        "learnedFrom": "--",
        "image": "https://storage.googleapis.com/apm-map-directory-images/college-pm-guide.png"
      },
      {
        "name": "Subtle Asian PM",
        "id": 76,
        "link": "https://www.facebook.com/groups/SubtlePM/",
        "type": "Facebook Group",
        "cost": "Free",
        "creators": "Various leaders",
        "description": "Incredibly awesome community supporting Asians in PM / aspiring PMs (open to all)",
        "stage": "All",
        "category": "Networking",
        "tags": "Events, Mock Interviews, Networking",
        "comments": "I used the SAPM mock interview calendar a bunch! Super helpful, and I also met a lot of super nice people I kept connected with",
        "learnedFrom": "--",
        "image": "https://storage.googleapis.com/apm-map-directory-images/sapm.jpg"
      }
    ]
  }

  return (
    <Container disableGutters maxWidth={false} className={classes.container}>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <Box
            p={3}
            width={600}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Avatar src={data.image} className={classes.avatar}/>
            <Typography gutterBottom variant="h3">
              {data.name}
            </Typography>
            <Typography variant="subtitle1">
              {data.description} <Emoji symbol="🗺️" label="map"/>
            </Typography>
          </Box>
        </Grid>
        <Box p={2}>
          <Grid container spacing={2} justify="center">
              <Grid item>
                <IconButton href="https://www.linkedin.com/in/michelle-ma-1208/" variant="contained" className={classes.linkedinButton}>
                  <LinkedInIcon className={classes.icons}/>
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton href="https://twitter.com/michellema_97?lang=en" variant="contained" className={classes.twitterButton}>
                  <TwitterIcon className={classes.icons}/>
                </IconButton>
              </Grid>
            </Grid>
        </Box>
        <Box
          p={3}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Grid
            container
            display="flex"
            justify="center"
            spacing={4}
          >
            {data["recommendations"].map((card, index) => (
              <Grid  p={3} item key={index} xs={12} sm={4} className={classes.cardGrid}>
                <DirectoryCard loading={false} data={card}/>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Grid>
    </Container>
  );
}
