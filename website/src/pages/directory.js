import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import DirectoryGrid from '../components/DirectoryGrid';

export default function Album() {

  return (
    <>
      <CssBaseline />
      <Layout>
        <Hero/>
        <DirectoryGrid/>
      </Layout>
    </>
  );
}