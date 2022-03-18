import React from "react";
import { Tag, TagType } from "modal/post";

const Tags = ({ tags }: { tags: Tag[] }) => {
  const tagsTypeMapping: {
    [key in TagType]: string;
  } = {
    secondary: "bg-secondary",
    info: "bg-error",
    error: "bg-error",
    warning: "bg-warning",
  };
  return (
    <div className="flex gap-1">
      {tags.map(({ title, type }, index) => (
        <button
          key={index}
          className={`mt-2 rounded-full badge ${tagsTypeMapping[type]} text-white`}
        >
          {title}
        </button>
      ))}
    </div>
  );
};

export default Tags;
