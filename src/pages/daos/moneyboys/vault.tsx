import React from "react";
import Layout from "components/Layout";
import Vault from "modules/DAOS/Vault";
import Hero from "modules/DAOS/Hero";

const Index = () => {
  return (
    <Layout heroContent={<Hero />}>
      <Vault />
    </Layout>
  );
};

export default Index;
