import React from "react";
import { useStaticQuery } from "gatsby";
import Layout from "../components/layout/Layout";
import { Context } from "../components/layout/Provider";
import Directory from "../components/directory/Directory";
import Hero from "../components/util/Hero";
import Emoji from "../components/util/Emoji";
import Splash from "../components/splash/Splash";

export default function Index() {
  return (
    <Layout>
      <Context.Consumer>
        {(context) => (
          <>
            <Splash
              title="APM Map"
              subtitle="Discover resources to help you navigate your journey into product management"
            />
            <Hero
              id="directory-hero"
              title="The Journey"
              subtitle="Explore our directory of resources that'll help you get the lay of the land"
              emoji={<Emoji symbol="⛰️" label="mountain" />}
            />
            <Directory />
          </>
        )}
      </Context.Consumer>
    </Layout>
  );
}
