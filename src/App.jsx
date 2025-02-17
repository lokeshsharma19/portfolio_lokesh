import "./App.css";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Work from "./components/Work";
import BottomNavbar from "./components/BottomNavbar";
import { useState } from "react";
import Cursor from "./ui/Cursor";
import Footer from "./components/Footer";

function App() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isHovering, setIsHovering] = useState({
    isProjectCard: false,
    link: "",
  });

  return (
    <div className="text-gray-600 w-full h-full">
      <Navbar setIsNavbarVisible={setIsNavbarVisible} />
      <Intro />
      <Skills />
      <Experience />
      <Work setIsHovering={setIsHovering} />
      <BottomNavbar isNavbarVisible={isNavbarVisible} />
      <Cursor isHovering={isHovering} />
      <Footer setIsNavbarVisible={setIsNavbarVisible} />
    </div>
  );
}

export default App;
