import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { ThemeProvider } from '@material-ui/core/styles'

import theme from '../theme'
import Layout from '../components/Layout';
import { Context } from '../../provider';
import Directory from '../components/directory/Directory';
import Emoji from '../components/Emoji';
import { Typography } from '@material-ui/core';
import Hero from '../components/Hero';

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
          </>
        )}
      </Context.Consumer>
    </Layout>
  );
}
