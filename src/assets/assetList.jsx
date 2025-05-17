import boostrap from "./Boostrap-removebg-preview.png";
import canva from "./canva-logo-removebg-preview.png";
import css from "./css-removebg-preview.png";
import figma from "./figma-removebg-preview.png";
import html5 from "./htmlicon-removebg-preview.png";
import jsicon from "./jsicon-removebg-preview.png";
import mysql from "./mysql-removebg-preview.png";
import nodejs from "./nodejs-removebg-preview.png";
import photoshop from "./photoshop-removebg-preview.png";
import react from "./react-removebg-preview.png";
import tailwind from "./taiwind-removebg-preview.png";
import MilkTeaShop from "./MilkTeaShop.png";
import foolDev from "./foolDev.png";
import DatMonTaiBan from "./DatMonTaiBan.png";

export const assetList = {
  react,
  boostrap,
  tailwind,
  css,
  html5,
  jsicon,
  mysql,
  nodejs,
  photoshop,
  canva,
  figma,
  MilkTeaShop,
  foolDev,
  DatMonTaiBan,
};

export const skillList = [
  {
    id: 1,
    name: "React",
    image: assetList.react,
    colSpan: "col-span-2 sm:col-span-1 md:col-span-2",
  },
  {
    id: 2,
    name: "HTML",
    image: assetList.html5,
    colSpan: "col-span-2 sm:col-span-1 md:col-span-2",
    isNested: true, // cái này để tạo grid con cho 2 item nhỏ bên trong
    children: [
      {
        id: 21,
        name: "JavaScript",
        image: assetList.jsicon,
      },
      {
        id: 22,
        name: "CSS",
        image: assetList.css,
      },
    ],
  },
  {
    id: 3,
    name: "Nodejs",
    image: assetList.nodejs,
    colSpan: "col-span-2 sm:col-span-1 md:col-span-1",
  },
  {
    id: 4,
    name: "MySQL",
    image: assetList.mysql,
    colSpan: "col-span-2 sm:col-span-1 md:col-span-1",
  },
  {
    id: 5,
    name: "Bootstrap",
    image: assetList.boostrap,
    colSpan: "col-span-2 sm:col-span-2 md:col-span-1",
  },
  {
    id: 6,
    name: "Tailwind",
    image: assetList.tailwind,
    colSpan: "col-span-2 sm:col-span-2 md:col-span-3",
    isNested: true, // cái này để tạo grid con cho 2 item nhỏ bên trong
    children: [
      {
        id: 7,
        name: "Figma",
        image: assetList.figma,
        colSpan: "",
      },
      {
        id: 8,
        name: "Photoshop",
        image: assetList.photoshop,
        colSpan: "",
      },
    ],
  },
];
