import React from "react";
import Layout from "components/Layout";
import Home from "modules/Home";


import RightSidebar from "modules/Home/RightSidebar";


const Index = () => {
  return (
    <Layout
      rightSidebar={<RightSidebar />}
    >
      <Home />
    </Layout>
  );
};

export default Index;
