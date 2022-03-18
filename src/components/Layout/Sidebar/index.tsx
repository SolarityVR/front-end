import React from "react";
import Link from "next/link";
import { Home, Sparkle, Auction, PlusCircle, Hot,DaoConnect } from "components/Icons";
import DisclosureButton from "components/DisclosureButton";
import ProfileButton from "components/ProfileButton";
import { MY_DAOS } from "data/home";

const SideBar = () => {
  return (
    <div className="flex sticky  top-28 mt-3  flex-col items-start justify-start max-h-[90vh] gap-6 pb-10 overflow-y-auto scrollbar-thin scrollbar-thumb-black scrollbar-track-white">
      <div>
        <Link href="/dao/popular" passHref>
          <a className="flex items-center gap-2 mx-4 text-lg font-bold">
            <Home />
            Home
          </a>
        </Link>
      </div>
      <Link href="/dao/popular" passHref>
        <a className="flex items-center gap-2 mx-4 text-lg font-bold">
          <Hot />
          Popular Today
        </a>
      </Link>

      <DisclosureButton items={MY_DAOS} />
      <Link href="/dao/new" passHref>
        <a className="flex items-center gap-2 mx-4 text-lg font-bold">
          <Sparkle />
          What’s New
        </a>
      </Link>
      <Link href="/dao/popular" passHref>
        <a className="flex items-center gap-2 mx-4 text-lg font-bold">
          <Auction />
          Auction
        </a>
      </Link>
      <Link href="/dao-connect" passHref>
        <a className="flex items-center gap-2 mx-4 mr-2 text-lg font-bold">
          <DaoConnect  className="mr-2"/>
          DAO connect
        </a>
      </Link>

      <div>
        <Link href="/marketplace/create" passHref>
          <a className="w-full gap-2 pl-4 text-lg font-bold pr-14 btn btn-secondary rounded-3xl">
            <PlusCircle />
            Create
          </a>
        </Link>
      </div>
      <div className="pb-10 mt-24">
        <ProfileButton />
      </div>
    </div>
  );
};

export default SideBar;
