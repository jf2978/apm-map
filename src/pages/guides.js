import React from "react";

import Layout from "../components/Layout";
import { Context } from "../../provider";
import MentorsGrid from "../components/mentors/MentorsGrid";
import BuyMeACoffee from "../components/BuyMeACoffee";

export default function Guides() {
  return (
    <Layout>
      <Context.Consumer>
        {(context) => (
          <>
            <MentorsGrid />
            <BuyMeACoffee />
          </>
        )}
      </Context.Consumer>
    </Layout>
  );
}
