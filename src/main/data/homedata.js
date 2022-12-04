import React from "react";

export const images = {
  background1: require("./bg1.jpg"),
  bgevent: require("./bg-event.jpg"),
  card1: require("./noimages.jpg"),
  carousel1: require("./carousel1.jpg"),
  carousel2: require("./carousel2.jpg"),
  carousel3: require("./carousel3.jpg"),
  carousel4: require("./carousel4.jpg"),
  payment1: require("./payment-01.png"),
  payment2: require("./payment-02.png"),
  payment3: require("./payment-03.png"),
  payment4: require("./payment-04.png"),
  payment5: require("./payment-05.png"),
  payment6: require("./payment-06.png"),
  payment7: require("./payment-07.png"),
  category1: require("./category-01.png"),
  category2: require("./category-02.png"),
  category3: require("./category-03.png"),
  japan: require("./flag/jp.gif"),
  italy: require("./flag/it.gif"),
  united: require("./flag/us.gif"),
  germany: require("./flag/de.gif"),
  england: require("./flag/flag-en.gif"),
  austria: require("./flag/at.gif"),
  taiwan: require("./flag/tw.gif"),
  korea: require("./flag/kr.gif"),
  france: require("./flag/fr.gif"),
  india: require("./flag/in.gif"),
  china: require("./flag/cn.gif"),
  thailand: require("./flag/th.gif"),

  honda: require("./japan/honda.jpg"),
  kawasaki: require("./japan/kawasaki.jpg"),
  suzuki: require("./japan/suzuki.jpg"),
  yamaha: require("./japan/yamaha.jpg"),

  piaggio: require("./italy/piaggio.jpg"),
  ducati: require("./italy/ducati.jpg"),
  benelli: require("./italy/benelli.jpg"),
  agusta: require("./italy/mv-agusta.jpg"),
  guzzi: require("./italy/36_moto-guzzi.jpg"),
  lambretta: require("./italy/lambretta.jpg"),

  harley: require("./united states/harley-davidson.jpg"),
  aprilia: require("./united states/aprilia.jpg"),
  vento: require("./united states/34_vento.jpg"),

  bmw: require("./germany/bmw.jpg"),
  sachs: require("./germany/sachs.jpg"),
  minsk: require("./germany/32_minsk.jpg"),

  royal: require("./england/royal-enfield.jpg"),
  triumph: require("./england/triumph.jpg"),

  ktm: require("./austria/ktm.jpg"),

  sym: require("./taiwan/sym.jpg"),
  kymco: require("./taiwan/kymco.jpg"),

  daelim: require("./korea/daelim.jpg"),
  daehan: require("./korea/daehan.jpg"),
  hyosung: require("./korea/hyosung.jpg"),

  mobylette: require("./france/mobylette.jpg"),

  bajaj: require("./india/bajaj-pulsar.jpg"),

  kengo: require("./china/30_kengo.png"),
  bosscity: require("./china/33_bosscity.jpg"),
  brixton: require("./china/37_brixton.jpg"),
  cfmoto: require("./china/40_cfmoto.jpg"),
  lifan: require("./china/42_lifan.jpg"),
  keeway: require("./china/keeway.jpg"),
  rebel: require("./china/rebel-usa.jpg"),
  kengvisitoro: require("./china/visitor.jpg"),

  gpx: require("./thailand/41_gpx.png"),
};

export const category = [images.category1, images.category2, images.category3];
export const textcategory = ["SHOPPING", "MOTO MARKET", "WEBBIKE NEWS"];
export const carousel = [
  images.carousel1,
  images.carousel2,
  images.carousel3,
  images.carousel4,
];

export const cards = [
  {
    image: images.card1,
    title: "Name 1",
    price: "20$",
  },
  {
    image: images.card1,
    title: "Name 2",
    price: "20$",
  },
  {
    image: images.card1,
    title: "Name 3",
    price: "20$",
  },
  {
    image: images.card1,
    title: "Name 4",
    price: "20$",
  },
  {
    image: images.card1,
    title: "Name 5",
    price: "20$",
  },
  {
    image: images.card1,
    title: "Name 6",
    price: "20$",
  },
  {
    image: images.card1,
    title: "Name 7",
    price: "20$",
  },
  {
    image: images.card1,
    title: "Name 8",
    price: "20$",
  },
  {
    image: images.card1,
    title: "Name 9",
    price: "20$",
  },
  {
    image: images.card1,
    title: "Name 10",
    price: "20$",
  },
  {
    image: images.card1,
    title: "Name 11",
    price: "20$",
  },
  {
    image: images.card1,
    title: "Name 12",
    price: "20$",
  },
];

export const brand1 = [
  {
    image: images.honda,
    title: "HONDA",
    amount: "374 xe",
  },
  {
    image: images.kawasaki,
    title: "KAWASAKI",
    amount: "374 xe",
  },
  {
    image: images.suzuki,
    title: "SUZUKI",
    amount: "374 xe",
  },
  {
    image: images.yamaha,
    title: "YAMAHA",
    amount: "374 xe",
  },
];

export const sidebar = [
  "HONDA",

  "YAMAHA",

  "SUZUKI",

  "KAWASAKI",

  "DUCATI",

  "BENELLI",
];

export const brandinfo = [
  { image: images.japan, title: "Nhật Bản" },
  { image: images.italy, title: "Ý" },
  { image: images.united, title: "Mỹ" },
  { image: images.germany, title: "Đức" },
  { image: images.england, title: "Anh" },
  { image: images.austria, title: "Áo" },
  { image: images.taiwan, title: "Đài Loan" },
  { image: images.korea, title: "Hàn Quốc" },
  { image: images.france, title: "Pháp" },
  { image: images.india, title: "Ấn Độ" },
  { image: images.china, title: "Trung Quốc" },
  { image: images.thailand, title: "Thái Lan" },
];
