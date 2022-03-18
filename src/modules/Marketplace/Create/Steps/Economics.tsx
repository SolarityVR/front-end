import React from "react";
import Image from "next/image";
import DAOOrganizationEconomic from "assets/images/dao-organization-economic.png";

const Economics = () => {
  return (
    <div className="flex flex-col -mt-4">
      <span className="text-lg font-bold">Economics Setup</span>
      <span className="text-xs text-gray-950">
      It is important for a Union or a DAO to have a way to easily and rightfully distribute their treasury through a Reputational System choosen 
        by the DAO,<br></br> and to have different Membership Tiers for the different services and access they are going to offer.
      </span>
      <div className="flex gap-5 mt-4">
        <div className="flex flex-col min-w-md">
          <span className="ml-8 text-lg font-bold ">Verse</span>
          <Image
            src={DAOOrganizationEconomic}
            alt="dao universe"
            placeholder="blur"
            width={200}
            height={250}
            className="mt-16 "
          />
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col gap-2 mt-2">
            <span className="text-lg font-bold">Membership Tiers</span>
            <span className="max-w-sm text-xs text-gray-950 ">
              Here you can decide different levels of membership for your
              DAOverse and what they unlock.
            </span>
            <div className="flex flex-col w-full gap-3">
              <div className="grid grid-cols-4 gap-8">
                <div className="flex items-center">
                  <span className="text-sm">Tier 0:</span>
                </div>
                <div className="flex col-span-2 gap-4">
                  <input
                    type="string"
                    placeholder="Access"
                    className="w-32 text-lg font-bold rounded-full input bg-brandblack input-sm"
                  />{" "}
                  <input
                    type="number"
                    placeholder="0.5 SOL"
                    className="w-32 text-lg font-bold rounded-full input bg-brandblack input-sm"
                  />
                </div>
                <span className="flex items-center gap-4 text-sm font-semibold">
                </span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                <div className="flex items-center">
                  <span className="text-sm">Tier 1:</span>
                </div>
                <div className="flex col-span-2 gap-4">
                  <input
                    type="string"
                    placeholder="Access"
                    className="w-32 text-lg font-bold rounded-full input bg-brandblack input-sm"
                  />{" "}
                  <input
                    type="number"
                    placeholder="1.0 SOL"
                    className="w-32 text-lg font-bold rounded-full input bg-brandblack input-sm"
                  />
                </div>
              </div>
              <div className="grid grid-cols-4 gap-8">
                <div className="flex items-center">
                  <span className="text-sm">Tier 2:</span>
                </div>
                <div className="flex col-span-2 gap-4">
                  <input
                    type="string"
                    placeholder="Access"
                    className="w-32 text-lg font-bold rounded-full input bg-brandblack input-sm"
                  />{" "}
                  <input
                    type="number"
                    placeholder="1.5 SOL"
                    className="w-32 text-lg font-bold rounded-full input bg-brandblack input-sm"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8 mt-8">
            <span className="font-bold text-[19px]">Reputational system</span>
            <span className="max-w-sm text-xs text-gray-950 ">
              Here you can decide with what criteria members of your DAO will be
              rewarded
            </span>
            <div className="flex flex-col w-full gap-3">
              <div className="grid grid-cols-4 gap-8">
                <div className="flex items-center">
                  <span className="text-sm">Role 1:</span>
                </div>
                <div className="flex col-span-2 gap-4">
                  <input
                    type="string"
                    placeholder="Criteria"
                    className="w-32 text-lg font-bold rounded-full input bg-brandblack input-sm"
                  />{" "}
                  <input
                    type="number"
                    placeholder="Payroll"
                    className="w-32 text-lg font-bold rounded-full input bg-brandblack input-sm"
                  />
                </div>
              </div>
              <div className="grid grid-cols-4 gap-8">
                <div className="flex items-center">
                  <span className="text-sm">Role 2:</span>
                </div>
                <div className="flex col-span-2 gap-4">
                  <input
                    type="string"
                    placeholder="Criteria"
                    className="w-32 text-lg font-bold rounded-full input bg-brandblack input-sm"
                  />{" "}
                  <input
                    type="number"
                    placeholder="Payroll"
                    className="w-32 text-lg font-bold rounded-full input bg-brandblack input-sm"
                  />
                </div>
              </div>
              <div className="grid grid-cols-4 gap-8">
                <div className="flex items-center">
                  <span className="text-sm">Role 3:</span>
                </div>
                <div className="flex col-span-2 gap-4">
                  <input
                    type="string"
                    placeholder="Criteria"
                    className="w-32 text-lg font-bold rounded-full input bg-brandblack input-sm"
                  />{" "}
                  <input
                    type="number"
                    placeholder="Payroll"
                    className="w-32 text-lg font-bold rounded-full input bg-brandblack input-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Economics;
