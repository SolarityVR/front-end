import React, { FC, useState } from "react";
import CreateContract from "components/Modals/CreateContract";

import TokenBalanceItem, {
  TokenBalanceItemProps,
} from "components/TokenBalances/TokenBalanceItem";

export interface TokenBalancesProps {
  title: string;
  tokens: TokenBalanceItemProps[];
}

const TokenBalance: FC<TokenBalancesProps> = ({ title, tokens }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toogleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="flex flex-col gap-8 py-8 bg-brandblack">
        <div className="flex items-center justify-between px-8">
          <span className="text-lg font-bold">{title}</span>
          <button className="rounded-full btn btn-secondary" onClick={toogleModal}>
            Create Contract
          </button>
        </div>
        <div className="flex gap-4 pb-5 pl-8 overflow-x-auto scrollbar-thin scrollbar-thumb-black scrollbar-track-white">
          {tokens.map((item, index) => (
            <TokenBalanceItem key={index} {...item} />
          ))}
        </div>
      </div>
      <CreateContract open={isOpen} onClose={toogleModal} />
    </>
  );
};

export default TokenBalance;
