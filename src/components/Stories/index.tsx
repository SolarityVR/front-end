import React from "react";
import Image from "next/image";

const StoriesData = [
  {
    title: "Samira Brown",
    image: "/images/placeholder/stories/stories_one.png",
    avatarImage:'/images/placeholder/stories/avatars/one.png'
  },
  {
    title: "Mack Fritsch",
    image: "/images/placeholder/stories/stories_two.png",
    avatarImage:'/images/placeholder/stories/avatars/two.png'
  },
  {
    title: "Mattie Hamill I",
    image: "/images/placeholder/stories/stories_three.png",
    avatarImage:'/images/placeholder/stories/avatars/three.png'
  },
  {
    title: "Aaron Toy",
    image: "/images/placeholder/stories/stories_four.png",
    avatarImage:'/images/placeholder/stories/avatars/four.png'
  },
  {
    title: "SamiraRay Emard",
    image: "/images/placeholder/stories/stories_five.png",
    avatarImage:'/images/placeholder/stories/avatars/five.png'
  },
];

const Index = () => {
  return (
    <div className="flex flex-wrap items-center gap-4 snap-x">
      {StoriesData.map(({ title, image,avatarImage }, index) => (
        <div
          className="relative transition duration-200 ease-in-out cursor-pointer story-item hover:opacity-90 w-[109px] h-[143px] rounded-2xl"
          key={index}
        >
          <Image
            src={image}
            className="rounded-md"
            alt="stories image"
            layout="fill"
          />

          <div className="absolute top-0 left-0 flex flex-col justify-between py-3 ">
            <div className="ml-2 rounded-lg w-[30px] h-[30px] shadow-md">
              <Image
                src={avatarImage}
                height={30}
                width={30}
                className="border border-white rounded-lg w-[30px] h-[30px]"
                alt="avatar"
              />
            </div>
          </div>
          <div className="absolute w-full text-xs text-center text-white bottom-3">
            {title}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Index;
