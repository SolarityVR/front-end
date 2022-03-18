import React from "react";
import Base from "modules/DAOS/Base";
import TokenBalance from "components/TokenBalances";
import Transfer from "components/Tables/Transfer";

import { TOKEN_BALANCES, TRANSFER_TABLE_PROPS } from "data/daos";

const Home = () => {
  return (
    <Base>
      <TokenBalance {...TOKEN_BALANCES} />
      <Transfer {...TRANSFER_TABLE_PROPS} />
    </Base>
  );
};

export default Home;
