import React from "react";
import profilePic from "./profile-pic.png";
import PlaceIcon from "@mui/icons-material/Place";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Intro = () => {
  return (
    <div className="px-24 flex flex-wrap-reverse justify-center h-2/3 py-16">
      <div className="content lg:w-1/2 flex flex-col justify-between">
        <div className="">
          <p className=" text-gray-900 text-6xl py-8">Hi, I'm Lokesh 👋</p>
          <p>
            I'm a passionate full-stack developer specializing in React and
            Node.js. With over 2 years of experience in this field, I've
            mastered the art of creating fast, visually appealing, and
            responsive web applications. I take pride in my ability to deliver
            projects that are not only efficient and scalable but also adhere to
            best practices in code segregation. My focus on writing clean,
            readable code ensures that every project I work on is built for
            maintainability and future growth.
          </p>
        </div>
        <div className=" mt-4">
          <div className="flex items-center">
            <div className="mr-2">
              <PlaceIcon />
            </div>
            <p>Pune, Maharashtra, India</p>
          </div>
          <div className="flex items-center">
            <div className=" flex justify-center items-center mx-2">
              <div className=" bg-available h-2 w-2 rounded-full mr-2"></div>
            </div>
            <p>Available for new projects</p>
          </div>
        </div>
        <div className=" flex w-1/3 justify-around mt-4">
          <a href="https://x.com/lokeshshrma19" target="_blank">
            <div className="h-8 flex justify-center items-center w-8">
              <XIcon />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/lokeshas1/" target="_blank">
            <div className="h-8 flex justify-center items-center w-8">
              <LinkedInIcon />
            </div>
          </a>
          <a href="https://github.com/lokeshsharma19" target="_blank">
            <div className="h-8 flex justify-center items-center w-8">
              <GitHubIcon />
            </div>
          </a>
        </div>
      </div>
      <div className="image lg:w-1/2 flex justify-center py-16">
        <div className=" w-72 h-72 border-2 rounded-full shadow-rbShadow">
          <img src={profilePic} alt="profile-Lokesh Sharma" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
