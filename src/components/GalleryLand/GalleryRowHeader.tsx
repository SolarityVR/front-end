import React from "react";
import { CaretLeft } from "components/Icons";

const GalleryRowHeader = ({ title }: { title: string }) => {
  return (
    <div className="flex justify-between pb-2 border-b border-darkcharcoal">
      <span className="text-lg font-bold">{title}</span>
      <div className="flex gap-2">
        <button className="btn btn-circle btn-sm">
          <CaretLeft />
        </button>
        <button className="rotate-180 btn btn-circle btn-sm btn-secondary transfrom">
          <CaretLeft />
        </button>
      </div>
    </div>
  );
};

export default GalleryRowHeader;
