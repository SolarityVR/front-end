import React from "react";
import Layout from 'components/Layout'
import Hero from 'modules/Profile/Hero'
import PayOut from 'modules/Profile/Payout'
import RightSidebar from "modules/Profile/Sidebar/Home";

const ProfileIndex = () => {
  return (
    <Layout
      heroContent={<Hero />}
    >
        <PayOut/>
    </Layout>
  );
};

export default ProfileIndex;
