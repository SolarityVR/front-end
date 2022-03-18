import React from "react";
import Layout from "components/Layout";
import Voting from "modules/DAOS/Voting";
import Hero from "modules/DAOS/Hero";
import RightSidebar from "modules/DAOS/Sidebar/Voting";

const Index = () => {
  return (
    <Layout
      rightSidebar={<RightSidebar />}
      heroContent={<Hero />}
    >
      <Voting />
    </Layout>
  );
};

export default Index;
