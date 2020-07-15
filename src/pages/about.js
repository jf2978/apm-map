import React from 'react';
import Img from "gatsby-image"
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { ThemeProvider } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import theme from '../theme'
import Layout from '../components/Layout';
import { Context } from '../../provider';
import Directory from '../components/directory/Directory';
import Emoji from '../components/Emoji';
import Hero from '../components/Hero';
import Blurb from '../components/Blurb';

export default function About() {
  return (
    <Layout>
      <Context.Consumer>
        {context => (
          <>
            <Hero
              id="about-hero"
              title="slogan that says why we're great"
              subtitle="Interested in supporting us? Become a mentor or make a donation!"
            />
            <Blurb
              title="About APM Map"
              description="APM Map is your one-stop destination for navigating your A/PM recruiting journey. Whether you're looking to better understand the role of a PM or to refine your System Design interviewing skills for a technical round, we've curated resources across the entire A/PM recruiting timeline to help you accomplish just that. "
              emoji={<Emoji symbol="🗺️" label="map"/>}
            />
            <Box height={500} bgcolor="lightblue">
              <Container>
                yooo
              </Container>
            </Box>
            <Box height={500} bgcolor="lightgreen">

            </Box>
          </>
        )}
      </Context.Consumer>
    </Layout>
  );
}
