import React from "react";
import { ReactSVG } from "react-svg";
import react from "../assets/icon-react.svg";
import nodejs from "../assets/icon-nodejs.svg";
import express from "../assets/icon-express.svg";
import postgresql from "../assets/icon-postgresql.svg";
import mongodb from "../assets/icon-mongodb.svg";
// import figma from "../assets/icon-figma.svg";
import git from "../assets/icon-git.svg";
import javascript from "../assets/icon-javascript.svg";
import nextjs from "../assets/icon-nextjs.svg";
import typescript from "../assets/icon-typescript.svg";
import prisma from "../assets/icon-prisma.svg";
import tailwind from "../assets/icon-tailwindcss.svg";
import cloudflare from "../assets/icon-cloudflare.svg";

const Skills = () => {
  return (
    <div className="h-1/3 py-16 px-24 flex flex-col items-center">
      <div className=" bg-gray-200 text-gray-600 p-2 rounded-xl ">
        <p className="text-sm ">Skills</p>
      </div>
      <p className="mt-8">
        The skills, tools and technologies I am really good at:
      </p>
      <div className="flex flex-wrap w-full gap-16 justify-center mt-10">
        <div className=" flex flex-col items-center justify-center">
          <ReactSVG src={nextjs} />
          <p>Next.js</p>
        </div>
        <div className="flex flex-col items-center justify-center ">
          <ReactSVG src={react} />
          <p>React.js</p>
        </div>
        <div className=" flex flex-col items-center justify-center">
          <ReactSVG src={nodejs} />
          <p>Node.js</p>
        </div>
        <div className=" flex flex-col items-center justify-center">
          <ReactSVG src={postgresql} />
          <p>PostgreSql</p>
        </div>
        <div className="flex flex-col items-center justify-center ">
          <ReactSVG src={typescript} />
          <p>Typescript</p>
        </div>
        <div className=" flex flex-col items-center justify-center">
          <ReactSVG src={javascript} />
          <p>Javascript</p>
        </div>
        <div className="flex flex-col items-center justify-center ">
          <ReactSVG src={express} />
          <p>Express</p>
        </div>
        <div className=" flex flex-col items-center justify-center">
          <ReactSVG src={mongodb} />
          <p>Mongodb</p>
        </div>
        <div className="flex flex-col items-center justify-center ">
          <ReactSVG src={prisma} />
          <p>Prisma ORM</p>
        </div>
        <div className=" flex flex-col items-center justify-center">
          <ReactSVG src={cloudflare} />
          <p>Cloudflare</p>
        </div>
        <div className=" flex flex-col items-center justify-center">
          <ReactSVG src={tailwind} />
          <p>Tailwind</p>
        </div>
        <div className=" flex flex-col items-center justify-center">
          <ReactSVG src={git} />
          <p>Git</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
