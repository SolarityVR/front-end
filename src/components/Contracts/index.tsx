import React, { FC } from "react";
import Image from "next/image";
import Footer from "components/Contracts/Footer";

export interface ContractProps {
  avatartImage: string;
  title: string;
  subtitle: string;
  likes: number;
  deadline: string;
  price: string;
  experience: string;
  budget: string;
}

const Contract: FC<ContractProps> = ({
  avatartImage,
  title,
  subtitle,
  deadline,
  price,
  experience,
  budget,
  likes,
}) => {
  return (
    <div>
      <div className="flex gap-8 bg-[#1F2125] px-10 py-5 border-l border-darkcharcoal border-r ">
        <div className="flex">
          <div className="relative w-10 h-10 mt-1">
            <Image src={avatartImage} alt={title}  layout="fill" />
          </div>
        </div>
        <div className="flex flex-col ">
          <div className="flex items-start justify-between">
            <div className="flex flex-col">
              <div className="flex">
                <span
                  className="font-bold"
                  dangerouslySetInnerHTML={{ __html: title }}
                />
              </div>
            </div>

            <div className="flex flex-col items-end">
              <span className="text-sm font-bold">{likes}</span>
            </div>
          </div>
          {subtitle && (
            <span
              className="mt-2 text-sm leading-5"
              dangerouslySetInnerHTML={{
                __html: subtitle,
              }}
            />
          )}
        </div>
      </div>
      <Footer
        price={price}
        deadline={deadline}
        experience={experience}
        budget={budget}
      />
    </div>
  );
};

export default Contract;
