import React, { FC } from "react";
import Image from "next/image";
import Base from "components/Modals/Base";

const SwapCoin: FC<any> = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  return (
    <Base open={open} onClose={onClose} title="Swap Coin">
      <div className="flex flex-col gap-8 mt-8">
        <div className="flex justify-between py-4 px-7 bg-primary rounded-xl">
          <div className="flex flex-col gap-2">
            <span className="text-md text-gray-950">From</span>
            <span className="text-4xl font-bold">0</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-md text-gray-950">Balance</span>
            <div className="flex items-center gap-4">
              <Image
                src="/images/icons/tokens/eth.png"
                alt={`eth logo`}
                height={42}
                width={42}
              />
              <span className="text-xl">ETH</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4">
          <svg
            width={32}
            height={32}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx={16} cy={16} r={16} fill="#151719" />
            <path
              d="m14.007 21.667-3.347-3.34M14.007 10.333v11.334M17.993 10.333l3.347 3.34M17.993 21.667V10.333"
              stroke="#fff"
              strokeWidth={1.5}
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className=" text-gray-950">0 ETH = 0 ANJ</span>
        </div>
        <div className="flex justify-between py-4 px-7 bg-primary rounded-xl">
          <div className="flex flex-col gap-2">
            <span className="text-md text-gray-950">To ( Estimate )</span>
            <span className="text-4xl font-bold">0</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-md text-gray-950">Balance</span>
            <div className="flex items-center gap-4">
              <Image
                src="/images/icons/tokens/anj.png"
                alt={`eth logo`}
                height={42}
                width={42}
              />
              <span className="text-xl">ANJ</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <button className="rounded-full btn btn-sm btn-secondary">
            Connect Wallet
          </button>
        </div>

        <div className="flex flex-col gap-4 p-10 -mx-10 -mb-10 bg-base-100">
          <div className="flex justify-between px-8">
            <span className="text-xs text-gray-950">Amount Received</span>
            <span className="text-xs ">$0</span>
          </div>
          <div className="flex justify-between px-8">
            <span className="text-xs text-gray-950">Worst Price</span>
            <span className="text-xs ">$33.8</span>
          </div>
        </div>
      </div>
    </Base>
  );
};

export default SwapCoin;
