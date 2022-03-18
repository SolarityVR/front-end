import React from "react";
import { useAtom } from "jotai";
import { createFormAtom } from "atoms/create";

const Review = () => {
  const [form, setForm] = useAtom(createFormAtom);

  return (
    <div className="flex flex-col max-w-3xl gap-4 p-5 border border-brandblack rounded-3xl">
      <span className="font-bold text-brand-lg">Verse Created</span>
      <span className="flex gap-4 text-brand-lg">
        Final Review
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="14" cy="14" r="13.5" stroke="white" />
          <path
            d="M10.5859 11.1924H11.8384C11.9189 10.145 12.6221 9.49316 13.728 9.49316C14.8193 9.49316 15.5225 10.1597 15.5225 11.0679C15.5225 11.8516 15.1929 12.313 14.3433 12.833C13.3398 13.4336 12.8711 14.0928 12.8784 15.0596V15.7334H14.1602V15.2573C14.1602 14.4883 14.4238 14.0781 15.354 13.5288C16.2915 12.9648 16.8848 12.1519 16.8848 11.002C16.8848 9.49316 15.625 8.35059 13.7793 8.35059C11.7212 8.35059 10.6665 9.61035 10.5859 11.1924ZM13.6182 19.1318C14.2114 19.1318 14.6289 18.707 14.6289 18.1138C14.6289 17.5132 14.2114 17.0884 13.6182 17.0884C13.0249 17.0884 12.6001 17.5132 12.6001 18.1138C12.6001 18.707 13.0249 19.1318 13.6182 19.1318Z"
            fill="white"
          />
        </svg>
      </span>
      <div className="flex items-center gap-4">
        <button className="flex items-center justify-center w-32 h-32 rounded-full bg-brandblack">
          {form.file && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              alt={form.file.name}
              src={form.file.content}
              className="absolute z-0 w-32 h-32 rounded-full"
            ></img>
          )}
        </button>
        <div className="flex flex-col">
          <span className=" text-brand-md text-gray-950">Verse Name</span>
          <span className=" text-brand-lg">{form.name}</span>
        </div>
      </div>
      <div className="flex flex-col max-w-sm ">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between ">
            <span className=" text-brand-md text-gray-950">Description&#160;&#160;&#160;&#160;</span>
            <span className=" text-brand-lg">{form.description}</span>
          </div>
          <div className="flex justify-between ">
            <span className=" text-brand-md text-gray-950">Verse Type</span>
            <span className=" text-brand-lg">NFT project</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col max-w-3xl">
        <div className="grid grid-cols-4 gap-6">
          <div className="flex items-center justify-between px-6 py-8 bg-brandblack rounded-3xl">
            <div className="flex flex-col">
              <span className="text-4xl font-bold">
                {form.support}
                <span className="ml-2 text-brand-lg">%</span>
              </span>
              <span className=" text-brand-md text-gray-950">Support</span>
            </div>
            <div>
              <svg
                width="22"
                height="9"
                viewBox="0 0 22 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 3.11417L7 3.09417C7.75 3.09417 8.59 3.66417 8.87 4.36417L10.01 7.24417C10.27 7.89417 10.68 7.89417 10.94 7.24417L13.23 1.43417C13.45 0.874171 13.86 0.854171 14.14 1.38417L15.18 3.35417C15.49 3.94417 16.29 4.42417 16.95 4.42417H21.01"
                  stroke="#11C278"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="flex items-center justify-between px-6 py-8 bg-brandblack rounded-3xl">
            <div className="flex flex-col">
              <span className="text-4xl font-bold">
                {form.quorum}
                <span className="ml-2 text-brand-lg">%</span>
              </span>
              <span className=" text-brand-md text-gray-950">Quorum</span>
            </div>
            <div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.07492 11.0667H7.64992V17.0667C7.64992 18.4667 8.40826 18.75 9.33326 17.7L15.6416 10.5333C16.4166 9.65835 16.0916 8.93335 14.9166 8.93335H12.3416V2.93335C12.3416 1.53335 11.5833 1.25002 10.6583 2.30002L4.34992 9.46668C3.58326 10.35 3.90826 11.0667 5.07492 11.0667Z"
                  stroke="#6163FF"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="flex items-center justify-between px-6 py-8 bg-brandblack rounded-3xl">
            <div className="flex flex-col">
              <span className="text-4xl font-bold">1</span>
              <span className=" text-brand-md text-gray-950">Members</span>
            </div>
            <div>
              <svg
                width={24}
                height={24}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 7.16a.605.605 0 0 0-.19 0 2.573 2.573 0 0 1-2.48-2.58c0-1.43 1.15-2.58 2.58-2.58a2.58 2.58 0 0 1 2.58 2.58A2.589 2.589 0 0 1 18 7.16ZM16.97 14.44c1.37.23 2.88-.01 3.94-.72 1.41-.94 1.41-2.48 0-3.42-1.07-.71-2.6-.95-3.97-.71M5.97 7.16c.06-.01.13-.01.19 0a2.573 2.573 0 0 0 2.48-2.58C8.64 3.15 7.49 2 6.06 2a2.58 2.58 0 0 0-2.58 2.58c.01 1.4 1.11 2.53 2.49 2.58ZM7 14.44c-1.37.23-2.88-.01-3.94-.72-1.41-.94-1.41-2.48 0-3.42 1.07-.71 2.6-.95 3.97-.71M12 14.63a.605.605 0 0 0-.19 0 2.573 2.573 0 0 1-2.48-2.58c0-1.43 1.15-2.58 2.58-2.58a2.58 2.58 0 0 1 2.58 2.58c-.01 1.4-1.11 2.54-2.49 2.58ZM9.09 17.78c-1.41.94-1.41 2.48 0 3.42 1.6 1.07 4.22 1.07 5.82 0 1.41-.94 1.41-2.48 0-3.42-1.59-1.06-4.22-1.06-5.82 0Z"
                  stroke="#43DFF6"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="flex items-center justify-between px-6 py-8 bg-brandblack rounded-3xl">
            <div className="flex flex-col">
              <span className="text-4xl font-bold">
               -
                <span className="ml-2 text-brand-lg">SOL</span>
              </span>
              <span className=" text-brand-md text-gray-950">Free</span>
            </div>
            <div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
