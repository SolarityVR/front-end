import React, { FC, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Image from "next/image";
import { toast } from 'react-toastify';

import Base from "components/Modals/Base";
import BlackInput from "components/Inputs/BlackInput";
import AvatarPanel from "components/AvatarPanel";

import { joinRoom } from '../../redux/slices/chatSlice';

const CreateRoomModal: FC<any> = ({
  open,
  onClose
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');
  const [roomName, setRoomName] = useState('');

  const joinRoomFunc = () => {
    if(!roomName || !userName) {
      toast.error("All inputs are required!");
      return;
    }
    dispatch(joinRoom({roomName, userName}));
    onClose();
  };

  return (
    <Base open={open} onClose={onClose} title="Create a Room">
      <div className="grid grid-cols-2 gap-8 mt-8">
        <div className="col-span-1 flex justify-between py-4 px-7 bg-primary rounded-xl">
          <AvatarPanel modelName={'avatar1'} />
          <div className="flex">
          </div>
        </div>
        <div className="flex justify-between py-4 px-7 rounded-xl">
          <div className="gap-2">
            <h2 className="text-lg font-light">Create a public room.</h2>
            <div className="text-xs text-gray-950 mt-6">Please type a room name.</div>
            <div className="mt-2">
              <div className="relative w-full text-gray-600 focus-within:text-gray-400">
                <input
                  type="text"
                  value={roomName}
                  onChange={(e) => setRoomName(e.target.value)}
                  className="w-full py-2 pl-6 text-[15px] font-light text-white border-transparent border rounded-md bg-primary focus:outline-none focus:border-gray-500 focus:border focus:text-white placeholder:text-gray-950Í"
                  placeholder="Room Name"
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="text-xs text-gray-950 mt-6">Please type your name.</div>
            <div className="mt-2">
              <div className="relative w-full text-gray-600 focus-within:text-gray-400">
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="w-full py-2 pl-6 text-[15px] font-light text-white border-transparent border rounded-md bg-primary focus:outline-none focus:border-gray-500 focus:border focus:text-white placeholder:text-gray-950Í"
                  placeholder="Your Name"
                  autoComplete="off"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <button className="rounded-full btn btn-sm btn-secondary"onClick={joinRoomFunc}>
          Join a Room
        </button>
      </div>
    </Base>
  );
};

export default CreateRoomModal;