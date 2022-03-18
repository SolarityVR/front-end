import React, { useEffect } from "react";
import Layout from "components/Layout";
import Experience from "modules/Experience";

// import socket from '../../utils/socket-client';

const Index = () => {

  useEffect(() => {
    // document.socket = socket;
  });

  return (
    <Layout>
      <Experience />
    </Layout>
  );
};

export default Index;
