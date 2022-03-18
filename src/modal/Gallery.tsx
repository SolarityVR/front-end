export type GalleryItem = {
  title: string;
  collection: string;
  imageUrl: string;
  currentBid?: number;
  subtitle?: string;
  endingIn?: string;
  applicationNumber?:string;
  type?: "connect" | "bid" | "job";
  tag?: "New" | "Hot";
};

export type GalleryRow = {
  title: string;
  detail?: string;
  itemsPerRow?: number;
  items: GalleryItem[];
};

export type Gallery = {
  rows: GalleryRow[];
};

export type GalleryItemLand = {
  title: string;
  date: string;
  imageUrl: string;
  likes: number;
  invites: number;
};

export type GalleryRowLand = {
  title: string;
  items: GalleryItemLand[];
};

export type GalleryLand = {
  rows: GalleryRowLand[];
};

export type GalleryItemLaunchPad = {
  title: string;
  description: string;
  type: string;
  date: string;
  imageUrl: string;
  hero?: boolean;
  progress: number;
  featured?: boolean;
  funded?: boolean;
  creator?: {
    imageUrl: string;
    name: string;
    address: string;
  };
  fund: {
    raised: string;
    goal: string;
  };
};

export type GalleryRowLaunchPad = {
  title: string;
  description?: string;
  items: GalleryItemLaunchPad[];
  popular?: boolean;
};

export type GalleryLaunchPad = {
  rows: GalleryRowLaunchPad[];
};
