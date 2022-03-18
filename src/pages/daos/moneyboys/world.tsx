import React from "react";
import Layout from "components/Layout";
import World from "modules/DAOS/World";
import Hero from "modules/DAOS/Hero";

const Index = () => {
  return (
    <Layout
      heroContent={<Hero />}
    >
      <World/>
    </Layout>
  );
};

export default Index;
