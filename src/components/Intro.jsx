import { useEffect, useState } from "react";
import profilePic from "../assets/profile-pic.png";
import PlaceIcon from "@mui/icons-material/Place";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion, AnimatePresence } from "framer-motion";

const roles = [
  "Lokesh",
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
];

const Intro = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="intro"
      className="lg:px-24 px-4 flex flex-wrap-reverse justify-center h-2/3 py-16">
      <div className="content lg:w-1/2 flex flex-col justify-between">
        <div className="">
          <p className="text-gray-900 text-2xl lg:text-5xl py-8">
            {`Hi 👋, I'm `}
            <span className="relative h-11 inline-block whitespace-nowrap">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roles[index]}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute">
                  [ {roles[index]} ]
                </motion.span>
              </AnimatePresence>
            </span>
          </p>
          <ul className="list-none space-y-3 text-gray-700">
            <li className="flex items-center gap-3">
              <span className="text-blue-500 text-lg">✔</span>
              <span>
                <strong>Full-stack developer</strong> specializing in{" "}
                <strong>React</strong> and <strong>Node.js</strong>.
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-blue-500 text-lg">✔</span>
              <span>
                <strong>3+ years of experience</strong> in building web
                applications.
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-blue-500 text-lg">✔</span>
              <span>
                Skilled in creating{" "}
                <strong>fast, visually appealing, and responsive</strong> UIs.
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-blue-500 text-lg">✔</span>
              <span>
                Focused on <strong>efficient, scalable</strong>, and{" "}
                <strong>best-practice-driven</strong> development.
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-blue-500 text-lg">✔</span>
              <span>
                Strong emphasis on <strong>code segregation</strong> for
                maintainability.
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-blue-500 text-lg">✔</span>
              <span>
                Writes <strong>clean, readable code</strong> to ensure future
                growth and easy collaboration.
              </span>
            </li>
          </ul>
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
