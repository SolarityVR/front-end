import React from "react";
import Layout from "components/Layout";
import Members from "modules/DAOS/Members";
import Hero from "modules/DAOS/Hero";
import RightSidebar from "modules/DAOS/Sidebar/Voting";

const Index = () => {
  return (
    <Layout heroContent={<Hero />} rightSidebar={<RightSidebar />}>
      <Members />
    </Layout>
  );
};

export default Index;
