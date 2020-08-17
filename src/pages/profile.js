import React from "react";

import Layout from "../components/layout/Layout";
import Profile from "../components/mentors/Profile";
import { Context } from "../components/layout/Provider";

export default function ProfilePage({ data }) {
  return (
    <Layout>
      <Context.Consumer>{(context) => <Profile />}</Context.Consumer>
    </Layout>
  );
}
