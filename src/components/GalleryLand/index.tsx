import React, { FC } from "react";
import GalleryRow from "./GalleryRow";
import { GalleryLand } from "modal/Gallery";

const Gallery: FC<GalleryLand> = ({ rows }) => {
  return (
    <div className="flex flex-col gap-6 my-9">
      {rows.map((row, index) => (
        <GalleryRow key={index} {...row} />
      ))}
    </div>
  );
};

export default Gallery;
