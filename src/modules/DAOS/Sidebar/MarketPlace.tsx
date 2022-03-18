import React from "react";
import SelectInput from "components/SelectInput";

const Home = () => {
  return (
    <div className="flex flex-col mb-10">
      <span className="text-lg font-bold">Filters</span>
      <div className="flex flex-col gap-4 p-8 mt-8 border rounded-3xl border-brandblack">
        <span className="text-base">Price Filter</span>
        <div className="flex flex-col w-full gap-4">
          <SelectInput title="SOL" />
          <div className="flex justify-between">
            <input
              type="number"
              placeholder="Min"
              className="w-32 text-lg font-bold rounded-1xl input bg-brandblack"
            />{" "}
            <input
              type="number"
              placeholder="Max"
              className="w-32 text-lg font-bold rounded-1xl input bg-brandblack"
            />
          </div>
        </div>
        <span className="text-base">Attributes filter</span>
        <div className="flex flex-col w-full gap-4">
          <SelectInput title="Avatar" />
          <SelectInput title="Mansions " />
          <SelectInput title="Apps" />
          <SelectInput title="NFT" />
        </div>
        <div className="flex justify-center mt-8">
          <button className="rounded-full btn btn-secondary">
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
