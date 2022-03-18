import React, { useState } from "react";
import Image from "next/image";
import { Login } from "components/Icons";
import { LiveRoomType } from "modal/experience";

const index = ({
  data: { title, creator, avatars },
}: {
  data: LiveRoomType;
}) => {
  const  [swapModalOpen,setSwapModalOpen] = useState(false)

  const handleModalToggle = () => {
    setSwapModalOpen(!swapModalOpen)
  }
  return (
    <div className="grid items-center px-5 py-4 cursor-pointer" onClick={handleModalToggle}>
      <div className="font-bold text-[15px] font-white">{title}</div>
      <div className="grid grid-cols-9">
        <div className="col-span-3 mt-4 text-xs text-gray-950">Creator: {creator}</div>
        <div className="col-span-5 flex items-center gap-12">
          <span className="flex mt-2 ml-4 text-xs font-semibold text-white">
            {!!avatars && avatars.map((avatar, index) => {
              if(index < 15) {
                return (
                  <div
                    className="-ml-4"
                    key={index}
                  >
                    <Image
                      src="/images/icons/sol.png"
                      alt="sol-icon"
                      height={32}
                      width={32}
                    />
                  </div>
                )
              }
            })}
          </span>
        </div>
        <span className="col-span-1 mt-4 text-xs text-[#3BA946]">{avatars.length}</span>
      </div>
    </div>
  );
};

export default index;