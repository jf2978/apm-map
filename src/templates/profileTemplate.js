import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

export default function ProfileTemplate({ data }){
  return (
    <Layout>
      <section>
        <div>
          <h1>{frontmatter.title}</h1>
          <span>{frontmatter.date}</span>
        </div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </section>
    </Layout>
  );
};
