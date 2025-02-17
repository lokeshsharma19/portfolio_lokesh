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
import html from "../assets/icon-html.svg";
import redux from "../assets/icon-redux.svg";
import css from "../assets/icon-css.svg";
import github from "../assets/icon-github.svg";
import postman from "../assets/icon-postman.svg";
import zod from "../assets/icon-zod.svg";
import docker from "../assets/icon-docker.svg";

const skillsData = [
  { icon: nextjs, name: "NextJS" },
  { icon: react, name: "ReactJS" },
  { icon: nodejs, name: "NodeJS" },
  { icon: postgresql, name: "PostgreSQL" },
  { icon: typescript, name: "Typescript" },
  { icon: javascript, name: "Javascript" },
  { icon: express, name: "ExpressJS" },
  { icon: mongodb, name: "MongoDB" },
  { icon: postman, name: "Postman" },
  { icon: prisma, name: "Prisma ORM" },
  { icon: cloudflare, name: "Cloudflare" },
  { icon: tailwind, name: "Tailwind CSS" },
  { icon: redux, name: "Redux" },
  { icon: git, name: "GIT" },
  { icon: html, name: "HTML5" },
  { icon: github, name: "Github" },
  { icon: docker, name: "Docker" },
  { icon: css, name: "CSS3" },
  { icon: zod, name: "Zod" },
];

const Skills = () => {
  return (
    <div id="skills" className="h-1/3 py-16 w-full flex flex-col items-center">
      <div className="bg-gray-200 text-gray-600 p-2 rounded-xl">
        <p className="text-sm">Skills</p>
      </div>
      <p className="mt-8">
        The skills, tools and technologies I am really good at:
      </p>
      <div className="flex flex-wrap w-5/6 lg:w-4/6 md:w-4/6 gap-4 lg:gap-8 justify-center mt-10">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center border-2 border-dotted border-gray-600 rounded-3xl p-2 md:p-4 lg:p-4 hover:bg-gray-200 transition-colors duration-100 cursor-pointer">
            <ReactSVG src={skill.icon} />
            <p className="mt-2">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
