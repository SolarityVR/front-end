import React from "react";
import Layout from "components/Layout";
import MarketPlace from "modules/DAOS/Marketplacee";
import Hero from "modules/DAOS/Hero";
import RightSidebar from "modules/DAOS/Sidebar/MarketPlace";

const Index = () => {
  return (
    <Layout
      heroContent={<Hero />}
      rightSidebar={<RightSidebar />}
    >
      <MarketPlace />
    </Layout>
  );
};

export default Index;
