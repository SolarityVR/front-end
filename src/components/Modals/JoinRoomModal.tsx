import React, { FC, useState } from "react";
import Image from "next/image";
import { toast } from 'react-toastify';
import Base from "components/Modals/Base";
import BlackInput from "components/Inputs/BlackInput";
import AvatarPanel from "components/AvatarPanel";

const JoinRoomModal: FC<any> = ({
  open,
  onClose,
  roomname,
  creator,
  avatars,
}: {
  open: boolean;
  onClose: () => void;
  roomname: string;
  creator: string;
  avatars: string[];
}) => {
  const [name, setName] = useState('');

  const joinGame = () => {
    if(name == "") {
      toast.error("All inputs are required!");
      return;
    }
    location.href="https://cool-server-app.herokuapp.com/rooms/" + name;
  }

  return (
    <Base open={open} onClose={onClose} title="Join a Game">
      <div className="grid grid-cols-2 gap-8 mt-8">
        <div className="col-span-1 flex justify-between py-4 px-7 bg-primary rounded-xl">
          <AvatarPanel modelName={'avatar1'} />
          <div className="flex">
          </div>
        </div>
        <div className="flex justify-between py-4 px-7 rounded-xl">
          <div className="gap-2">
            <h2 className="text-lg font-light">Plaza</h2>
            {/* <span className="text-md text-gray-950">Created by {'Spider'}</span><br />
            <span className="text-md text-gray-950">Members {3}</span><br /> */}
            <div className="text-xs text-gray-950 mt-6">Please type your name.</div>
            <div className="mt-2">
            <div className="relative w-full text-gray-600 focus-within:text-gray-400">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full py-2 pl-6 text-[15px] font-light text-white border-transparent border rounded-md bg-primary focus:outline-none focus:border-gray-500 focus:border focus:text-white placeholder:text-gray-950Í"
                  placeholder="Name"
                  autoComplete="off"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <button className="rounded-full btn btn-sm btn-secondary" onClick={joinGame}>
          Join a Game
        </button>
      </div>
    </Base>
  );
};

export default JoinRoomModal;
