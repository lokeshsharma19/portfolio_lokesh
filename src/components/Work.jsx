import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./work.css";

import dgame1 from "../assets/projectsImage/dgame1.png";
import dgame2 from "../assets/projectsImage/dgame2.png";
import dgame3 from "../assets/projectsImage/dgame3.png";
import dgame4 from "../assets/projectsImage/dgame4.png";
import dgame5 from "../assets/projectsImage/dgame5.png";
import dgame6 from "../assets/projectsImage/dgame6.png";
import dgame7 from "../assets/projectsImage/dgame7.png";
import dgame8 from "../assets/projectsImage/dgame8.png";

import xpay1 from "../assets/projectsImage/xpay1.png";
import xpay2 from "../assets/projectsImage/xpay2.png";
import xpay3 from "../assets/projectsImage/xpay3.png";
import xpay4 from "../assets/projectsImage/xpay4.png";
import xpay5 from "../assets/projectsImage/xpay5.png";
import xpay6 from "../assets/projectsImage/xpay6.png";

import amdb1 from "../assets/projectsImage/amdb1.png";
import amdb2 from "../assets/projectsImage/amdb2.png";
import amdb3 from "../assets/projectsImage/amdb3.png";
import amdb4 from "../assets/projectsImage/amdb4.png";

const workObject = [
  {
    image: [amdb1, amdb2, amdb3, amdb4],
    projectName: "TMDb - Movies, Tv shows & more",
    description:
      "Designed and implemented a movie catalog using React, integrating the TMDb API for real-time data. Utilized debouncing, infinite search, and pagination techniques, resulting in a 40% reduction in search response times.",
    liveDemoUrl: "https://amdbv2.vercel.app/",
    codeUrl: "https://github.com/lokeshsharma19/AMDb_v2",
  },
  {
    image: [xpay1, xpay2, xpay3, xpay4, xpay5, xpay6],
    projectName: "xPay",
    description:
      "A payment application utilizing the MERN stack for transaction management and JWT for user authentication, ensuring 99% data consistency and integrity through DBMS transactions.",
    liveDemoUrl: "https://euphonious-naiad-c96981.netlify.app/",
    codeUrl: "https://github.com/lokeshsharma19/PaymentApp",
  },

  {
    image: [dgame1, dgame2, dgame3, dgame4, dgame5, dgame6, dgame7, dgame8],
    projectName: "Dev Game",
    description:
      "An application utilizing MVC architecture and JWT for user authentication, featuring refresh & access tokens, Axios instance, and interceptor for token management. Includes a quiz game using browser developer tools with a leaderboard for performance tracking.",
    liveDemoUrl: "https://10xdevchallenge.netlify.app/",
    codeUrl: "https://github.com/lokeshsharma19/Dev-game",
  },
];

const Work = ({ setIsHovering }) => {
  const handleClick = (work) => {
    window.location.href = work.liveDemoUrl;
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 700,
  };

  return (
    <div id="work" className="py-16 px-2 bg-gray-200">
      <div className="bg-gray-200 text-gray-900 p-2 rounded-xl mb-4 text-center">
        <p className="text-sm">Work</p>
      </div>
      <p className="mb-8 text-center">
        Some of the noteworthy projects I have built:
      </p>
      <ul id="cards" className="container">
        {workObject.map((work, index) => (
          <li
            onClick={() => handleClick(work)}
            key={index}
            id={`card${index + 1}`}
            className="card cursor-pointer w-4/5 m-auto">
            <motion.div
              className="card-body flex flex-col md:flex-row items-center gap-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              onMouseEnter={() =>
                setIsHovering({ isProjectCard: true, link: work.liveDemoUrl })
              }
              onMouseLeave={() =>
                setIsHovering({ isProjectCard: false, link: "" })
              }
              transition={{ duration: 0.5 }}>
              <div className="relative h-[100vh] lg:h-[75vh] w-[60vw] overflow-hidden">
                <Slider {...sliderSettings}>
                  {work.image.map((img, idx) => (
                    <div key={idx} className="mt-20">
                      <img
                        src={img}
                        alt={`${work.projectName} ${idx + 1}`}
                        className="h-full w-full object-cover rounded-lg"
                      />
                    </div>
                  ))}
                </Slider>
              </div>
              <div className="max-w-xl p-8 flex flex-col items-center text-center">
                <h2 className="text-3xl font-semibold text-gray-100">
                  {work.projectName}
                </h2>
                <p className="text-md text-gray-50 mt-4">{work.description}</p>
                <div className="flex justify-center gap-4 mt-6">
                  <a
                    href={work.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-50 hover:text-black">
                    <GitHubIcon />
                  </a>
                  <a
                    href={work.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-50 hover:text-black">
                    <OpenInNewIcon />
                  </a>
                </div>
              </div>
            </motion.div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Work;
