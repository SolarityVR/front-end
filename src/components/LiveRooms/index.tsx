import React, { FC, useState } from "react";
import Base from "components/Widget/Base";
import LiveRoomComp from "components/LiveRoom";
import CreateRoomModal from "components/Modals/CreateRoomModal";

import { LiveRoomType } from 'modal/experience';

interface IProps {
  rows: LiveRoomType[];
}

const LiveRooms: FC<IProps> = ({ rows: rooms }) => {
  const  [createModalOpen,setCreateModalOpen] = useState(false)

  const handleCreateModalToggle = () => {
    setCreateModalOpen(!createModalOpen)
  }
  return (
    <div className="mx-3 -mt-5">
      <div className="justify-between bg-brandblack rounded-3xl">
        <div className="flex items-center justify-between border-b border-borderwidget">
          <div className="flex flex-col p-5">
            <div className="flexfont-[19px] font-bold">Rooms</div>
          </div>
          {/* <div className="pr-5 text-xs cursor-pointer text-secondary" onClick={handleCreateModalToggle}></div> */}
        </div>
        <div>
          <div className="divide-y divide-borderwidget max-h-[42vh] overflow-y-auto scrollbar-thin scrollbar-thumb-black">
            {rooms.map((room, index) => (
              <LiveRoomComp key={index} data={room} />
            ))}
          </div>
        </div>
      </div>
      <CreateRoomModal open={createModalOpen} onClose={handleCreateModalToggle} />
    </div>
  );
};

export default LiveRooms;