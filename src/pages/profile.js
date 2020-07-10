import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Profile from '../components/mentors/Profile';

export default function ProfileTemplate({ data }){
  return (
    <Layout>
      <Profile/>
    </Layout>
  );
};
