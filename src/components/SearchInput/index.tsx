import React from "react";

const SearchInput = () => {
  return (
    <div className="relative w-full text-gray-600 focus-within:text-gray-400">
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
        className="w-full py-4 pl-12 text-[15px] text-white rounded-full bg-primary focus:outline-none focus:bg-black focus:text-white placeholder:text-gray-950Í"
        placeholder="Search"
        autoComplete="off"
      />
    </div>
  );
};

export default SearchInput;
