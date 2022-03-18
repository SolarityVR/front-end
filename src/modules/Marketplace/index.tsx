import React from "react";
import TagsCollection from "components/TagsCollection";
import Gallery from "components/Gallery";
import { CaretDown } from "components/Icons";
import { Popover } from "@headlessui/react";
import { TAGS, GALLERY } from "data/marketplace";

const Marketplace = () => {
  const handleTagChange = (tag: string) => {
    console.log(tag);
  };
  return (
    <div className="flex flex-col pb-14">
      <div className="flex justify-between">
        <TagsCollection onChange={handleTagChange} tags={TAGS} />
        <div className="flex items-center gap-3">
          <span className="text-sm">Filters</span>
          <Popover className="relative">
            <Popover.Button className="gap-2 text-sm font-normal normal-case btn btn-sm rounded-3xl">
              Select
              <CaretDown />
            </Popover.Button>
            <Popover.Panel className="absolute z-10 rounded-lg bg-brandblack">
              <div className="flex flex-col p-5">
                <a href="/analytics">Analytics</a>
                <a href="/engagement">Engagement</a>
                <a href="/security">Security</a>
                <a href="/integrations">Integrations</a>
              </div>
            </Popover.Panel>
          </Popover>
        </div>
      </div>
      <Gallery rows={GALLERY.rows} />
    </div>
  );
};

export default Marketplace;
