import React from "react";
import Layout from "components/Layout";
import Infra from "modules/DAOS/Infra";
import Hero from "modules/DAOS/Hero";
import RightSidebar from "modules/DAOS/Sidebar/Infra";

const Index = () => {
  return (
    <Layout rightSidebar={<RightSidebar />} heroContent={<Hero />}>
      <Infra />
    </Layout>
  );
};

export default Index;
