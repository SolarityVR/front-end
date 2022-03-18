import React, { FC } from "react";
import MemberItem, { MemberProps } from "components/MembersList/Member";
import MemberItemVote from "components/MembersList/MemberVote";
import classNames from "classnames";

export interface MembersListProps {
  title: string;
  vote?: true;
  members: MemberProps[];
}

const Memebers: FC<MembersListProps> = ({ title, members, vote }) => {
  return (
    <div className="flex flex-col gap-8 p-8 bg-brandblack rounded-3xl">
      <span className="text-lg font-bold">{title}</span>
      <div className={classNames("flex", vote ? "flex-col gap-4" : "gap-16")}>
        {!!members && members.map((member, index) =>
          vote ? (
            <MemberItemVote {...member} key={index} />
          ) : (
            <MemberItem {...member} key={index} />
          )
        )}
      </div>
    </div>
  );
};

export default Memebers;
