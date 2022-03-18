import React from "react";
import { FC } from "react";
import Image from "next/image";
import { TickCircle, Bid } from "components/Icons";
import { GalleryItem } from "modal/Gallery";

const GalleryItem: FC<GalleryItem> = ({
  title,
  collection,
  imageUrl,
  currentBid,
  endingIn,
  subtitle,
  type = "bid",
  applicationNumber
}) => {
  return (
    <div className="flex flex-col group ">
      <div className="flex flex-col justify-center gap-2 p-2 transition-all ease-in rounded-t-3xl rounded-b-3xl group-hover:rounded-b-none bg-brandblack">
        <div className="relative h-[133px] w-full flex justify-center items-center ">
          <Image
            src={imageUrl}
            alt="nft item"
            height={133}
            layout="fill"
            width={175}
            className="rounded-3xl"
          />
          <button className="z-10 gap-1 normal-case bg-white rounded-full opacity-0 btn btn-sm btn-accent group-hover:opacity-100 hover:bg-accent text-secondary">
            {type === "connect" ? (
              <>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.4163 16.25H12.083"
                    stroke="#6163FF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.75 17.9167V14.5833"
                    stroke="#6163FF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    stroke-Linejoin="round"
                  />
                  <path
                    d="M10.1332 9.05834C10.0498 9.05 9.94984 9.05 9.85817 9.05834C7.87484 8.99167 6.29984 7.36667 6.29984 5.36667C6.2915 3.32501 7.94984 1.66667 9.9915 1.66667C12.0332 1.66667 13.6915 3.32501 13.6915 5.36667C13.6915 7.36667 12.1082 8.99167 10.1332 9.05834Z"
                    stroke="#6163FF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.99121 18.175C8.47454 18.175 6.96621 17.7917 5.81621 17.025C3.79954 15.675 3.79954 13.475 5.81621 12.1333C8.10788 10.6 11.8662 10.6 14.1579 12.1333"
                    stroke="#6163FF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Connect
              </>
            ) : (
              <>
                <Bid /> Place a Bid
              </>
            )}
          </button>
        </div>

        <span className="px-2 text-xs">{title}</span>
        <div className="flex items-center gap-2 px-2">
          <span className="text-[10px] text-secondary ">{collection}</span>
          <div className="mb-1">
            <TickCircle />
          </div>
        </div>
      </div>
      <div className="flex justify-between p-2 transition-all ease-in border rounded-b-3xl group-hover:border group-hover:border-brandblack border-base-100 ">
        {type === "bid" && (
          <>
            <div className="flex flex-col">
              <span className="text-xs text-gray-950">Current bid</span>
              <div className="flex items-center gap-2">
                <div className="h-[16px] w-[16px]">
                  <Image
                    src="/images/icons/sol.png"
                    alt="sol-icon"
                    height={32}
                    width={32}
                  />
                </div>

                <span className="mt-2 text-xs text-white">
                  {currentBid} SOL
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-gray-950">Ending in</span>
              <span className="mt-2 text-xs text-white">{endingIn}</span>
            </div>
          </>
        )}
        {type === "connect" && (
          <div className="flex items-center justify-between w-full">
            <span className="text-xs text-gray-950">{subtitle}</span>
            <div className="flex items-center gap-2">
              <div className="h-[16px] w-[16px]">
                <Image
                  src="/images/icons/sol.png"
                  alt="sol-icon"
                  height={32}
                  width={32}
                />
              </div>

              <span className="mt-1 text-xs text-white ">{currentBid} SOL</span>
            </div>
          </div>
        )}
        {type === "job" && (
          <div className="flex items-center justify-between w-full">
            <span className="flex gap-2 text-xs font-semibold">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.10671 7.24683C6.04004 7.24016 5.96004 7.24016 5.88671 7.24683C4.30004 7.1935 3.04004 5.8935 3.04004 4.2935C3.04004 2.66016 4.36004 1.3335 6.00004 1.3335C7.63337 1.3335 8.96004 2.66016 8.96004 4.2935C8.95337 5.8935 7.69337 7.1935 6.10671 7.24683Z"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.9402 2.6665C12.2335 2.6665 13.2735 3.71317 13.2735 4.99984C13.2735 6.25984 12.2735 7.2865 11.0268 7.33317C10.9735 7.3265 10.9135 7.3265 10.8535 7.33317"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.77348 9.7065C1.16014 10.7865 1.16014 12.5465 2.77348 13.6198C4.60681 14.8465 7.61348 14.8465 9.44681 13.6198C11.0601 12.5398 11.0601 10.7798 9.44681 9.7065C7.62014 8.4865 4.61348 8.4865 2.77348 9.7065Z"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.2266 13.3333C12.7066 13.2333 13.1599 13.0399 13.5332 12.7533C14.5732 11.9733 14.5732 10.6866 13.5332 9.90659C13.1666 9.62659 12.7199 9.43992 12.2466 9.33325"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {applicationNumber}
            </span>
            <div className="flex items-center gap-2">
              <div className="h-[16px] w-[16px]">
                <Image
                  src="/images/icons/sol.png"
                  alt="sol-icon"
                  height={32}
                  width={32}
                />
              </div>

              <span className="mt-1 text-xs text-white ">{currentBid} SOL</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryItem;
