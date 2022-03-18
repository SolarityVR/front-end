import React from "react";
import Link from "next/link";
import AavatartPlaceholder from "assets/images/placeholder/avatar_small.png";
import Image from "next/image";
import { Download, Love, Calendar, Share } from "components/Icons";

import { PostType } from "modal/post";

const Footer = ({ type }: { type: PostType }) => {
  return (
    <div className="border-t justify-between  border-[hsl(210,9%,9%)] flex px-10 py-5 bg-[#1F2125] border-l border-r border-l-darkcharcoal border-r-darkcharcoal w-full">
      <div className="flex gap-6" >
        <div className="flex items-center justify-center gap-3">
          <span className="text-xs text-gray-950">Posted by</span>
          <div className="flex items-center">
            <Link href="/user/123" passHref>
              <a className="flex flex-row">
                <Image src={AavatartPlaceholder} alt="user avatar" />
              </a>
            </Link>
            <div className="ml-1 text-sm text-secondary">u/rayvtoriq_</div>
          </div>
        </div>
        {type !== "announcement" && (
          <>
            <div className="flex items-center justify-center gap-3">
              <Download />
              <span className="text-xs text-gray-950">808 Downloads</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Love />
              <span className="text-xs text-gray-950">2.5k Likes</span>
            </div>
          </>
        )}

        {type === "announcement" && (
          <div className="flex items-center justify-center gap-3">
            <span className="text-xs text-gray-950">9 hours ago</span>
          </div>
        )}
       
        {type === "featured" && (
          <Link href="/#" passHref>
            <a className="ml-1 text-sm text-secondary">Try in your Room</a>
          </Link>
        )}
        {type === "normal" && (
          <div className="flex items-center justify-center gap-3">
            <Share />
            <span className="text-xs text-gray-950">101 Shares</span>
          </div>
        )}
      </div>
      {type === "announcement" && (
          <button className="gap-3 text-xs font-bold btn btn-sm rounded-3xl bg-[#1d3040] ">
            <Calendar />
            <div>
              <span className="font-normal text-white normal-case">
                End of vote:
              </span>{" "}
              08-13-00
            </div>
          </button>
        )}
    </div>
  );
};

export default Footer;
