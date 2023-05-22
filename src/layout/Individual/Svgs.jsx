import React from "react";
import nodelogo from "../../img/svg/node.svg";
import puglogo from "../../img/svg/pug.svg";
import javascript from "../../img/svg/js.svg";
import mongo from "../../img/svg/mongo.svg";
import express from "../../img/svg/express.svg";
import skeleton from "../../img/svg/skeleton.svg";
import mysql from "../../img/svg/mysql.svg";
import react from "../../img/svg/react.svg";
import bootstrap from "../../img/svg/bootstrap.svg";
import tailwind from "../../img/svg/tailwind.svg";
import typescript from "../../img/svg/typescript.svg";
import vite from "../../img/svg/vite.svg";
import mui from "../../img/svg/mui.svg";
import firebase from "../../img/svg/firebase.svg";



const Svgs = ({ icon = "node" }) => {
  if (icon === "NodeJS") return <img alt={icon} key={icon} width={'15px'} height={'15px'} src={nodelogo} />;
  if (icon === "React") return <img alt={icon} key={icon} width={'15px'} height={'15px'} src={react} />;
  if (icon === "PUG") return <img alt={icon} key={icon} width={'15px'} height={'15px'} src={puglogo} />;
  if (icon === "JavaScript") return <img alt={icon} key={icon} width={'15px'} height={'15px'} src={javascript} />;
  if (icon === "Express") return <img alt={icon} key={icon} width={'15px'} height={'15px'} src={express} />;
  if (icon === "MongoDB") return <img alt={icon} key={icon} width={'15px'} height={'15px'} src={mongo} />;
  if (icon === "Skeleton") return <img alt={icon} key={icon} width={'15px'} height={'15px'} src={skeleton} />;
  if (icon === "MySQL") return <img alt={icon} key={icon} width={'15px'} height={'15px'} src={mysql} />;
  if (icon === "Bootstrap") return <img alt={icon} key={icon} width={'15px'} height={'15px'} src={bootstrap} />;
  if (icon === "TailwindCSS") return <img alt={icon} key={icon} width={'15px'} height={'15px'} src={tailwind} />;
  if (icon === "Typescript") return <img alt={icon} key={icon} width={'15px'} height={'15px'} src={typescript} />;
  if (icon === "Vite") return <img alt={icon} key={icon} width={'15px'} height={'15px'} src={vite} />;
  if (icon === "MUI") return <img alt={icon} key={icon} width={'15px'} height={'15px'} src={mui} />;
  if (icon === "Firebase") return <img alt={icon} key={icon} width={'15px'} height={'15px'} src={firebase} />;
};
export default Svgs;
