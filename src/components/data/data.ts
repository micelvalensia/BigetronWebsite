import {  card, member, news, result, sponsor, upcoming } from "../type/type";

export const dataResult :result[] = [
  {
    enemy: "Evos",
    teamScore: 0,
    enemyScore: 3,
    win: false,
    date: "20 Jul",
    time: "11:40 PM"
  },
  {
    enemy: "RRQ",
    teamScore: 2,
    enemyScore: 1,
    win: true,
    date: "21 Jul",
    time: "03:00 PM"
  },
  {
    enemy: "Alter Ego",
    teamScore: 1,
    enemyScore: 2,
    win: false,
    date: "22 Jul",
    time: "08:30 PM"
  },
  {
    enemy: "Liquid",
    teamScore: 3,
    enemyScore: 0,
    win: true,
    date: "23 Jul",
    time: "05:15 PM"
  },
  {
    enemy: "ONIC",
    teamScore: 2,
    enemyScore: 2,
    win: false,
    date: "24 Jul",
    time: "07:45 PM"
  },
  {
    enemy: "Geek Fam",
    teamScore: 1,
    enemyScore: 0,
    win: true,
    date: "25 Jul",
    time: "09:00 PM"
  }
];

export const dataUpcoming: upcoming[] = [{
    enemy: "Navi",
    date: "24 Jul",
    time: "11:10 PM"
}, {
    enemy: "Dewa",
    date: "10 May",
    time: "19:00"
}, {
    enemy: "Kagendra",
    date: "28 Feb",
    time: "22:10"
}]

export const dataNews:news[] = [{
  date: "15 May 2025",
  description: "Bigetron Esport Resmi Bergabung dengan Team Vitality",
  src: "/bigetronbyvit.jpg"
}, {
  date: "24 April 2025",
  description: "Hadapi Evos, Anavel siap membalas!",
  src: "/anavel.png"
}, {
  date: "17 March 2025",
  description: "Bigetron Esport: Peringkat 1 team indonesia di pmsl sea spring 2025",
  src: "/peringkat.jpg"
}]

export const cards: card[] = [
    {
      id: 0,
      title: "H3RO Esport 4.0",
      image: "/hero.jpg",
    },
    {
      id: 1,
      title: "Piala Presiden Esport",
      image: "/pilpres.jpg",
    },
    {
      id: 2,
      title: "MPL ID S13 Paruh Musim",
      image: "/regular.webp",
    },
  ];

  export const sponsors: sponsor[] = [
    { id: 1, name: "IQOO", logo: "/iqoo.png" },
    { id: 2, name: "Bagus", logo: "/bagus.png" },
    { id: 3, name: "Dunia Games", logo: "/dg.png" },
    { id: 4, name: "Yoritos", logo: "/yoritos.png" },
    { id: 5, name: "CBN Fiber", logo: "/cbn.png" },
  ];

  export const members: member[] = [
    { id: 0, title: "FINN", image: "/badang.jpg", hoverImage: "/fin.png" },
    { id: 1, title: "EMANN", image: "/chou.jpg", hoverImage: "/mobile.png" },
    { id: 2, title: "MORENO", image: "/valentina.jpg", hoverImage: "/moreno.png" },
    { id: 3, title: "NNAEL", image: "/lancelot.jpg", hoverImage: "/nael.png" },
    { id: 4, title: "SHOGUN", image: "/yuzong.jpg", hoverImage: "/shogun.png" },
    { id: 5, title: "RONN", image: "/fanny.jpg", hoverImage: "/ron.png" },
  ];