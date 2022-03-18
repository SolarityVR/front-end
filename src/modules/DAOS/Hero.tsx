import React from "react";
import Banner from "components/Banner";
import Link from 'components/Link'
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";

import { MENU_LINKS } from "data/profile";

const Hero = () => {
  return (
    <div className="mb-10">
      <Banner
        vrdao={{
          featured: true,
          imageUrl: "/images/placeholder/post/post_one.png",
          price: "5",
        }}
        smallImage="/gid.gif"
      />
      <div className="flex justify-end">
        <button className="mr-5 -mt-10 rounded-full btn btn-secondary">
          Follow
        </button>
      </div>
      <div className="flex justify-center">
        <span className="text-lg font-bold ">Solana Money Boys</span>
      </div>
      <div className="flex justify-center gap-4 mt-4">
        <button className="gap-2 text-sm normal-case rounded-full btn btn-primary">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
              fill="#6163FF"
            />
          </svg>
          22.5K Followers
        </button>
        <button className="bg-white btn btn-circle">
          <AiFillGithub size={22} color="#000" />
        </button>{" "}
        <button className="bg-white btn btn-circle">
          <AiOutlineTwitter size={22} color="#55ACEE" />
        </button>
        <button className="bg-white btn btn-circle">
          <FaDiscord size={22} color="#7289d9" />
        </button>
      </div>
      <div className="flex justify-center mt-6">
        <span className="max-w-[750px] text-sm text-center text-gray-950">
        4,444 Money Boys Building the metaverse. For the best insights and NFT analytic tools visit our platform.
 
        </span>
      </div>
    </div>
  );
};

export default Hero;
