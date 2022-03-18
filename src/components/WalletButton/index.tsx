import React from "react";
import Image from "next/image";
import Link from "next/link";

import AavatartPlaceholder from "assets/images/placeholder/avatar.png";

const ButtonWallet = () => {
  return (
    <Link href="/profile" passHref>
      <a className="gap-3 pr-1 font-normal normal-case btn rounded-3xl btn-secondary ">
        <span>Wallet 13...8x </span>
        <div className="w-[1px]  h-2/3 bg-[#5153F0]" />
        <Image src={AavatartPlaceholder} alt="user avatar" />
      </a>
    </Link>
  );
};

export default ButtonWallet;
