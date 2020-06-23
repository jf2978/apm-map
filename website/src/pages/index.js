import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles'

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import DirectoryGrid from '../components/DirectoryGrid';
import theme from '../themes/paperbase'

export default function Album() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Hero/>
        <DirectoryGrid/>
      </Layout>
    </ThemeProvider>
  );
}