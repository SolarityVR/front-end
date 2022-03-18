import React from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { CaretDown } from "components/Icons";
import Image from "next/image";
import AavatartPlaceholder from "assets/images/placeholder/avatar.png";

const DisclosureButton = () => {
  return (
    <div className="flex flex-col">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex items-center justify-center gap-4 bg-[#151719] border-none btn normal-case">
              <Image src={AavatartPlaceholder} alt="user avatar" />
              <div className="flex flex-col items-start">
                  <span className="font-bold text-md">Kamil Kalkan</span>
                  <span className="text-[#8899A6]">@kamilklkn</span>
              </div>
              <CaretDown className={`${open ? "transform rotate-180" : ""}`} />
            </Disclosure.Button>

            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel className="mx-4 mt-4">Sample Content</Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default DisclosureButton;
