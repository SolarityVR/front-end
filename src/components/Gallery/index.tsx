import React, { FC } from "react";
import GalleryRow from "./GalleryRow";
import { Gallery } from "modal/Gallery";

const Gallery: FC<Gallery> = ({ rows }) => {
  return (
    <div className="flex flex-col gap-6 my-9">
      {rows.map((row, index) => (
        <GalleryRow key={index} {...row} />
      ))}
    </div>
  );
};

export default Gallery;
