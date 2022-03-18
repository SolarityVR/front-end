import React from "react";
import Image from "next/image";
import { Login } from "components/Icons";
import { RoomType } from "modal/experience";

const index = ({
  data: { title, description, imageUrl, avatars },
}: {
  data: RoomType;
}) => {
  return (
    <div className="flex flex-col group mx-2 my-2 ">
      <div className="flex flex-col justify-center gap-2 p-2 transition-all ease-in rounded-t-3xl rounded-b-3xl group-hover:rounded-b-none bg-brandblack">
        <div className="relative h-[133px] w-full flex justify-center items-center ">
          <Image
            src={imageUrl}
            alt="nft item"
            height={150}
            layout="fill"
            width={175}
            className="rounded-3xl"
          />
          <button className="z-10 gap-1 normal-case bg-white rounded-full opacity-0 btn btn-sm btn-accent group-hover:opacity-100 hover:bg-accent text-secondary">
            <Login /> Select a Room
          </button>
        </div>

        <span className="px-2 text-xs">{title}</span>
        {/* {private && (
          <div className="flex items-center gap-2 px-2">
            <span className="text-[10px] text-secondary ">[private]</span>
            <div className="mb-1">
              <TickCircle />
            </div>
          </div>
        )} */}
      </div>
      <div className="p-2 transition-all ease-in border rounded-b-3xl group-hover:border group-hover:border-brandblack border-base-100 ">
        <div className="flex flex-col">
          <span className="text-xs text-gray-950">{description}</span>
          <div className="flex items-center gap-2">
            {!!avatars && avatars.map((avatar, index) =>(
              <div className="h-[16px] w-[16px]">
                <Image
                  src="/images/icons/sol.png"
                  alt="sol-icon"
                  height={32}
                  width={32}
                />
              </div>
            ))}
            <span className="mt-2 text-xs text-white"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;