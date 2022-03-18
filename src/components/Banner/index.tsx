import React, { FC } from "react";
import Image from "next/image";
import AframeComp2 from "components/AframeComp2";
import AframeComp6 from "components/AframeComp6";
import Link from "next/link";

export interface BannerProps {
  vrprofile: {
    featured: boolean,
    imageUrl: string,
    price: string,
  },
  vrdao: {
    featured: boolean,
    imageUrl: string,
    price: string,
  },
  smallImage: string;
}const Banner: FC<BannerProps> = ({ vrprofile, vrdao, smallImage }) => {
  return (
    <div>
    {vrprofile && (
      <div className="relative w-full h-[400px] rounded-2xl -mt-5">          
      <AframeComp2/>
            {/* </iframe> */}
            {vrprofile.price && (
              <Link href={'https://solarityvr.github.io/money-boy-hub/room/room.html?controls=mouse'}>
                <button className="absolute text-sm font-bold bg-white rounded-full btn top-2 right-2 text-secondary">
                  Play
                </button>
              </Link>
            )}
      </div>
    )}
    {vrdao && (
      <div className="relative w-full h-[400px] rounded-2xl -mt-5">          
      <AframeComp6/>
            {/* </iframe> */}
            {vrdao.price && (
              <Link href={'https://solarityvr.github.io/money-boy-hub/hub/hub.html?controls=mouse'}>
                <button className="absolute text-sm font-bold bg-white rounded-full btn top-2 right-2 text-secondary">
                  Play
                </button>
              </Link>
            )}
      </div>
    )}
      <div className="flex justify-center ">
        <div className="h-[201px] w-[201px] rounded-full relative -mt-28">
          <Image
            src={smallImage}
            alt={"VR Image"}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
