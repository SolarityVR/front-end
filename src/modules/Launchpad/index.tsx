import React from "react";
import Gallery from "components/GalleryLaunchPad";

import { GALLERY } from "data/launchpad";

const Launchpad = () => {
  return (
    <div className="flex flex-col justify-center gap-4 mb-4">
      <div className="flex flex-col gap-2">
        <span className="font-bold text-center text-brand-lg">
          Creative work shows us what’s possible.
          <br /> Help fund it here.
        </span>
        <span className="text-xs text-center text-gray-950">
          WITHIN THE LAST DAY
        </span>
      </div>

      <div className="flex justify-center w-full">
        <div className="grid justify-center grid-cols-3 py-8 gap-28 rounded-xl bg-brandblack px-28">
          <div className="flex flex-col">
            <span className="font-bold text-center text-brand-lg text-secondary">
              58
            </span>
            <span className="text-xs text-center text-gray-950">
              Projects funded
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-center text-brand-lg text-secondary">
            $4,281,777
            </span>
            <span className="text-xs text-center text-gray-950">
            Towards creative work
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-center text-brand-lg text-secondary">
            32,911
            </span>
            <span className="text-xs text-center text-gray-950">
            Backings
            </span>
          </div>
        </div>
      </div>
        <Gallery {...GALLERY} />
    </div>
  );
};

export default Launchpad;
