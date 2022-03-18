import React, { FC } from "react";
import GalleryERow from "../Gallery/GalleryERow";
import { Gallery } from "modal/Gallery";

const GalleryE: FC<Gallery> = ({ rows }) => {
  return (
    <div className="flex flex-col gap-6 my-4">
      {rows.map((row, index) => (
        <GalleryERow key={index} {...row} />
      ))}
    </div>
  );
};

export default GalleryE;
