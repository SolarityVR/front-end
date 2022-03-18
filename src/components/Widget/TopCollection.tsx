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
              src="/images/placeholder/widgets/topcollection/one.png"
              height={76}
              width={100}
              className="border border-white "
              alt="avatar"
            />
            <div className="flex flex-col justify-between ml-4">
              <div className="text-xs font-bold font-white">AQUANEE</div>
              <div className="mt-5 ">
                <div className="text-xs text-gray-950">Volume</div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="mt-2 text-xs font-bold text-white">
                    610,437.68 USD
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
              src="/images/placeholder/widgets/topcollection/two.png"
              height={76}
              width={100}
              className="border border-white "
              alt="avatar"
            />
            <div className="flex flex-col justify-between ml-4">
              <div className="text-xs font-bold font-white">
                X-Metaverse - Box
              </div>
              <div className="mt-5 ">
                <div className="text-xs text-gray-950">Volume</div>
                <div className="flex items-center gap-8 mt-1 ">
                  <span className="mt-2 text-xs font-bold text-white ">
                    610,437.68 USD
                  </span>
                  <span className="mt-2 text-xs text-[#3BA946]">
                    +0.09%
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
              src="/images/placeholder/widgets/topcollection/three.png"
              height={76}
              width={100}
              className="border border-white "
              alt="avatar"
            />
            <div className="flex flex-col justify-between ml-4">
              <div className="text-xs font-bold font-white">DODO Minions</div>
              <div className="mt-5 ">
                <div className="text-xs text-gray-950">Volume</div>
                <div className="flex items-center gap-8 mt-1">
                  <span className="mt-2 text-xs font-bold text-white">
                    610,437.68 USD
                  </span>{" "}
                  <span className="mt-2 text-xs text-[#3BA946]">
                    +15.09%
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
