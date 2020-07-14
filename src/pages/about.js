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
import AboutHero from '../components/AboutHero';

export default function About() {
  return (
    <Layout>
      <Context.Consumer>
        {context => (
          <>
            <AboutHero/>
          </>
        )}
      </Context.Consumer>
    </Layout>
  );
}
