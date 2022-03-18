import React from "react";
import GalleryRowHeader from "components/Gallery/GalleryRowHeader";
import GalleryRowHeader1 from "components/Gallery/GalleryRowHeader1";
import DaoCard from "components/Cards/Dao";
import { YOUR_DAO, YOUR_UNIONS, DISCOVER } from "data/daos";


const Yours = () => {
  return (
    <div className="flex flex-col mb-10 -mt-4 gap-7">
      <GalleryRowHeader
        title="Your DAOs"
        detail="In a goldberg Polyhedron there are 12 pentagons, those will be the community leaders, so choose carefully! They can be single members, or other DAOs"
      />

      <div className="grid grid-cols-5 gap-3">
        {YOUR_DAO.map((dao, index) => (
          <DaoCard key={index} {...dao} />
        ))}
      </div>
      <GalleryRowHeader1
        title="Your Unions"
        detail="In a goldberg Polyhedron there are 12 pentagons, those will be the community leaders, so choose carefully! They can be single members, or other DAOs"
      />

      <div className="grid grid-cols-5 gap-3">
        {YOUR_UNIONS.map((dao, index) => (
          <DaoCard key={index} {...dao} />
        ))}
      </div>
      

      <div className="flex items-center justify-between">
        <span className="text-lg font-bold">Discover New DAOs</span>
        <div className="flex gap-4">
          {" "}
          <div className="relative w-full max-w-md text-gray-600 focus-within:text-gray-400">
            <span className="absolute inset-y-0 flex items-center pl-2 left-2 ">
              <button
                type="submit"
                className="p-1 focus:outline-none focus:shadow-outline"
              >
                <svg
                  width={16}
                  height={15}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m15.148 13.852-2.745-2.745A6.75 6.75 0 1 0 7.25 13.5c1.66 0 3.179-.603 4.355-1.598l2.745 2.746a.565.565 0 0 0 .795 0 .56.56 0 0 0 .002-.796ZM1.625 6.75A5.632 5.632 0 0 1 7.25 1.125a5.632 5.632 0 0 1 5.625 5.625 5.632 5.632 0 0 1-5.625 5.625A5.632 5.632 0 0 1 1.625 6.75Z"
                    fill="#8899A6"
                  />
                </svg>
              </button>
            </span>
            <input
              type="search"
              className="w-[348px] py-3 pl-12 text-[15px] text-white rounded-full bg-primary focus:outline-none focus:bg-black focus:text-white placeholder:text-gray-950Í"
              placeholder="Search"
              autoComplete="off"
            />
          </div>
          <button className="rounded-full btn btn-secondary">Create DAO</button>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-3">
        {DISCOVER.map((dao, index) => (
          <DaoCard key={index} {...dao} />
        ))}
      </div>
    </div>
  );
};

export default Yours;
