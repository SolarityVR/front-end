import React from "react";
import { Twitter, Discord } from "components/Icons";
import GalleryItem from "components/GalleryLand/GalleryItem";

import { WORLD_GALLERY } from "data/daos";

const Home = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-8 py-8 mt-8 border divide-y rounded-3xl border-brandblack divide-[#1F2125]">
        <div className="flex flex-col gap-6 px-4">
          <span className="text-lg font-bold ">Price Filter</span>
          <div className="grid grid-cols-2 text-[15px] gap-4">
            <span className="font-semibold">Supply</span>
            <span className="text-right">4444</span>
            <span className="font-semibold">Token: </span>
            <span className="text-sm text-right">
              $MBC
            </span>
            <span className="font-semibold ">Staking rewards:</span>
            <span className="text-right">130% APY</span>
            <span className="font-semibold ">Floor price</span>
            <span className="text-right">20 SOL</span>
          </div>
          <div className="flex gap-4">
            <button className="gap-2 text-xs normal-case rounded-full btn btn-primary">
              <Twitter />
              22,203 Followers
            </button>
            <button className="gap-2 text-xs normal-case rounded-full btn btn-primary">
              <Discord />
              896 Players
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-4 px-4">
          <span className="mt-4 text-lg font-bold">Tiers:</span>
          <div className="flex items-center gap-2">
            <svg
              width="20"
              height="27"
              viewBox="0 0 20 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.87179 10L3 2.63636L6.94872 4.27273L8 0.5L10.5385 4.68182L13 0.5L14 4.27273L17 2.63636L14.4872 10H5.87179Z"
                fill="#CE7727"
              />
              <circle cx="10" cy="17" r="10" fill="#EC903C" />
              <path
                d="M9.8418 21H10.8613V12.5449H9.83008L7.58008 14.1621V15.2754L9.81836 13.6641H9.8418V21Z"
                fill="white"
              />
            </svg>
            <span className="text-[15px] mt-1">Widgets included</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              width="20"
              height="27"
              viewBox="0 0 20 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.87179 9.5L3 2.13636L6.94872 3.77273L8 0L10.5385 4.18182L13 0L14 3.77273L17 2.13636L14.4872 9.5H5.87179Z"
                fill="#337CEA"
              />
              <circle cx="10" cy="17" r="10" fill="#438BF6" />
              <path
                d="M6.63281 14.9824V14.9883H7.65234V14.9824C7.65234 14.0391 8.40234 13.3242 9.39258 13.3242C10.3242 13.3242 11.0684 13.9746 11.0684 14.7891C11.0684 15.4922 10.7988 15.9434 9.66211 17.1387L6.68555 20.2734V21H12.2637V20.0625H8.14453V20.0391L10.2832 17.8301C11.6953 16.3711 12.123 15.668 12.123 14.7246C12.123 13.4297 10.9336 12.4043 9.42188 12.4043C7.82812 12.4043 6.63281 13.5059 6.63281 14.9824Z"
                fill="white"
              />
            </svg>

            <span className="text-[15px] mt-1">Widgets and free airdrop</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              width="20"
              height="27"
              viewBox="0 0 20 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.87179 9.5L3 2.13636L6.94872 3.77273L8 0L10.5385 4.18182L13 0L14 3.77273L17 2.13636L14.4872 9.5H5.87179Z"
                fill="#11AF6D"
              />
              <circle cx="10" cy="17" r="10" fill="#11C278" />
              <path
                d="M8.4082 17.0977H9.46875C10.6758 17.0977 11.4258 17.7129 11.4258 18.709C11.4258 19.5938 10.623 20.2266 9.50391 20.2266C8.36719 20.2266 7.64648 19.6289 7.55273 18.7617H6.53906C6.61523 20.1621 7.74609 21.1406 9.51562 21.1406C11.1738 21.1406 12.498 20.127 12.498 18.6738C12.498 17.4844 11.6777 16.6934 10.4004 16.6172V16.5938C11.4551 16.4062 12.1348 15.6445 12.1348 14.584C12.1348 13.3125 10.9922 12.4043 9.48047 12.4043C7.89258 12.4043 6.82617 13.3242 6.70898 14.7598H7.72266C7.81641 13.875 8.46094 13.3184 9.43359 13.3184C10.5059 13.3184 11.0742 13.8867 11.0742 14.7246C11.0742 15.5801 10.3945 16.207 9.42188 16.207H8.4082V17.0977Z"
                fill="white"
              />
            </svg>

            <span className="text-[15px] mt-1">Money Boy mansion</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {WORLD_GALLERY.rows[0].items.map((item, index) => (
          <GalleryItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
