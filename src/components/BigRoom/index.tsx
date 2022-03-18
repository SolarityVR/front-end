import React, { FC, useState } from "react";
import Image from "next/image";
import { VR } from "components/Icons";
import RoomScene from 'components/BigRoom/RoomScene';
import LiveRooms from "components/LiveRooms";
import JoinRoomModal from "components/Modals/JoinRoomModal";

import { BigRoomType } from "modal/experience";
import { LIVE_ROOM } from "data/experience";

const BigRoom: FC<BigRoomType> = ({ scene, content }) => {
  const  [joinModalOpen,setJoinModalOpen] = useState(false)

  const handleJoinModalToggle = () => {
    setJoinModalOpen(!joinModalOpen)
  }
  return (
    <div className="grid grid-cols-3">
      <div className="col-span-1">
        <LiveRooms rows={LIVE_ROOM.rows} />
      </div>
      <div className="col-span-2" >
        <div className="relative w-full h-[314px] rounded-3xl -mt-5">
          <RoomScene data={scene.bgImage} />
        </div>

        {content && (
          <div className="flex justify-between my-6">
            <div className="flex flex-col max-w-4xl ">
              <span className="text-[15px] text-secondary">{content.title}</span>
              <span className="mt-3 text-sm text-gray-950">
                {content.description}
              </span>
            </div>
            <div>
              <div>
                {!!content.avatars && content.avatars.map((avatar, index) => (
                  <img key={index} src={avatar} width="25" height="25" />
                ))}
              </div>
              <button className="btn btn-secondary rounded-3xl" onClick={handleJoinModalToggle}>
                {content.buttonText}
              </button>
            </div>
          </div>
        )}
      </div>
      <JoinRoomModal open={joinModalOpen} onClose={handleJoinModalToggle} />
    </div>
  );
};

export default BigRoom;
