import React, { useState, FC } from "react";
import classname from "classnames";

interface Iprops {
  tags: string[];
  onChange: (tag: string) => void;
}

const TagsCollection: FC<Iprops> = ({ tags, onChange }) => {
  const [activeTagIndex, setActiveTabIndex] = useState(0);

  const handleTagClick = (index: number, tag: string) => {
    setActiveTabIndex(index);
    onChange(tag);
  };
  return (
    <div className="flex flex-wrap gap-2 ">
      {tags.map((tag, index) => (
        <button
          className={classname(
            activeTagIndex === index ? "btn-secondary" : "btn-primary",
            "rounded-full btn btn-sm  h-7 text-sm normal-case font-normal"
          )}
          key={index}
          onClick={() => {
            handleTagClick(index, tag);
          }}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default TagsCollection;
