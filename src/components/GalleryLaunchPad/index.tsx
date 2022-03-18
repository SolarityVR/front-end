import React, { FC } from "react";
import GalleryRow from "./GalleryRow";
import { GalleryLaunchPad } from "modal/Gallery";

const Gallery: FC<GalleryLaunchPad> = ({ rows }) => {
  return (
    <div className="flex flex-col gap-24 my-9">
      {rows.map((row, index) => (
        <GalleryRow key={index} {...row} />
      ))}
    </div>
  );
};

export default Gallery;
