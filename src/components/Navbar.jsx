import ToggleColorMode from "./SwitchMode";
import { useState, useEffect, useRef } from "react";

const Navbar = ({ setIsNavbarVisible }) => {
  // const [mode, setMode] = useState("light");
  const navbarRef = useRef(null);
  const cvLink = import.meta.env.VITE_CV_LINK;

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsNavbarVisible(entry.isIntersecting);
      },
      { threshold: 0 }
    );

    if (navbarRef.current) observer.observe(navbarRef.current);

    return () => {
      if (navbarRef.current) observer.unobserve(navbarRef.current);
    };
  }, [setIsNavbarVisible]);

  return (
    <div
      ref={navbarRef}
      className="w-full flex justify-between py-2 border-projectGray items-center px-4 lg:px-24">
      <a
        href="#"
        className="text-gray-900 w-1/2 text-3xl font-medium cursor-pointer">
        {"<LS/>"}
      </a>
      <div className="lg:w-1/2 flex justify-items-end lg:justify-between items-center">
        <p
          onClick={() => scrollToSection("intro")}
          className="hover:underline cursor-pointer lg:block hidden">
          About
        </p>
        <p
          onClick={() => scrollToSection("work")}
          className="hover:underline cursor-pointer lg:block hidden">
          Work Experience
        </p>
        <p
          onClick={() => scrollToSection("skills")}
          className="hover:underline cursor-pointer lg:block hidden">
          Skills
        </p>
        <p
          onClick={() => scrollToSection("contact")}
          className="hover:underline cursor-pointer lg:block hidden">
          Contact
        </p>
        <div className="w-4/12 flex justify-between items-center pl-8 border-l-0.5 border-b-textGray">
          {/* <ToggleColorMode mode={mode} setMode={setMode} /> */}
          <button
            className="text-sm p-2 text-white bg-darkGray rounded-lg whitespace-nowrap"
            onClick={() => window.open(cvLink, "_blank")}>
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
