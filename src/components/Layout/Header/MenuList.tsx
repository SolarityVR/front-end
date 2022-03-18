import React, { FC } from "react";
import Link from "components/Link";
interface IProps {
  items: {
    title: string;
    link: string;
    exact?:boolean
  }[];
}

const MenuList: FC<IProps> = ({ items }) => {
  return (
    <div className="space-x-10">
      {items.map(({ title, link,exact }) => (
        <Link
          href={link}
          key={link}
          exact={exact}
          className="text-lg hover:py-8 hover:border-secondary"
          activeClassName="font-bold border-b-2 py-8 border-secondary"
          defaultClassName=""
        >
          {title}
        </Link>
      ))}
    </div>
  );
};

export default MenuList;
