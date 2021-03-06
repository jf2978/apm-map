import React from "react";
import Layout from "../components/layout/Layout";
import { Context } from "../components/layout/Provider";
import Directory from "../components/directory/Directory";
import Hero from "../components/util/Hero";
import Emoji from "../components/util/Emoji";
import Splash from "../components/splash/Splash";
import DirectoryPreview from "../components/splash/DirectoryPreview";
import BuyMeACoffee from "../components/layout/BuyMeACoffee";

export default function IndexPage() {
  return (
    <Layout>
      <Context.Consumer>
        {(context) => (
          <>
            <Splash
              title="APM Map"
              subtitle="Discover resources to help you navigate your journey into product management"
            />
            <DirectoryPreview context={context} />
          </>
        )}
      </Context.Consumer>
    </Layout>
  );
}
