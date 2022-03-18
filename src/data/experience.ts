import { 
  BigRoomType, 
  RoomsType, 
  LiveRoomsType,
} from "modal/experience";

export const BIG_ROOM: BigRoomType = {
  scene: {
    bgImage: "/images/placeholder/post/post_one.png",
  },
  content: {
    title: "Plaza",
    description:
      "  Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    buttonText: "Join a Game",
    buttonLink: "/join-room",
    avatars: []
  },
};

export const ROOM: RoomsType = {
  rows: [
    {
      imageUrl: "/images/placeholder/marketplace/gallery/one.png",
      title: 'tMETA Room',
      description: 'Lorem ipsum dolor sit amet, consectetur',
      avatars: ['', '', '', ''],
    },
    {
      imageUrl: "/images/placeholder/marketplace/gallery/one.png",
      title: 'MoneyBriggs',
      description: 'Lorem ipsum dolor sit amet, consectetur',
      avatars: ['', '', ''],
    },
    {
      imageUrl: "/images/placeholder/marketplace/gallery/one.png",
      title: 'Decentralart',
      description: 'Lorem ipsum dolor sit amet, consectetur',
      avatars: ['', '', '', '', ''],
    },
    {
      imageUrl: "/images/placeholder/marketplace/gallery/one.png",
      title: 'Decentralart',
      description: 'Lorem ipsum dolor sit amet, consectetur',
      avatars: [],
    },
    {
      imageUrl: "/images/placeholder/marketplace/gallery/one.png",
      title: 'Decentralart',
      description: 'Lorem ipsum dolor sit amet, consectetur',
      avatars: [],
    },
    {
      imageUrl: "/images/placeholder/marketplace/gallery/one.png",
      title: 'Decentralart',
      description: 'Lorem ipsum dolor sit amet, consectetur',
      avatars: [],
    },
    {
      imageUrl: "/images/placeholder/marketplace/gallery/one.png",
      title: 'Decentralart',
      description: 'Lorem ipsum dolor sit amet, consectetur',
      avatars: [],
    },
    {
      imageUrl: "/images/placeholder/marketplace/gallery/one.png",
      title: 'Decentralart',
      description: 'Lorem ipsum dolor sit amet, consectetur',
      avatars: ['', ''],
    },
    {
      imageUrl: "/images/placeholder/marketplace/gallery/one.png",
      title: 'Decentralart',
      description: 'Lorem ipsum dolor sit amet, consectetur',
      avatars: [],
    },
  ]
}

export const LIVE_ROOM: LiveRoomsType = {
  rows: [
    {
      title: 'Decentralart',
      creator: 'xxx',
      avatars: ['', '', ''],
    },
    {
      title: 'Decentralart',
      creator: 'xxx',
      avatars: ['', '', '', ''],
    },
    {
      title: 'Decentralart',
      creator: 'xxx',
      avatars: ['', ''],
    },
    {
      title: 'Decentralart',
      creator: 'xxx',
      avatars: [],
    },
    {
      title: 'Decentralart',
      creator: 'xxx',
      avatars: ['',],
    },
  ]
};