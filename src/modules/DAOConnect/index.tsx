import React, { useState } from "react";
import SwitchButton from "components/SwitchButton";
import Gallery from "components/Gallery";

import { CONNECT_GALLERY, JOB_GALLERY } from "data/dao-connect";

const DAOConnect = () => {
  const [selectedScreen, setSelectedScreen] = useState("Connect");

  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center gap-4">
        <SwitchButton
          onChange={setSelectedScreen}
          options={["Connect", "Jobs"]}
        />
        <span className="text-sm text-gray-950">
          {selectedScreen === "Connect"
            ? `Want to find new members for your DAO or kickstart a new one?`
            : `Join a Union and get automatically rewarded for your contribute!`}
        </span>
        <div className="relative w-full max-w-md form-control">
          <svg
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-4 top-[17px]"
          >
            <path
              d="M15.1475 13.8525L12.4025 11.1075C13.3963 9.93 14 8.4105 14 6.75C14 3.0225 10.9775 0 7.25 0C3.5225 0 0.5 3.0225 0.5 6.75C0.5 10.4775 3.5225 13.5 7.25 13.5C8.91125 13.5 10.43 12.897 11.606 11.9025L14.351 14.6475C14.4613 14.757 14.606 14.8125 14.7485 14.8125C14.891 14.8125 15.0373 14.7578 15.146 14.6475C15.3673 14.4278 15.3673 14.0722 15.1475 13.8525ZM1.625 6.75C1.625 3.64875 4.14875 1.125 7.25 1.125C10.3513 1.125 12.875 3.64875 12.875 6.75C12.875 9.85125 10.3513 12.375 7.25 12.375C4.14875 12.375 1.625 9.85125 1.625 6.75Z"
              fill="#8899A6"
            />
          </svg>

          <input
            type="text"
            placeholder="Search"
            className="pl-10 rounded-full input bg-brandblack"
          />

          <div className="absolute right-0 flex items-center justify-center rounded-r-full bg-secondary input">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.7499 6.31667H13.0999C12.7749 6.31667 12.5166 6.05834 12.5166 5.73334C12.5166 5.40834 12.7749 5.15 13.0999 5.15H17.7499C18.0749 5.15 18.3333 5.40834 18.3333 5.73334C18.3333 6.05834 18.0749 6.31667 17.7499 6.31667Z"
                fill="white"
              />
              <path
                d="M5.35033 6.31667H2.25033C1.92533 6.31667 1.66699 6.05834 1.66699 5.73334C1.66699 5.40834 1.92533 5.15 2.25033 5.15H5.35033C5.67533 5.15 5.93366 5.40834 5.93366 5.73334C5.93366 6.05834 5.66699 6.31667 5.35033 6.31667Z"
                fill="white"
              />
              <path
                d="M8.44987 9.025C10.2678 9.025 11.7415 7.55127 11.7415 5.73333C11.7415 3.9154 10.2678 2.44167 8.44987 2.44167C6.63193 2.44167 5.1582 3.9154 5.1582 5.73333C5.1582 7.55127 6.63193 9.025 8.44987 9.025Z"
                fill="white"
              />
              <path
                d="M17.7497 14.8417H14.6497C14.3247 14.8417 14.0664 14.5833 14.0664 14.2583C14.0664 13.9333 14.3247 13.675 14.6497 13.675H17.7497C18.0747 13.675 18.3331 13.9333 18.3331 14.2583C18.3331 14.5833 18.0747 14.8417 17.7497 14.8417Z"
                fill="white"
              />
              <path
                d="M6.90032 14.8417H2.25033C1.92533 14.8417 1.66699 14.5833 1.66699 14.2583C1.66699 13.9333 1.92533 13.675 2.25033 13.675H6.90032C7.22532 13.675 7.48366 13.9333 7.48366 14.2583C7.48366 14.5833 7.21699 14.8417 6.90032 14.8417Z"
                fill="white"
              />
              <path
                d="M11.5505 17.5583C13.3684 17.5583 14.8421 16.0846 14.8421 14.2667C14.8421 12.4487 13.3684 10.975 11.5505 10.975C9.73252 10.975 8.25879 12.4487 8.25879 14.2667C8.25879 16.0846 9.73252 17.5583 11.5505 17.5583Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>

      <div>
        <Gallery
          {...(selectedScreen === "Connect" ? CONNECT_GALLERY : JOB_GALLERY)}
        />
      </div>
    </div>
  );
};

export default DAOConnect;
