import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";

import Layout from "../components/Layout";
import { Context } from "../../provider";
import theme from "../theme";
import MentorsGrid from "../components/mentors/MentorsGrid";

export default function Mentors() {
  return (
    <Layout>
      <Context.Consumer>{(context) => <MentorsGrid />}</Context.Consumer>
    </Layout>
  );
}
