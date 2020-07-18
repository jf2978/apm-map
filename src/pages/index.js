import React from "react";

import theme from "../theme";
import Layout from "../components/Layout";
import { Context } from "../../provider";
import Directory from "../components/directory/Directory";
import Hero from "../components/Hero";
import Emoji from "../components/Emoji";

export default function Index() {
  return (
    <Layout>
      <Context.Consumer>
        {(context) => (
          <>
            <Hero
              id="directory-hero"
              title="APM Map"
              subtitle="Discover resources to help you navigate your journey into product management"
              emoji={<Emoji symbol="🗺️" label="map" />}
            />
            <Directory />
          </>
        )}
      </Context.Consumer>
    </Layout>
  );
}
