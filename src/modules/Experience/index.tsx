import React from "react";
import GalleryE from "components/GalleryE";
import BigRoom from "components/BigRoom";
import Rooms from "components/Rooms";
import { TAGS, GALLERYE } from "data/marketplace";
import { BIG_ROOM } from "data/experience";
import { ROOM } from "data/experience";

const Experience = () => {
  return (
    <div className="flex flex-col pb-14">
      <BigRoom {...BIG_ROOM}/>
      <GalleryE rows={GALLERYE.rows}/>
    </div>
  );
};

export default Experience;
