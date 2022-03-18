import React from "react";
import Layout from "components/Layout";
import MarketPlace from "modules/Marketplace";
import Hero from "components/Hero";

import RightSidebar from "modules/Marketplace/RightSidebar";

import { HERO_DATA } from "data/marketplace";

const Index = () => {
  return (
    <Layout
      rightSidebar={<RightSidebar />}
      heroContent={<Hero {...HERO_DATA} />}
    >
      <MarketPlace />
    </Layout>
  );
};

export default Index;
