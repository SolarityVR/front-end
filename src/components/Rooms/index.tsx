import React, { FC } from "react";
import RoomComp from "components/Room";
import { RoomType } from 'modal/experience';

interface IProps {
  rows: RoomType[];
}

const Rooms: FC<IProps> = ({ rows: rooms }) => {
  return (
    <div className="grid grid-cols-4 gap-1 pb-5">
      {rooms.map((room, index) => (
        <RoomComp key={index} data={room} />
      ))}
    </div>
  );
};

export default Rooms;