import { HeroProps } from "components/Hero";
import { TagsLinkCollectionProps } from "components/TagsCollection/Link";
import { Gallery, GalleryLand } from "modal/Gallery";
import { Post } from "modal/post";
import { MembersListProps } from "components/MembersList";
import { TokenBalancesProps } from "components/TokenBalances";
import { TransferTableProps } from "components/Tables/Transfer";
import { ContractProps } from "components/Contracts";
import { DaoCardProps } from "components/Cards/Dao";

export const HERO_DATA: HeroProps = {
  vrdao: {
    featured: true,
    imageUrl: "/images/placeholder/post/post_one.png",
  },
  content: {
    title: "Money Boy Verse",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, eget quisque pharetra, nisl. Nisl a proin a commodo libero purus duis. Leo, condimentum viverra mattis feugiat egestas est at nec. Praesent vitae fames feugiat diam mauris. Fringilla posuere quam enim id urna. Arcu, ut magna cursus pharetra semper a.",
    buttonText: "Join Now",
    buttonLink: "/join-now",
  },
};


export const HOME_POSTS: Post[] = [
  {
    title: "&#128264; Announcements: Weekly Pay Roll",
    subtitle: `4,444 Money Boys Building the metaverse. For the best insights and NFT analytic tools visit our platform`,
    likes: 19,
    type: "announcement",
    user:{
      avatar:'/images/placeholder/avatars/one.png',
      name:'Leonora 🔆'
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
    title: "Yoo I'm gonna be broker, we just addes slots! ",
    subtitle: `Building the metaverse block by block with the open framework of webXR. <br/>Let's revoultionize web3XR together!`,
    likes: 19,
    user:{
      avatar:'/images/placeholder/avatars/two.png',
      name:'Amari 🔆'
    },
    type: "featured",
    vr: {
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
      name:'GRP 🔆'
    },
    tags: [
      {
        title: "Developers",
        type: "secondary",
      },
      {
        title: "Technical",
        type: "warning",
      },
    ],
  },
  {
    title: "Should we switch to <span class='text-secondary'> Minecraft</span> skins?",
    subtitle: `Exploring the launchpad section I found this guy who reproduced Minecraft in VR with just JS. With a few clicks we could have those textures.
    <br>Pretty sure it is just a matter of APIs to get Sol running inside of it, pumped!  `,
    likes: 19,
    type: "normal",
    user:{
      avatar:'/images/placeholder/avatars/one.png',
      name:'GRP 🔆'
    },
    vr7: {
      featured: true,
      imageUrl: "/images/placeholder/post/post_one.png",
      price: 5,
    },
    tags: [
      {
        title: "Everybody",
        type: "secondary",
      },
      {
        title: "Important",
        type: "error",
      },
    ],
  },
];

export const TAGS: TagsLinkCollectionProps = {
  tags: [
    {
      label: "Home",
      link: "/daos/moneyboys",
    },
    {
      label: "Marketplace",
      link: "/daos/moneyboys/market",
    },
    {
      label: "Voting",
      link: "/daos/moneyboys/voting",
    },
    {
      label: "Members",
      link: "/daos/moneyboys/members",
    },
    {
      label: "Vault",
      link: "/daos/moneyboys/vault",
    },
    {
      label: "Infra",
      link: "/daos/moneyboys/infra",
    },
    {
      label: "Marketplace",
      link: "/daos/moneyboys/market",
    },

  ],
};

export const GALLERY: Gallery = {
  rows: [
    {
      title: "Avatars",
      items: [
        {
          title: "Diamond Boy",
          collection: "Mansions",
          imageUrl: "/images/giff.gif",
          currentBid: 10,
          endingIn: "12h  43m  27s",
        },
        {
          title: "Money Girl",
          collection: "Mansions",
          imageUrl: "/images/girl.jpeg",
          currentBid: 10,
          endingIn: "12h  43m  27s",
        },
        {
          title: "Money Boy",
          collection: "Mansions",
          imageUrl: "/images/placeholder/daos/gallery/avatar_three.png",
          currentBid: 10,
          endingIn: "12h  43m  27s",
        },
      ],
    },
    {
      title: "Land & Mansions",
      items: [
        {
          title: "7 X 7 Size #1231",
          collection: "Mansions",
          imageUrl: "/images/placeholder/marketplace/gallery/mansion.jpg",
          currentBid: 10,
          endingIn: "12h  43m  27s",
        },
        {
          title: "7 X 7 Size #1231",
          collection: "Mansions",
          imageUrl: "/images/placeholder/marketplace/gallery/moneymansion.jpg",
          currentBid: 10,
          endingIn: "12h  43m  27s",
        },
        {
          title: "7 X 7 Size #1231",
          collection: "Mansions",
          imageUrl: "/images/placeholder/marketplace/gallery/moneycrib.jpg",
          currentBid: 10,
          endingIn: "12h  43m  27s",
        },
      ],
    },

    {
      title: "3D Assets",
      items: [
        {
          title: "VR & Crypto headset",
          collection: "Mansions",
          imageUrl: "/images/vr.gif",
          currentBid: 10,
          endingIn: "12h  43m  27s",
        },
        {
          title: "Golden Coin",
          collection: "Mansions",
          imageUrl: "/coin.gif",
          currentBid: 10,
          endingIn: "12h  43m  27s",
        },
        {
          title: "Motorcycle",
          collection: "Mansions",
          imageUrl: "/images/3DModel.gif",
          currentBid: 10,
          endingIn: "12h  43m  27s",
        },
      ],
    },
  ],
};

export const POSTS: Post[] = [
  {
    title: "Announcements: We are partnering with Solarity",
    subtitle: `4,444 Money Boys Building the metaverse. For the best insights and NFT analytic tools visit our platform`,
    likes: 19,
    type: "announcement",
    progress: 85,
    user:{
      avatar:'/images/placeholder/avatars/boh.png',
      name:'0x'
    },
    
    tags: [
      {
        title: "Core",
        type: "secondary",
      },
      {
        title: "Technical",
        type: "warning",
      },
    ],
  },
  {
    title: "Alpha Polls: Which NFT should we buy?",
    subtitle: `4,444 Money Boys Building the metaverse. For the best insights and NFT analytic tools visit our platform`,
    likes: 19,
    type: "announcement",
    progress: 85,
    user:{
      avatar:'/images/placeholder/avatars/solboys.png',
      name:'tMETA 🔆'
    },
    
    tags: [
      {
        title: "Core",
        type: "secondary",
      },
      {
        title: "Community",
        type: "error",
      },
    ],
  },
  {
    title: "Developers: Raise pay of Front End by 10%",
    subtitle: `4,444 Money Boys Building the metaverse. For the best insights and NFT analytic tools visit our platform`,
    likes: 19,
    type: "announcement",
    progress: 85,
    user:{
      avatar:'/images/placeholder/avatars/metro.png',
      name:'Young Metro'
    },
    
    tags: [
      {
        title: "Core",
        type: "secondary",
      },
      {
        title: "Developer",
        type: "error",
      },
    ],
  },
  {
    title: "Funding Request: A better index",
    subtitle: `4,444 Money Boys Building the metaverse. For the best insights and NFT analytic tools visit our platform`,
    likes: 19,
    type: "announcement",
    progress: 85,
    user:{
      avatar:'/images/placeholder/avatars/boh.png',
      name:'Briggs'
    },
    
    tags: [
      {
        title: "Core",
        type: "secondary",
      },
      {
        title: "Artist",
        type: "warning",
      },
    ],
  },
  {
    title: "Investment Proposal: Solarity",
    subtitle: `4,444 Money Boys Building the metaverse. For the best insights and NFT analytic tools visit our platform`,
    likes: 19,
    type: "announcement",
    progress: 85,
    user:{
      avatar:'/images/placeholder/avatars/boh.png',
      name:'GRP 🔆'
    },
    
    tags: [
      {
        title: "Core",
        type: "secondary",
      },
      {
        title: "Community",
        type: "warning",
      },
    ],
  },
  {
    title: "Elections: Which Money Boy is the best?",
    subtitle: `4,444 Money Boys Building the metaverse. For the best insights and NFT analytic tools visit our platform`,
    likes: 19,
    type: "announcement",
    progress: 85,
    user:{
      avatar:'/images/placeholder/avatars/solboys.png',
      name:'Briggs '
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
];

export const Members: MembersListProps[] = [
  {
    title: "C Suite",
    members: [
      {
        name: "$MB 0x",
        post: "Dev & Artist",
        imageUrl: "/images/placeholder/dao-connect/connect/one.png",
        points: "+ 124",
      },
      {
        name: "$MB Briggs",
        post: "Operating Officer",
        imageUrl: "/images/placeholder/dao-connect/connect/four.png",
        points: "+ 652",
      },
      {
        name: "$MB stickyric3",
        post: "Marketing Head",
        imageUrl: "/images/placeholder/dao-connect/connect/two.png",
        points: "+ 145",
      },
    ],
  },
  {
    title: "Mosst Active Money Boys",
    vote: true,
    members: [
      {
        name: "$MB Ciao",
        post: "Marketing Head",
        imageUrl: "/images/placeholder/avatars/metro.png",
        points: "+ 652",
        votes: "30",
        voteColor: "general",
      },
      {
        name: "$MB Briggs",
        post: "UI UX designer",
        imageUrl: "/images/placeholder/avatars/solboys.png",
        points: "+ 652",
        votes: "40",
        voteColor: "general",
      },
      {
        name: "$MB Metro",
        post: "Website Creator",
        imageUrl: "/images/placeholder/avatars/boh.png",
        points: "+ 145",
        votes: "45",
        voteColor: "general",
      },
      {
        name: "$MB 0x",
        post: "Marketing Head",
        imageUrl: "/images/placeholder/avatars/metro.png",
        points: "+ 652",
        votes: "50",
        voteColor: "general",
      },
      {
        name: "$MB GRP",
        post: "UI UX designer",
        imageUrl: "/images/placeholder/avatars/solboys.png",
        points: "+ 652",
        votes: "70",
        voteColor: "info",
      },

      {
        name: "$MB tMETA",
        post: "Website Creator",
        imageUrl: "/images/placeholder/avatars/boh.png",
        points: "+ 145",
        votes: "100",
        voteColor: "warning",
      }, 
    ],
  },
];

export const WORLD_GALLERY: GalleryLand = {
  rows: [
    {
      title: "Highlighted Lands:",
      items: [
        {
          title: "Poker w/ the boys",
          date: "19:30 CET, 21 MAR",
          likes: 239,
          invites: 420,
          imageUrl: "/images/placeholder/daos/world/one.png",
        },
        
      ],
    },
  ],
};

export const TOKEN_BALANCES: TokenBalancesProps = {
  title: "Treasury Token Balances \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0  124414414 USD",
  tokens: [
    {
      title: "SOL",
      imageUrl: "/images/icons/tokens/solana.png",
      volume: "1052.96",
      amount: "$351420.22",
    },
    {
      title: "$MB",
      imageUrl: "/images/icons/tokens/moneycoin.png",
      volume: "400000.1",
      amount: "$637053.22",
    },
    {
      title: "VERSE",
      imageUrl: "/images/icons/solarityround.png",
      volume: "555000.96",
      amount: "$484716.16",
    },
    {
      title: "DUST",
      imageUrl: "/images/icons/tokens/degodsss.png",
      volume: "768870.8",
      amount: "$771184.35",
    },
    {
      title: "ZION",
      imageUrl: "/images/icons/tokens/zion.png",
      volume: "2983.96",
      amount: "$637053.22",
    },
    {
      title: "ETH",
      imageUrl: "/images/icons/tokens/eth.png",
      volume: "2983.96",
      amount: "$637053.22",
    },
    {
      title: "ANJ",
      imageUrl: "/images/icons/tokens/anj.png",
      volume: "400000.1",
    },
    {
      title: "ANT",
      imageUrl: "/images/icons/tokens/ant.png",
      volume: "555000.96",
      amount: "$484716.16",
    },
    {
      title: "DAI",
      imageUrl: "/images/icons/tokens/ant.png",
      volume: "768870.8",
      amount: "$771184.35",
    },
    {
      title: "SOL",
      imageUrl: "/images/icons/tokens/sol.png",
      volume: "1052.96",
      amount: "$351420.22",
    },
  ],
};

export const TRANSFER_TABLE_PROPS: TransferTableProps = {
  rows: [
    {
      date: "04/20/22",
      source: "@Monke13 ( Art DAU ...)",
      reference: "Devs subDAO : KYC Deposit for Kyber fees",
      amount: "+10585.73003 $MB",
      type: "plus",
    },
    {
      date: "04/20/22",
      source: "0xffd0456704...10.....",
      reference: "Art subDAO : Weekly compensation ($MB)",
      amount: "-670 $VERSE",
      type: "minus",
    },
    {
      date: "04/20/22",
      source: "Luise ( Association ...)",
      reference: "DAO payout : KYC Deposit for Kyber fees",
      amount: "+10585.73003 KNC",
      type: "plus",
    },
    {
      date: "04/20/22",
      source: "0xffd0456704...10.....",
      reference: "Solarity : Contribution to the Open Metaverse",
      amount: "-670 ETH",
      type: "minus",
    },
  ],
};

export const INFRA_CONTRACTS: ContractProps[] = [
  {
    avatartImage: "/images/placeholder/avatars/solboys.png",
    title: "Build the Smart Contracts for infra-DAO payment",
    subtitle:
      "Looking for an experienced designer to make ONE eye catching thumbnail for YouTube! Will provide design brief and assets upon application. Looking to build a long term relationship with a designer as I will be making a lot more videos in the future!",
    likes: 19,
    price: "Fixed-Price",
    experience: "Expert",
    budget: "250 SOL",
    deadline: "08-13-23",
  },
  {
    avatartImage: "/images/placeholder/your-dao/degods.png",
    title: "Code Audit of Solarity",
    subtitle:
      "Looking for an experienced designer to make ONE eye catching thumbnail for YouTube! Will provide design brief and assets upon application. Looking to build a long term relationship with a designer as I will be making a lot more videos in the future!",
    likes: 19,
    price: "Fixed-Price",
    experience: "Expert",
    budget: "250 SOL",
    deadline: "08-13-23",
  },
  {
    avatartImage: "/images/placeholder/your-dao/moneyboys.png",
    title: "Avatar Creation and Metaverse development",
    subtitle:
      "Looking for an experienced designer to make ONE eye catching thumbnail for YouTube! Will provide design brief and assets upon application. Looking to build a long term relationship with a designer as I will be making a lot more videos in the future!",
    likes: 19,
    price: "Fixed-Price",
    experience: "Expert",
    budget: "250 SOL",
    deadline: "08-13-23",
  },
  {
    avatartImage: "/images/placeholder/avatars/solboys.png",
    title: "Mobile app Developer",
    subtitle:
      "Looking for an experienced designer to make ONE eye catching thumbnail for YouTube! Will provide design brief and assets upon application. Looking to build a long term relationship with a designer as I will be making a lot more videos in the future!",
    likes: 19,
    price: "Fixed-Price",
    experience: "Expert",
    budget: "250 SOL",
    deadline: "08-13-23",
  },
];

export const YOUR_DAO: DaoCardProps[] = [
  {
    title: "Money Boys",
    imageURL: "/images/placeholder/your-dao/moneyboys.png",
    pageURL: "/daos/moneyboys"
  },
  {
    title: "SolGods",
    imageURL: "/images/placeholder/your-dao/solgods.png",
    pageURL: "/daos/SolGods"
  },
  {
    title: "DeDAO",
    imageURL:'/images/placeholder/your-dao/degods.png',
    pageURL: "/daos/deDAO"
  },
  {
    title: "MonkeDAO",
    imageURL:'/images/placeholder/avatars/monkeround.png',
    pageURL: "/daos/MonkeDAO"
  },
  {
    title: "DegenDAO",
    imageURL:'/images/placeholder/avatars/degencircle.png',
    pageURL: "/daos/DegenDAO"
  }
];

export const YOUR_UNIONS: DaoCardProps[] = [
  {
    title: "WebXR Union",
    imageURL: "/images/placeholder/your-dao/webxr.png",
    pageURL: ""
  },
  {
    title: "Sol Devs Union",
    imageURL: "/images/icons/tokens/solana.png",
    pageURL: ""
  },
  {
    title: "Sol Devs Union",
    imageURL:'/images/placeholder/daos/rust-modified.png',
    pageURL: ""
  },
  {
    title: "3D Union",
    imageURL:'/images/placeholder/daos/diocane-modified.png',
    pageURL: ""
  },
  {
    title: "Gov Union",
    imageURL:'/images/placeholder/daos/yours/five.png',
    pageURL: ""
  }
];


export const DISCOVER: DaoCardProps[] = [
  {
    title: "Yield Farming",
    imageURL: "/images/placeholder/daos/yours/discover/1.png",
    pageURL: ""
  },
  {
    title: "SCTF1",
    imageURL: "/images/placeholder/daos/yours/discover/2.png",
    pageURL: ""
  },
  {
    title: "SERUM",
    imageURL:'/images/placeholder/daos/yours/discover/3.png',
    pageURL: ""
  },
  {
    title: "Off My Head",
    imageURL:'/images/placeholder/daos/yours/discover/4.png',
    pageURL: ""
  },
  {
    title: "Soltato",
    imageURL:'/images/placeholder/daos/yours/discover/5.png',
    pageURL: ""
  },
  {
    title: "Metaplex Foundation",
    imageURL: "/images/placeholder/daos/yours/discover/6.png",
    pageURL: ""
  },
  {
    title: "21DAO",
    imageURL: "/images/placeholder/daos/yours/discover/7.png",
    pageURL: ""
  },
  {
    title: "Cardinal",
    imageURL:'/images/placeholder/daos/yours/discover/8.png',
    pageURL: ""
  },
  {
    title: "21DAO",
    imageURL:'/images/placeholder/daos/yours/discover/9.png',
    pageURL: ""
  },
  {
    title: "OVERNANCE DAO",
    imageURL:'/images/placeholder/daos/yours/discover/10.png',
    pageURL: ""
  },
  {
    title: "Friends and Family DAO",
    imageURL: "/images/placeholder/daos/yours/discover/11.png",
    pageURL: ""
  },
  {
    title: "The Sanctuary",
    imageURL: "/images/placeholder/daos/yours/discover/12.png",
    pageURL: ""
  },
  {
    title: "Phantasia",
    imageURL:'/images/placeholder/daos/yours/discover/13.png',
    pageURL: ""
  },
  {
    title: "Strangemood Foundation",
    imageURL:'/images/placeholder/daos/yours/discover/14.png',
    pageURL: ""
  },
  {
    title: "GRAPE",
    imageURL:'/images/placeholder/daos/yours/discover/15.png',
    pageURL: ""
  },
  {
    title: "MonkeDAO",
    imageURL: "/images/placeholder/daos/yours/discover/16.png",
    pageURL: ""
  },
  {
    title: "MonkOG DAO",
    imageURL: "/images/placeholder/daos/yours/discover/17.png",
    pageURL: ""
  },
  {
    title: "NoGoalDAO",
    imageURL:'/images/placeholder/daos/yours/discover/18.png',
    pageURL: ""
  },
  {
    title: "Marinade.Finance",
    imageURL:'/images/placeholder/daos/yours/discover/19.png',
    pageURL: ""
  },
  {
    title: "Chicken Tribe",
    imageURL:'/images/placeholder/daos/yours/discover/20.png',
    pageURL: ""
  }
];
