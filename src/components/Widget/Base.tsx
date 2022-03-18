import React, { FC, ReactNode } from "react";

interface IProps {
  title: string;
  subtitle?: string;
  headerRight?: React.ReactNode | string;
  children: ReactNode;
  footer?: ReactNode;
}

const WidgetBase: FC<IProps> = ({
  title,
  footer,
  subtitle,
  headerRight,
  children,
}) => {
  return (
    <div className="justify-between bg-brandblack rounded-3xl">
      <div className="flex items-center justify-between border-b border-borderwidget">
        <div className="flex flex-col p-5">
          <div className="flexfont-[19px] font-bold">{title} </div>
          {subtitle && <div className="text-sm text-gray-950">{subtitle} </div>}
        </div>
        {headerRight ?? typeof headerRight === "string" ? (
          <div className="pr-5 text-xs cursor-pointer text-secondary">{headerRight}</div>
        ) : (
          headerRight
        )}
      </div>
      <div>{children}</div>
      {footer && footer}
    </div>
  );
};

export default WidgetBase;
