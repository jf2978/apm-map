import React from "react";
import Layout from "../components/Layout";
import { Context } from "../../provider";
import Directory from "../components/directory/Directory";
import Hero from "../components/Hero";
import Emoji from "../components/Emoji";
import Splash from "../components/Splash";

export default function Index() {
  return (
    <Layout>
      <Context.Consumer>
        {(context) => (
          <>
            <Splash
              title="APM Map"
              subtitle="Discover resources to help you navigate your journey into product management"
              emoji={<Emoji symbol="🗺️" label="map" />}
            />
            <Hero
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
