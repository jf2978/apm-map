import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { ThemeProvider } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import theme from '../theme'
import Layout from '../components/Layout';
import { Context } from '../../provider';
import Directory from '../components/directory/Directory';
import Emoji from '../components/Emoji';
import Hero from '../components/Hero';
import Blurb from '../components/Blurb';

const useStyles = makeStyles((theme) => ({
  bio: {
    [theme.breakpoints.up("xs")]: {
      padding: theme.spacing(4,2,4),
      margin: theme.spacing(2,2,2)
    },
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(4,2,4),
      margin: theme.spacing(8,8,8)
    },
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <Layout>
      <Context.Consumer>
        {context => (
          <>
            <Blurb
              title="About APM Map"
              description="APM Map is your one-stop destination for navigating your A/PM recruiting journey. Whether you're looking to better understand the role of a PM or to refine your System Design interviewing skills for a technical round, we've curated resources across the entire A/PM recruiting timeline to help you accomplish just that. "
              emoji={<Emoji symbol="🗺️" label="map"/>}
            />
            <Box
              height={500}
              bgcolor="lightblue"
              display="flex"
              justifyContent="space-between"
            />
          </>
        )}
      </Context.Consumer>
    </Layout>
  );
}
