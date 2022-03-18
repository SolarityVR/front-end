import React, { FC } from "react";
import Image from "next/image";

export interface MemberProps {
  name: string;
  post: string;
  imageUrl: string;
  points?: string;
  votes?: string;
  voteColor?: string;
}

const Member: FC<MemberProps> = ({ name, post, imageUrl, points }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="rounded-2xl">
        <Image src={imageUrl} alt="name" width={100} height={76} className="rounded-2xl " />
      </div>
      <span className="text-sm font-semibold">{name}</span>
      <span className="text-sm text-gray-950">{post}</span>
      {points && (
        <button className="mt-2 text-xs normal-case rounded-full btn btn-sm bg-[#19a0fd] bg-opacity-10">
          {points} Points
        </button>
      )}
    </div>
  );
};

export default Member;
