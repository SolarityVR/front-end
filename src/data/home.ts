import { Post } from "modal/post";

export const POSTS: Post[] = [
  {
    title: "Solarity Art Collection: Trippy Room 1",
    subtitle: `Do you like what I just created?You can make it your own room</br> just buy it here! Or get a membership pass for all my creations ;)`,
    likes: 19,
    user:{
      avatar:'/images/placeholder/avatars/one.png',
      name:'GRP 🔆'
    },
    type: "featured",
    vr3: {
      featured: true,
      imageUrl: "/images/placeholder/post/post_one.png",
      price: 5,
    },
  },
  {
    title: "Announcement: Rug Pulling everybody tn?",
    subtitle: `idk got bored yare yare daze my name is giovanni giorgio but everybody calls me GIORGIO`,
    likes: 19,
    type: "announcement",
    user:{
      avatar:'/images/placeholder/avatars/two.png',
      name:'Money DAO ' 
    },
    tags: [
      {
        title: "Core",
        type: "secondary",
      },
      {
        title: "Important",
        type: "error",
      },
    ],
  },
  {
    title: "3D avatar made for <span class='text-secondary'> @AnActuallNFT</span> ",
    subtitle: `Good news NFT holders! If you have a Solarity card or this NFT you will get the metaverse ready 3D model! Or simply buy the piece`,
    likes: 19,
    type: "normal",
    user:{
      avatar:'/images/placeholder/avatars/one.png',
      name:'Union of Artists '
    },
    vr4: {
      featured: true,
      imageUrl: "/images/placeholder/post/post_one.png",
      price: 5,
    },
  },
  {
    title: "Tech Sub-DAO decisions",
    subtitle: `Energistically utilize resource maximizing functionalities without business initiatives. Enthusiastically unleash professional solutions vis-a-vis high-quality schemas. Holisticly transform premium synergy before seamless deliverables. Monotonectally maintain compelling materials without virtual testing procedures. Dramatically deploy sticky collaboration and idea-sharing without open-source materials.</br></br>
    Quickly restore accurate metrics through corporate customer service. Energistically synthesize enterprise outsourcing rather than competitive infrastructures. Appropriately target timely e-business through covalent alignments. `,
    likes: 19,
    type: "normal",
    user:{
      avatar:'/images/placeholder/avatars/one.png',
      name:'Lura 🐶'
    },
    tags: [
      {
        title: "London",
        type: "secondary",
      },
      {
        title: "Technical",
        type: "warning",
      },
    ],
  },
    {
    title: "Solarity's collection weekly <span class='text-secondary'> Airdrop</span> ",
    subtitle: `The weekly airdrop from our collection is here!el! Claim it now`,
    likes: 19,
    type: "normal",
    user:{
      avatar:'/images/placeholder/avatars/one.png',
      name:"Metaverse Union"
    },
    vr9: {
      featured: true,
      imageUrl: "/images/placeholder/post/post_one.png",
      price: 5,
    },
  },
];

export const TAGS = [
  "All",
  "Blockchain",
  "Tweets",
  "Your DAOs",
  "Mints",
  "Votes",
  "Proposals",
];

export const MY_DAOS = [
  {
    title: "Solarity",
    imageUrl: "/images/placeholder/your-dao/logotondo.png",
    link: "/dao/club-noriega",
  },
  {
    title: "Money Boys",
    imageUrl: "/images/placeholder/your-dao/moneyboys.png",
    link: "/dao/taraval-lounge",
  },
  {
    title: "Sol Gods",
    imageUrl: "/images/placeholder/your-dao/solgods.png",
    link: "/dao/pacheco-crew",
  },
  {
    title: "De Gods",
    imageUrl: "/images/placeholder/your-dao/degods.png",
    link: "/dao/club-noriega",
  },
];
