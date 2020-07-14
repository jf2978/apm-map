import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
}));

export default function Hero({ id, title, subtitle, emoji }) {
  const classes = useStyles();

  return (
    <Box id={id} className={classes.hero}>
      <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
        {title} {emoji}
      </Typography>
      <Typography variant="h6" align="center" color="textSecondary" paragraph>
        {subtitle}
      </Typography>
    </Box>
  );
}