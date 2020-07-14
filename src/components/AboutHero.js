import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  heroBox: {
    backgroundColor: theme.palette.background.paper
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
}));

export default function AboutHero() {
  const classes = useStyles();

  return (
    <Box px={15} py={6} className={classes.heroBox}>
      <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
        slogan that says why we're great
      </Typography>
      <Typography variant="h6" align="center" color="textSecondary" paragraph>
        Interested in supporting us? Become a mentor or make a donation!
      </Typography>
    </Box>
  );
}