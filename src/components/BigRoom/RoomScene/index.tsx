import React, { FC } from "react";
import Image from "next/image";
import { VR } from "components/Icons";
import { RoomSceneType } from "modal/experience";

const RoomScene = ({
    data: bgImage,
}: {
    data: string;
}) => {
  return (
    <div>
        <Image
          src={bgImage}
          alt={"VR Image"}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
    </div>
  );
};

export default RoomScene;
