import LightModeIcon from "@mui/icons-material/LightMode";
import ToggleColorMode from "./SwitchMode";
import { useState } from "react";

const Navbar = () => {
  const [mode, setMode] = useState("light");
  return (
    <div className=" w-full flex justify-between py-2  border-projectGray items-center px-28">
      <a
        href="#"
        className=" text-gray-900 w-1/2 text-xl font-medium cursor-pointer">
        {"<LS/>"}
      </a>
      <div className=" w-1/2 flex justify-between items-center">
        <a href="#" className=" hover:underline cursor-pointer">
          About
        </a>
        <p className=" hover:underline cursor-pointer">Work Experience</p>
        <p className=" hover:underline cursor-pointer">Contact</p>
        <div className=" w-4/12 flex justify-between items-center pl-2 border-l-0.5 border-b-textGray ">
          <div className=" ">
            <ToggleColorMode mode={mode} setMode={setMode} />
          </div>
          <button className=" text-sm p-2 text-white bg-darkGray rounded-lg">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
