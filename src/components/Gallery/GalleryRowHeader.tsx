import React from "react";
import { CaretLeft } from "components/Icons";

const GalleryRowHeader = ({
  title,
  detail,
}: {
  title: string;
  detail?: string;
}) => {
  return (
    <div
      className={`flex justify-between pb-2 ${
        !detail && "border-b border-darkcharcoal"
      }`}
    >
      <div className="flex flex-col">
      <span className="text-lg font-bold">{title}</span>

      <span className="text-sm text-gray-950">
              {detail}
        </span>
      </div>
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
