import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Profile from "../components/mentors/Profile";
import { Context } from "../../provider";

export default function ProfileTemplate({ data }) {
  return (
    <Layout>
      <Context.Consumer>{(context) => <Profile />}</Context.Consumer>
    </Layout>
  );
}
