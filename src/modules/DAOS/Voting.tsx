import React, { useState } from "react";
import Base from "modules/DAOS/Base";

import Posts from "modules/Home/Posts";
import { POSTS } from "data/daos";
import CreateProposal from "components/Modals/CreateProposal";

const Home = () => {

  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  }

  return (
    <Base>
      <div>
        <button className="normal-case rounded-full btn btn-sm btn-secondary" onClick={handleToggle}>
          + New Proposasl
        </button>
      </div>
      <Posts posts={POSTS} />
      <CreateProposal open={open} onClose={handleToggle}/>
    </Base>
  );
};

export default Home;
