import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles'
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import theme from '../theme'
import Directory from '../components/Directory';
import { Typography } from '@material-ui/core';
import MentorsBoard from '../components/MentorsBoard'


export default function Mentors() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <MentorsBoard/>
      </Layout>
    </ThemeProvider>
  );
}
