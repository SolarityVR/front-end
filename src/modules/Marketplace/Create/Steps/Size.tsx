import React from "react";
import Image from "next/image";
import DAOUniverseImage from "assets/images/dao-universe.png";
import TagsCollection from "components/TagsCollection";

const Size = () => {
  const [size, setSize] = React.useState("");
  return (
    <div className="flex justify-between gap-4 p-10 pr-16 transition-all ease-in border cursor-pointer border-brandblack rounded-3xl ga-2">
      <Image src={DAOUniverseImage} alt="dao universe" placeholder="blur" />

      <div className="flex flex-col max-w-md">
        <span className="font-bold text-[19px]">
        Choose the size of your Verse.
        </span>
        <span className="mt-8 ">Size</span>
        <div className="mt-2">
          <TagsCollection
            tags={["Tiny", "Small", "Medium", "Big", "Massive"]}
            onChange={(size) => setSize(size)}
          />
        </div>
        <div className="flex items-center mt-10">
          <span>N. of Members</span>
          <input
            type="number"
            placeholder="Size"
            className="w-24 ml-16 text-lg font-bold rounded-full input bg-brandblack"
          />
        </div>
      </div>
    </div>
  );
};

export default Size;
