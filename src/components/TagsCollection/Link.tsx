import React, { FC } from "react";
import Link from "components/Link";

export interface TagsLinkCollectionProps {
  tags: {
    label: string;
    link: string;
  }[];
}

const TagsCollection: FC<TagsLinkCollectionProps> = ({ tags }) => {
  return (
    <div className="flex flex-wrap gap-2 ">
      {tags.map((tag, index) => (
        <Link
          href={tag.link}
          key={index}
          exact
          className="text-sm font-normal normal-case rounded-full btn btn-sm h-7"
          defaultClassName="btn-primary"
          activeClassName="btn-secondary"
        >
          <button key={index}>{tag.label}</button>
        </Link>
      ))}
    </div>
  );
};

export default TagsCollection;
