import React from "react";
import SearchInput from "components/SearchInput";
import Hot from "components/Widget/Hot";
import YourActivity from "components/Widget/YourActivity";

import { HOT } from "data/widgets";

const RightSidebar = () => {
  return (
    <div className="flex flex-col gap-4 ml-8">
      <SearchInput />
      <Hot data={HOT} />
      <YourActivity data={HOT}/>
    </div>
  );
};

export default RightSidebar;
