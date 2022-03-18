import React from "react";
import Base from "modules/DAOS/Base";
import TokenBalance from "components/TokenBalances";
import Transfer from "components/Tables/Transfer1";

import { TOKEN_BALANCES, TRANSFER_TABLE_PROPS } from "data/profile";

const Home = () => {
  return (
    <div className="flex flex-col gap-10">
      <TokenBalance {...TOKEN_BALANCES} />
      <Transfer {...TRANSFER_TABLE_PROPS} />
    </div>
  );
};

export default Home;
