import React, { FC } from "react";
import { Tick } from "components/Icons";
import classnames from "classnames";

interface IProps {
  icon: React.ReactNode;
  title: string;
  list: string[];
  selected: boolean;
  onClick: () => void;
}

const Card: FC<IProps> = ({ icon, title, list, onClick, selected }) => {
  return (
    <div
      className={classnames(
        selected && "bg-brandblack",
        "flex flex-col items-center gap-6 p-4 transition-all ease-in border cursor-pointer select-none border-brandblack rounded-3xl hover:bg-brandblack"
      )}
      onClick={onClick}
    >
      <div>{icon} </div>
      <span className="font-bold text-[19px]">{title}</span>
      <div className="flex flex-col gap-4">
        {list.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 text-[15px] text-gray-950"
          >
            <Tick /> <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
