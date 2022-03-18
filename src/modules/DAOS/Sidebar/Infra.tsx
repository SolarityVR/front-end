import React from "react";
import Select from "components/SelectInput";
import TopPools from "components/Widget/TopPools";
import GalleryItem from "components/GalleryLand/GalleryItem";

import { WORLD_GALLERY } from "data/daos";

const Infra = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between w-full">
        <Select
          title="All Categories"
          className="rounded-full bg-secondary btn-sm"
        />
        <div className="flex items-center gap-4">
          <span className="text-sm">Sort by</span>
          <Select
            title="Latest"
            className="text-sm rounded-full bg-primary btn-sm"
          />
        </div>
      </div>
      <TopPools />

      <span>Events from other DAOs</span>
      <div className="flex flex-col gap-5">
        {WORLD_GALLERY.rows[0].items.map((item, index) => (
          <GalleryItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Infra;
