import React from "react";
import Logo from "components/Logo";
import MenuList from "./MenuList";
import WalletButton from "components/WalletButton";
import Image from "next/image";

import { EthereumIcon, CaretDown, SOL } from "components/Icons";

const MenutItems = [
  {
    title: "Explore",
    link: "/",
    exact: true,
  },
  {
    title: "Marketplace",
    link: "/marketplace",
  },
  {
    title: "Experience",
    link: "/experience",
  },
  {
    title: "DAOs",
    link: "/daos",
  },
  {
    title: "Launchpad",
    link: "/launchpad",
  },
];

const Header = ({ sol }: { sol?: boolean }) => {
  return (
    <header className="flex items-center justify-between px-5 py-4 mx-auto max-w-7xl">
      <div className="py-3">
        <Logo />
      </div>
      <div className="flex items-center">
        <MenuList items={MenutItems} />
        <div className="flex items-center space-x-3 ml-28">
          <button className={`gap-3 text-lg font-bold btn rounded-3xl ${sol && 'btn-primary'}`}>
            {sol ? (
              <Image
                src="/images/icons/sol.png"
                alt="sol-icon"
                height={32}
                width={32}
              />
            ) : (
              <EthereumIcon />
            )}
            {sol ? "SOL" : "ETH"}
            <CaretDown />
          </button>
          <WalletButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
