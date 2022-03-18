import React from "react";

const BlackInput = () => {
  return (
    <div className="relative w-full text-gray-600 focus-within:text-gray-400">
      <input
        type="text"
        className="w-full py-2 pl-6 text-[15px] font-light text-white border-transparent border rounded-md bg-primary focus:outline-none focus:border-gray-500 focus:border focus:text-white placeholder:text-gray-950Í"
        placeholder=""
        autoComplete="off"
      />
    </div>
  );
};

export default BlackInput;