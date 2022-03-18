import React from "react";
import SearchInput from "components/SearchInput";
import TopSales from "components/Widget/TopSales";
import TopCollection from "components/Widget/TopCollection";
import TopPools from "components/Widget/TopPools";

const RightSidebar = () => {
  return (
    <div className="flex flex-col gap-4 ml-8">
      <SearchInput />
      <TopSales />
      <TopCollection />
      <TopPools />
    </div>
  );
};

export default RightSidebar;
