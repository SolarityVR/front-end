import React from "react";
import Base from "modules/DAOS/Base";
import MembersList from "components/MembersList";

import { Members } from 'data/daos'

const Home = () => {
  return (
    <Base>
      <div className="flex flex-col gap-8 mb-20">
      <MembersList {...Members[0]} />
      <MembersList {...Members[1]} />
      <MembersList {...Members[2]} />
      </div>
    </Base>
  );
};

export default Home;
