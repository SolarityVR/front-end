import React from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { List, CaretDown, Plus, Search } from "components/Icons";
import Image from "next/image";
import Link from "next/link";

interface YourDao {
  title: string;
  imageUrl: string;
  link: string;
}

interface Iprops {
  items: YourDao[];
}

const DisclosureButton = ({ items }: Iprops) => {
  return (
    <div className="flex flex-col">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex items-center gap-4 font-bold bg-[#151719] border-none btn normal-case text-lg">
              <List />
              <span>Your DAOS</span>
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
              <Disclosure.Panel className="flex flex-col gap-5 mx-3 mt-4">
                {items.map(({ link, imageUrl, title }) => (
                  <Link href={link} passHref key={link}>
                    <a className="flex items-center gap-3">
                      <Image
                        src={imageUrl}
                        height={32}
                        width={32}
                        alt="Club Noriega"
                      />
                      {title}
                    </a>
                  </Link>
                ))}

                <Link href="/dao/create" passHref>
                  <a className="flex items-center gap-3">
                    <button className="bg-white btn btn-sm btn-circle">
                      <Plus />
                    </button>
                    Create DAOs
                  </a>
                </Link>
                <Link href="/dao/discover" passHref>
                  <a className="flex items-center gap-3">
                    <button className="bg-white btn btn-sm btn-circle">
                      <Search />
                    </button>
                    Discover DAOs
                  </a>
                </Link>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default DisclosureButton;
