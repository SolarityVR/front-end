import React from "react";
import Stories from "components/Stories";
import TagsCollection from "components/TagsCollection";
import Posts from 'modules/Home/Posts'

import {POSTS, TAGS} from 'data/home'

const HomeModule = () => {
  const handleTagChange = (tag: string) => {
    console.log(tag);
  };
  return (
    <div className="flex flex-col overflow-y-auto space-y-7">
      <Stories />
      <TagsCollection onChange={handleTagChange} tags={TAGS} />
      <Posts posts={POSTS}/>
    </div>
  );
};

export default HomeModule;
