import React from "react";
import { PROFILE_POSTS } from "data/profile";

import Posts from "modules/Home/Posts";
const Home = () => {
  return (
    <div>
      <Posts posts={PROFILE_POSTS} />
    </div>
  );
};

export default Home;
