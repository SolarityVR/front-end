import React from "react";
import Select from "components/SelectInput";
import Image from "next/image";

const Voting = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between w-full">
        <Select
          title="All Categories"
          className="rounded-full bg-secondary btn-sm"
        />
        <div className="flex items-center gap-4">
          <span className="text-sm">Sort by</span>
          <Select
            title="Latest"
            className="text-sm rounded-full bg-primary btn-sm"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-8 border rounded-3xl border-brandblack">
        <div className="divide-y divide-borderwidget">
          <div className="flex justify-between px-4 py-3">
            <div className="flex items-center">
              <Image
                src={`/images/placeholder/your-dao/moneyboys.png`}
                height={48}
                width={48}
                className="border border-white rounded-[48px]"
                alt="avatar"
              />
              <div className="flex flex-col ml-4">
                <div className="font-bold text-[15px]">
                  Welcome to the Money Boys
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-sm font-bold">+449</span>
              <span className="text-xs text-gray-950">21 Dec ‘21</span>{" "}
            </div>
          </div>
          <div className="flex justify-between px-4 py-3">
            <div className="flex items-center">
              <Image
                src={`/images/placeholder/avatars/boh.png`}
                height={48}
                width={48}
                className="border border-white rounded-[48px]"
                alt="avatar"
              />
              <div className="flex flex-col ml-4">
                <span className="text-xs text-gray-950">Alpha Polls:</span>{" "}
                <div className="font-bold text-[15px]">New Week, New Minting</div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center mr-4">
              <span className="text-sm font-bold">27</span>
              <span className="text-xs text-gray-950">3h</span>{" "}
            </div>
          </div>
          <div className="flex justify-between px-4 py-3">
            <div className="flex items-center">
              <Image
                src={`/images/placeholder/avatars/solboys.png`}
                height={48}
                width={48}
                className="border border-white rounded-[48px]"
                alt="avatar"
              />
              <div className="flex flex-col ml-4">
                <span className="text-xs text-gray-950">Proposals for Executive Sub-DAO</span>{" "}
                <div className="font-bold text-[15px]">Merge: Collab w/ SolGods</div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center mr-4">
              <span className="text-sm font-bold">27</span>
              <span className="text-xs text-gray-950">1d</span>{" "}
            </div>
          </div>
          <div className="flex justify-between px-4 py-3">
            <div className="flex items-center">
              <Image
                src={`/images/placeholder/avatars/boh.png`}
                height={48}
                width={48}
                className="border border-white rounded-[48px]"
                alt="avatar"
              />
              <div className="flex flex-col ml-4">
                <span className="text-xs text-gray-950">Proposals for Executive Sub-DAO</span>{" "}
                <div className="font-bold text-[15px]">Funding: Art Union Proposal</div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center mr-4">
              <span className="text-sm font-bold">27</span>
              <span className="text-xs text-gray-950">6d</span>{" "}
            </div>
          </div>
          <div className="flex justify-between px-4 py-3">
            <div className="flex items-center">
              <Image
                src={`/images/placeholder/avatars/metro.png`}
                height={48}
                width={48}
                className="border border-white rounded-[48px]"
                alt="avatar"
              />
              <div className="flex flex-col ml-4">
                <span className="text-xs text-gray-950">If Young Metro don't trust you</span>{" "}
                <div className="font-bold text-[15px]">I'm going to shoot u</div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center mr-4">
              <span className="text-sm font-bold">27</span>
              <span className="text-xs text-gray-950">6d</span>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Voting;
