import React from "react";
import Image from "next/image";
import Base from "components/Widget/Base";
import { HotWidget } from "modal/widgets";

const Hot = ({ data }: { data: HotWidget[] }) => {
  return (
    <Base title="What's Hot">
      <div className="divide-y divide-borderwidget">
        {data.map(({ title, subtitle, graph: { type, value } }, index) => (
          <div className="flex justify-between px-4 py-3" key={index}>
            <div className="flex items-center">
              <Image
                src={`https://i.pravatar.cc/48?id=${index}`}
                height={48}
                width={48}
                className="border border-white rounded-[48px]"
                alt="avatar"
              />
              <div className="flex flex-col ml-4">
                {subtitle && (
                  <div className="text-xs text-gray-950">{subtitle}</div>
                )}
                <div className="font-bold text-[15px]">{title}</div>
              </div>
            </div>
            <div className="flex items-center"> 

              {type === "up" ? (
                <div className="flex gap-4">
                  <div className="text-x text-[#3BA946]">+{value}%</div>
                  <Image
                    src="/images/placeholder/widgets/graph_up.png"
                    height={20}
                    width={73}
                    className="border border-white rounded-[48px]"
                    alt="avatar"
                  />
                </div>
              ) : (
                <div className="flex gap-4">
                  <div className="text-x text-[#E0464D]">-{value}%</div>
                  <Image
                    src="/images/placeholder/widgets/graph_down.png"
                    height={20}
                    width={73}
                    className="border border-white rounded-[48px]"
                    alt="avatar"
                  />
                </div>
              )}
              </div>
          </div>
        ))}
      </div>
    </Base>
  );
};

export default Hot;
