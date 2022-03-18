import React from "react";
import Image from "next/image";
import Base from "components/Widget/Base";
import { HotWidget } from "modal/widgets";

const Hot = ({ data }: { data: HotWidget[] }) => {
  const footer = (
    <div className="flex items-center justify-center py-4 bg-black cursor-pointer rounded-b-3xl ">
      <div className="text-xs text-secondary">+ See more</div>
    </div>
  );
  return (
    <Base title="Your Activity" subtitle="Recently Minted" footer={footer}>
      <div className="divide-y divide-borderwidget">
        <div className="flex justify-between px-4 py-3">
          <div className="flex items-center">
            <Image
              src={`https://i.pravatar.cc/48?id=1`}
              height={48}
              width={48}
              className="border border-white rounded-[48px]"
              alt="avatar"
            />
            <div className="flex flex-col ml-4">
              <div className="font-bold text-[15px]">
                <span className="text-gray-950">32 Solana Money Boys on</span>{" "}
                Magic <br />
                Eden
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between px-4 py-3">
          <div className="flex items-center">
            <Image
              src={`https://i.pravatar.cc/48?id=2`}
              height={48}
              width={48}
              className="border border-white rounded-[48px]"
              alt="avatar"
            />
            <div className="flex flex-col ml-4">
              <div className="font-bold text-[15px]">
                <span className="text-gray-950">32 Solana Money Boys on</span>{" "}
                Magic <br />
                Eden
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between px-6 py-5">
          <div className="text-xs text-gray-950">Recently Aped in</div>
        </div>
        <div className="flex justify-between px-4 py-3">
          <div className="flex items-center">
            <Image
              src={`https://i.pravatar.cc/48?id=3`}
              height={48}
              width={48}
              className="border border-white rounded-[48px]"
              alt="avatar"
            />
            <div className="flex flex-col ml-4">
              <div className="font-bold text-[15px]">
                <span className="text-gray-950">Longed 144 SQL on</span> Mango{" "}
                <br /> Market
              </div>
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
};

export default Hot;
