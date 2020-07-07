import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Emoji from '../components/Emoji';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

export default function Hero() {
  const classes = useStyles();

  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          APM Map <Emoji symbol="🗺️" label="map"/>
        </Typography>
        <Typography variant="h6" align="center" color="textSecondary" paragraph>
          Discover resources to help you navigate your journey into product management
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button variant="contained" color="primary">
                Subscribe
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary">
                Contact Us
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}