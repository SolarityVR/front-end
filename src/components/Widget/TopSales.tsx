import React from "react";
import Image from "next/image";
import Base from "components/Widget/Base";

const TopSales = () => {
  return (
    <Base title="Top Sales 1(D)" headerRight="View More">
      <div className="divide-y divide-borderwidget">
        <div className="flex items-center gap-6 px-5 py-4">
          <span className="text-[19px] text-[#6163FF] font-bold">1</span>
          <div className="flex items-center">
            <Image
              src="/images/placeholder/widgets/topsales/one.png"
              height={76}
              width={100}
              className="border border-white "
              alt="avatar"
            />
            <div className="flex flex-col justify-between ml-4">
              <div className="text-xs font-bold font-white">DODO Minions</div>
              <div className="mt-5 ">
                <div className="text-xs text-gray-950">Price</div>
                <div className="flex items-center gap-2 mt-1">
                  <div className="h-[16px] w-[16px]">
                    <Image
                      src="/images/icons/sol.png"
                      alt="sol-icon"
                      height={32}
                      width={32}
                    />
                  </div>
                  <span className="mt-2 text-xs font-bold text-white">
                    10 SOL
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-6 px-5 py-4">
          <span className="text-[19px] text-[#EC903C] font-bold">2</span>
          <div className="flex items-center">
            <Image
              src="/images/placeholder/widgets/topsales/two.png"
              height={76}
              width={100}
              className="border border-white "
              alt="avatar"
            />
            <div className="flex flex-col justify-between ml-4">
              <div className="text-xs font-bold font-white">DODO Minions</div>
              <div className="mt-5 ">
                <div className="text-xs text-gray-950">Price</div>
                <div className="flex items-center gap-2 mt-1">
                  <div className="h-[16px] w-[16px]">
                    <Image
                      src="/images/icons/sol.png"
                      alt="sol-icon"
                      height={32}
                      width={32}
                    />
                  </div>
                  <span className="mt-2 text-xs font-bold text-white">
                    10 SOL
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-6 px-5 py-4">
          <span className="text-[19px] text-[##F94485] font-bold">3</span>
          <div className="flex items-center">
            <Image
              src="/images/placeholder/widgets/topsales/three.png"
              height={76}
              width={100}
              className="border border-white "
              alt="avatar"
            />
            <div className="flex flex-col justify-between ml-4">
              <div className="text-xs font-bold font-white">DODO Minions</div>
              <div className="mt-5 ">
                <div className="text-xs text-gray-950">Price</div>
                <div className="flex items-center gap-2 mt-1">
                  <div className="h-[16px] w-[16px]">
                    <Image
                      src="/images/icons/sol.png"
                      alt="sol-icon"
                      height={32}
                      width={32}
                    />
                  </div>
                  <span className="mt-2 text-xs font-bold text-white">
                    10 SOL
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
};

export default TopSales;
