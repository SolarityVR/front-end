import React from "react";
import { FC } from "react";
import Image from "next/image";
import classNames from "classnames";
import { GalleryItemLaunchPad } from "modal/Gallery";

const GalleryItem: FC<GalleryItemLaunchPad> = ({
  title,
  date,
  imageUrl,
  type,
  description,
  progress,
  fund,
  creator,
  funded,
}) => {
  console.log({ creator });
  const splittedDate = date.split("-");
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col group rounded-t-3xl rounded-b-3xl bg-brandblack">
        <div className="flex flex-col justify-center gap-2 p-2 transition-all ease-in ">
          <div className="relative h-[153px] w-full flex justify-center items-center rounded-3xl ">
            <Image
              src={imageUrl}
              alt="nft item"
              layout="fill"
              className="rounded-3xl"
            />
          </div>
        </div>
        <div className="flex flex-col justify-between gap-2 px-3 py-4">
          <span className="text-xs font-bold uppercase">{type}</span>
          <span className="text-lg font-bold truncate text-secondary">
            {title}
          </span>
          <span className="text-xs text-gray-950">{description}</span>
          <div>
            <progress
              className="w-full progress progress-secondary"
              value={progress}
              max="100"
            ></progress>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <span className="text-sm font-bold uppercase">Fund Raised</span>
              <span className="text-xl text-secondary">{fund.raised}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold uppercase">Fund Goal</span>
              <span className="text-xl text-secondary">{fund.goal}</span>
            </div>
          </div>
          <div className="flex justify-between gap-4 flex-start">
            <div className="flex gap-2">
              <div className="flex flex-col ">
                {creator?.imageUrl && (
                  <div>

                  <Image
                    src={creator.imageUrl}
                    alt="nft item"
                    height={32}
                    width={32}
                    className="rounded-3xl"
                  />
                  </div>
                )}
                <span className="text-sm font-bold uppercase">
                  {creator?.name}
                </span>
                <span className="badge">{creator?.address}</span>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-2">
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
          <button
            className={classNames(
              "mt-2 btn relative",
              funded ? "bg-base-100" : "btn-secondary"
            )}
          >
            {funded ? "Funded" : "Fund"}
            {funded && (
              <svg
                width="11"
                height="8"
                viewBox="0 0 11 8"
                fill="none"
                className="absolute right-3"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 3.83L3.83 6.66L9.5 1"
                  stroke="#6163FF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;
