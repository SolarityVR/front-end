import { Post } from "modal/post";
import { TokenBalancesProps } from "components/TokenBalances";
import { TransferTableProps1 } from "components/Tables/Transfer1";

export const MENU_LINKS = [
  {
    title: "Profile",
    link: "/profile",
    exact: true,
  },
  {
    title: "Art",
    link: "/profile/art",
    exact: true,
  },
  {
    title: "Pay Roll",
    link: "/profile/payout",
    exact: true,
  },
  {
    title: "Staking",
    link: "/profile/groups",
    exact: true,
  },
  {
    title: "Assets",
    link: "/profile/assets",
    exact: true,
  },
];

export const PROFILE_POSTS: Post[] = [
  {
    title: "Played <span class='text-secondary'>Super Mario 101</span>",
    subtitle: `Holy molly this is insane! As an Italian it brought me back so many memories!<br>
    There were a few bugs, I will remix it on Glitch and fix them.`,
    likes: 19,
    type: "featured",
    user:{
      avatar:'/images/placeholder/avatars/one.png',
      name:'tMΞTA 🔆'
    },
    vr5: {
      featured: true,
      imageUrl: "/images/placeholder/post/post_one.png",
      price: 5,
    },
  },
  {
    title: "Recently Aped in <span class='text-secondary'>SOL</span>",
    subtitle: ``,
    likes: 19,
    type: "featured",
    user:{
      avatar:'/images/placeholder/avatars/one.png',
      name:'tMΞTA 🔆'
    },
    tags: [
      {
        title: "Blockchain Activity",
        type: "secondary",
      },
      {
        title: "Degen",
        type: "error",
      },
    ],
  },
  {
    title: "Tech Sub-DAO decisions",
    subtitle: `Energistically utilize resource maximizing functionalities without business initiatives. Enthusiastically unleash professional solutions vis-a-vis high-quality schemas. Holisticly transform premium synergy before seamless deliverables. Monotonectally maintain compelling materials without virtual testing procedures. Dramatically deploy sticky collaboration and idea-sharing without open-source materials.</br></br>
    Quickly restore accurate metrics through corporate customer service. Energistically synthesize enterprise outsourcing rather than competitive infrastructures. Appropriately target timely e-business through covalent alignments. `,
    likes: 19,
    type: "normal",
    user:{
      avatar:'/images/placeholder/avatars/one.png',
      name:'tMΞTA 🔆'
    },
    tags: [
      {
        title: "Developer",
        type: "secondary",
      },
      {
        title: "Technical",
        type: "warning",
      },
    ],
  },
  {
    title: "Money Girl Airdrop",
    subtitle: `Ok I was not expecting this, thanks <span class="text-secondary">@$MB</span>! You convinced me, just bought 1. <br> One of the many perks of being part of an Union, airdrop from NFTs you don't hold!<br>
    You can really explore the ecosystem now with these incentives.`,
    likes: 19,
    type: "normal",
    user:{
      avatar:'/images/placeholder/avatars/one.png',
      name:'tMΞTA 🔆'
    },
    vr8: {
      featured: true,
      imageUrl: "/images/placeholder/post/post_one.png",
      price: 5,
    },
  },
]
  export const TOKEN_BALANCES: TokenBalancesProps = {
    title: "Treasury Token Balances",
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
  }
  
  export const TRANSFER_TABLE_PROPS: TransferTableProps1 = {
    rows: [
      {
        date: "04/20/22",
        source: "$MB Airdrop ( Art DAU ...)",
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
        source: "Artist Union",
        reference: "DAO payout : Being a fantasic member of our community",
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


