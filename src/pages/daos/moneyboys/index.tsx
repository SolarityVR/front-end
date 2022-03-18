import React from "react";
import Layout from "components/Layout";
import Home from "modules/DAOS/Home";
import RightSidebar from "modules/DAOS/Sidebar/Home";
import Hero from "modules/DAOS/Hero";

const Index = () => {
  return (
    <Layout rightSidebar={<RightSidebar />} heroContent={<Hero />}>
      <Home />
    </Layout>
  );
};

export default Index;
