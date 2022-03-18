import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
export interface DaoCardProps {
  title: string;
  imageURL: string;
  pageURL: string;
}
const Dao: FC<DaoCardProps> = ({ title, imageURL, pageURL }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 p-8 transition-all ease-in border cursor-pointer b bg-brandblack rounded-3xl hover:bg-base-100 border-brandblack">
      <Link href={pageURL} passHref>
        <a>
          <Image src={imageURL} width={77} height={77} alt={title} />
          <span className="text-lg font-bold text-center">{title}</span>
        </a>
      </Link>
      <span className="text-lg font-bold text-center">{title}</span>
    </div>
  );
};export default Dao;
