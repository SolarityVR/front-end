import React, { FC } from "react";
import Header from "components/Layout/Header";
import Sidebar from "components/Layout/Sidebar";
import Hot from "components/Widget/Hot";

interface Props {
  children: React.ReactNode;
  rightSidebar?: React.ReactNode;
  heroContent?: React.ReactNode;
  sol?: boolean;
}

const Index: FC<Props> = ({ children, rightSidebar, heroContent }) => {
  return (
    <div className="max-h-screen overflow-x-hidden">
      <div className="fixed top-0 z-10 w-full bg-base-100">
        <Header sol />
        <div className="flex h-[1px] bg-darkcharcoal" />
      </div>

      <main className="grid grid-cols-6 grid-rows-1 gap-2 px-5 mx-auto mt-24 max-w-7xl">
        <Sidebar />
        <div className="grid grid-cols-5 gap-1 mt-4 sm:col-span-7 lg:col-span-5">
          {heroContent && <div className="col-span-5 mt-4">{heroContent}</div>}
          <div className={`${rightSidebar ? "col-span-3" : "col-span-5"} mt-4`} id="container">
            {children}
          </div>
          {rightSidebar && (
            <div className="hidden col-span-2 mt-4 ml-10 md:block top-10 scrollbar-thin scrollbar-thumb-black scrollbar-track-white">
              {rightSidebar}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Index;
