import React, { FC } from "react";
import { VR } from "components/Icons";

import Image from "next/image";

import DAOUniverseImage from "assets/images/dao-universe.png";

const HeroWorld = () => {
  return (
    <div className="relative flex gap-20 p-8 bg-brandblack">
      <button className="absolute gap-3 text-lg font-bold btn rounded-3xl top-4 right-10 bg-transparentwhite w-[100px]">
        <VR />
        VR
      </button>
      <div className="flex flex-col gap-8">
        <span className="text-lg font-bold">Money Boy DAOverse</span>

        <div className="flex flex-col border border-base-100 rounded-3xl">
          <div className="p-4 bg-secondary rounded-t-3xl">
            <span className="font-[19px] font-bold">Info</span>
          </div>
          <div className="px-8 py-4 ">
            <div className="flex justify-between gap-16 ">
              <span className="font-semibold font-[15px]">To Parcels:</span>
              <span className="font-[15px]">4444</span>
            </div>
            <div className="flex justify-between gap-16 ">
              <span className="font-semibold font-[15px]">Empty ones:</span>
              <span className="font-[15px]">1000</span>
            </div>
            <div className="flex justify-between gap-16 ">
              <span className="font-semibold font-[15px]">To stake:</span>
              <span className="font-[15px] max-w-[240px]">
                134 (mettere magari rewards, e chiarire bene come funziona)
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Image src={DAOUniverseImage} alt="dao universe" placeholder="blur" />
      </div>
    </div>
  );
};

export default HeroWorld;
