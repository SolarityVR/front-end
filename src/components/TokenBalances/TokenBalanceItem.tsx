import React, { FC } from "react";
import Image from "next/image";

export interface TokenBalanceItemProps {
  title: string;
  volume: string;
  amount?: string;
  imageUrl: string;
}

const TokenBalanceItem: FC<TokenBalanceItemProps> = ({
  title,
  volume,
  amount,
  imageUrl,
}) => {
  return (
    <div className="flex flex-col items-center px-8 py-4 border select-none border-base-100 rounded-3xl max-w-[158px]">
      <div>
        <Image src={imageUrl} alt={`${title} logo`} height={42} width={42} />
      </div>
      <span className="mt-1 text-sm">{title}</span>
      <span className="mt-3 text-2xl font-bold">
        {volume.split(".")[0]}.
        <span className="text-lg ">{volume.split(".")[1]}</span>
      </span>
      <span className="text-xs text-gray-950">
        {amount ? `${amount}` : "-"}
      </span>
    </div>
  );
};

export default TokenBalanceItem;
