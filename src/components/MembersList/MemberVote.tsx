import React, { FC } from "react";
import Image from "next/image";

import { MemberProps } from "components/MembersList/Member";

const ColorMapping: {
  [n: string]: string;
} = {
  info: "bg-[#438Bf6]",
  warning: "bg-[#EC903C]",
  general:'bg-[#6163FF]'
};

const Member: FC<MemberProps> = ({
  name,
  post,
  imageUrl,
  points,
  votes,
  voteColor,
}) => {
  return (
    <div className="grid items-center w-full grid-cols-9">
      <div className="rounded-2xl">
        <Image
          src={imageUrl}
          height={48}
          width={48}
          className="border border-white rounded-[48px]"
          alt="avatar"
        />
      </div>
      <div className="flex flex-col col-span-2">
        <span className="text-sm font-semibold">{name}</span>
        <span className="text-sm text-gray-950">{post}</span>
      </div>
      {votes && voteColor && (
        <div className="flex flex-col col-span-4">
          <span className="text-xs">{points} Points</span>
          <span>
            <progress
              className={`w-56 progress ${
                ColorMapping[voteColor] ?? ""
              } h-[3px]`}
              value={votes}
              max="100"
            ></progress>
          </span>
        </div>
      )}
      <div className="col-span-2 ">
              <button className="text-xs rounded-full btn btn-sm btn-primary ">
                  Vote Now
              </button>
      </div>
    </div>
  );
};

export default Member;
