import React from "react";
import Layout from 'components/Layout'
import Hero from 'modules/Profile/Hero'
import Home from 'modules/Profile/Home'
import RightSidebar from "modules/Profile/Sidebar/Home";

const ProfileIndex = () => {
  return (
    <Layout
      rightSidebar={<RightSidebar />}
      heroContent={<Hero />}
    >
        <Home/>
    </Layout>
  );
};

export default ProfileIndex;
