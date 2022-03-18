import React from "react";
import Base from "modules/DAOS/Base";
import Posts from "modules/Home/Posts";

import { HOME_POSTS } from "data/daos";

const Home = () => {
  return (
    <Base>
        <Posts posts={HOME_POSTS} />
    </Base>
  );
};

export default Home;
