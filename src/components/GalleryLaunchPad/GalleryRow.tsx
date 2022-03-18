import React, { FC } from "react";
import GalleryRowHeader from "./GalleryRowHeader";
import GalleryItem from "./GalleryItem";
import GalleryItemPopular from "./GalleryItemPopular";

import { GalleryRowLaunchPad } from "modal/Gallery";

const GalleryRow: FC<GalleryRowLaunchPad> = ({ title, popular,description, items }) => {
  return (
    <div className="flex flex-col">
      <GalleryRowHeader title={title} popular={popular} description={description} />
      <div className="grid grid-cols-3 gap-3 mt-4">
        {items.map((item, index) =>
          item.featured ? (
            <GalleryItemPopular key={index} {...item} />
          ) : (
            <GalleryItem key={index} {...item} />
          )
        )}
      </div>
    </div>
  );
};

export default GalleryRow;
