import React, { FC } from "react";
import PostComp from "components/Post";
import { Post } from "modal/post";

interface IProps {
  posts: Post[];
}

const Posts: FC<IProps> = ({ posts }) => {
  return (
    <div className="flex flex-col gap-1 pb-5">
      {posts.map((post, index) => (
        <PostComp key={index} data={post} />
      ))}
    </div>
  );
};

export default Posts;
