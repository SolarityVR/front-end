import React from "react";
import { FC } from "react";
import Image from "next/image";
import { TickCircle, Bid } from "components/Icons";
import { GalleryItemLand } from "modal/Gallery";

const GalleryItem: FC<GalleryItemLand> = ({
  title,
  date,
  imageUrl,
  likes,
  invites,
}) => {
  return (
    <div className="flex flex-col group rounded-t-xl rounded-b-xl bg-brandblack">
      <div className="flex flex-col justify-center gap-2 p-2 transition-all ease-in ">
        <div className="relative h-[200px] w-full flex justify-center items-center rounded-xl ">
          <Image
            src={imageUrl}
            alt="nft item"
            layout="fill"
            className="rounded-xl"
          />
        </div>
      </div>
      <div className="flex justify-between py-4 px-7">
        <div className="flex flex-col">
          <span className="text-xs font-bold">{title}</span>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-[10px] text-secondary">{date}</span>
            <div className="mb-1">
              <TickCircle />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs text-gray-950">Likes</span>
          <span className="mt-2 text-xs text-white">{likes}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-xs text-gray-950">People</span>
          <span className="mt-2 text-xs text-white">{invites} invites</span>
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;
