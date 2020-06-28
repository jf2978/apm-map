import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { CardActionArea, Container } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    flexGrow: 1,
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  cardActionArea: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  labels: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    padding: theme.spacing(1),
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

export default function DirectoryCard({ data }) {
  const classes = useStyles();
  const [raised, setRaised] = useState(false);
  const toggleRaised = () => {
    setRaised(!raised)
  }

  return (
    <Card className={classes.card} onMouseOver={toggleRaised} onMouseOut={toggleRaised} raised={raised}>
      <CardActionArea href={data.node.link}  className={classes.cardActionArea}>
        <CardMedia
          className={classes.cardMedia}
          image={data.node.image}
          title={data.node.name}
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {data.node.name}
          </Typography>
          <Typography variant="subtitle1">
            {data.node.description}
          </Typography>
        </CardContent>
        <Box className={classes.labels}>
          <Chip size="small" label="Basic" variant="outlined" />
          <Chip size="small" label="Basic" />
          <Chip size="small" label="Basic" />
          <Chip size="small" label="Basic" />
        </Box>
      </CardActionArea>
    </Card>
  );
}