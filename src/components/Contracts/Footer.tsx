import React from "react";
import {  Calendar} from "components/Icons";

const Footer = ({
  deadline,
  price,
  experience,
  budget,
}: {
  deadline: string;
  price: string;
  experience: string;
  budget: string;
}) => {
  return (
    <div className="border-t justify-between  border-[hsl(210,9%,9%)] flex px-10 py-5 bg-[#1F2125] border-l border-r border-l-darkcharcoal border-r-darkcharcoal w-full">
      <div className="flex gap-6">
        <div className="flex items-center justify-center gap-3">
          <span className="text-xs text-gray-950">{price}</span>
        </div>

        <div className="flex items-center justify-center gap-3">
          <span className="text-xs text-secondary">{experience}o</span>
        </div>
        <div className="flex items-center justify-center gap-3">
          <span className="text-xs ">Est. Budget</span>
          <span className="text-sm font-bold">{budget}</span>
        </div>
      </div>
      <button className="gap-3 text-xs font-bold btn btn-sm rounded-3xl bg-[#1d3040] ">
        <Calendar />
        <div>
          <span className="font-normal text-white normal-case">Deadline</span>{" "}
          {deadline}
        </div>
      </button>
    </div>
  );
};

export default Footer;
