import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  blurb: {
    padding: theme.spacing(8, 72, 8),
  },
}));

export default function Blurb({ title, description, emoji }) {
  const classes = useStyles();

  return (
    <Box className={classes.blurb}>
      <Typography variant="h5" align="center" color="textPrimary" gutterBottom>
        {title} {emoji}
      </Typography>
      <Typography variant="subtitle1" align="justify" color="textSecondary" paragraph>
        {description}
      </Typography>
    </Box>
  );
}