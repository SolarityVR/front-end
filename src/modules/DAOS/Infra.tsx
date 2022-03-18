import React from "react";
import Base from "modules/DAOS/Base";
import Contract from "components/Contracts";
import Posts from "modules/Home/Posts";

import { INFRA_CONTRACTS } from "data/daos";

const Home = () => {
  return (
    <Base>
      <div className="flex flex-col gap-2">
        <span className="font-bold">Contracts open with other DAOs</span>
        <div className="flex flex-col gap-2">
          {INFRA_CONTRACTS.map((contract, index) => (
            <Contract key={index} {...contract} />
          ))}

          <div className="flex justify-center py-4 text-xs cursor-pointer text-secondary">
            + See more
          </div>
        </div>
      </div>
    </Base>
  );
};

export default Home;
