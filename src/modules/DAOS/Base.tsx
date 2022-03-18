import React, { ReactNode } from "react";
import LinkCollection from "components/TagsCollection/Link";

import { TAGS } from "data/daos";

const Base = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col gap-6">
      <LinkCollection tags={TAGS.tags} />
      {children}
    </div>
  );
};

export default Base;
