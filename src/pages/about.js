import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { ThemeProvider } from '@material-ui/core/styles'

import theme from '../theme'
import Layout from '../components/Layout';
import { Context } from '../../provider';
import Directory from '../components/directory/Directory';
import DirectoryHero from '../components/directory/DirectoryHero';
import Emoji from '../components/Emoji';
import { Typography } from '@material-ui/core';

export default function DirectoryPage() {
  return (
    <Layout>
      <Context.Consumer>
        {context => (
          <Container p={5}>
            <Typography variant="h1">
              Yeahhhh, so this page isn't a thing yet <Emoji symbol="😅" label="map"/>
            </Typography>
          </Container>
        )}
      </Context.Consumer>
    </Layout>
  );
}
