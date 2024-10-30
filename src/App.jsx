import "./App.css";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Work from "./components/Work";

function App() {
  return (
    <div className=" text-gray-600 w-full">
      <Navbar />
      <Intro />
      <AboutMe />
      <Skills />
      <Experience />
      <Work />
    </div>
  );
}

export default App;
