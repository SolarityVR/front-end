export type RoomSceneType = {
  bgImage: string;
};

export type RoomType = {
  imageUrl: string;
  title: string;
  description: string;
  avatars: string[];
};

export type BigRoomType = {
  scene: RoomSceneType;
  content?: {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
    avatars: string[];
  };
}

export type RoomsType = {
  rows: RoomType[];
};

export type LiveRoomType = {
  title: string;
  creator: string;
  avatars: string[];
};

export type LiveRoomsType = {
  rows: LiveRoomType[];
};
