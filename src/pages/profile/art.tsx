import React from "react";
import Layout from 'components/Layout'
import Hero from 'modules/Profile/Hero'
import Art from 'modules/Profile/Art'
import RightSidebar from "modules/Profile/Sidebar/Home";

const ProfileIndex = () => {
  return (
    <Layout
      heroContent={<Hero />}
    >
        <Art/>
    </Layout>
  );
};

export default ProfileIndex;
