import React from "react";
import { FC } from "react";
import Image from "next/image";
import { TickCircle, Bid } from "components/Icons";
import { GalleryItemLaunchPad } from "modal/Gallery";

const GalleryItem: FC<GalleryItemLaunchPad> = ({
  title,
  date,
  imageUrl,
  type,
  description,
  progress,
  fund,
}) => {
  const splittedDate = date.split("-");
  return (
    <div className="flex flex-col col-span-2 gap-8">
      <div className="flex flex-col group rounded-t-3xl rounded-b-3xl bg-brandblack">
        <div className="flex flex-col justify-center gap-2 p-2 transition-all ease-in ">
          <div className="relative h-[268px] w-full flex justify-center items-center rounded-3xl ">
            <Image
              src={imageUrl}
              alt="nft item"
              layout="fill"
              className="rounded-3xl"
            />
          </div>
        </div>
        <div className="flex flex-col justify-between gap-2 py-4 px-7">
          <span className="text-sm font-bold uppercase">{type}</span>
          <span className="text-2xl font-bold text-secondary">{title}</span>
          <span className="text-xs text-gray-950">{description}</span>
          <div className="flex items-center gap-4">
            <progress
              className="w-full progress progress-secondary"
              value={progress}
              max="100"
            ></progress>
            <div className="flex items-center justify-between gap-2">
              <span className="w-10 ml-2 text-xs text-secondary">END IN</span>
              <div className="flex gap-2 text-xs font-bold">
                <span className="p-[7px] rounded-md bg-base-100">
                  {splittedDate[0]}
                </span>
                <span className="p-[7px] rounded-md bg-base-100">
                  {splittedDate[1]}
                </span>
                <span className="p-[7px] rounded-md bg-base-100">
                  {splittedDate[2]}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between px-4">
        <div className="flex gap-10">
          <div className="flex flex-col">
            <span className="text-sm font-bold uppercase">Fund Raised</span>
            <span className="text-2xl text-secondary">{fund.raised}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold uppercase">Fund Goal</span>
            <span className="text-2xl text-secondary">{fund.goal}</span>
          </div>
        </div>
        <div>
          <button className="rounded-full btn btn-secondary">
            Go to Launchpad
          </button>
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;
