import HomeIcon from "@mui/icons-material/Home";
import HistoryIcon from "@mui/icons-material/History";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import WorkIcon from "@mui/icons-material/Work";
import BuildIcon from "@mui/icons-material/Build"; // Added Skill Icon
import "./BottomNavBar.css";

const BottomNavbar = ({ isNavbarVisible }) => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`fixed bottom-10 left-0 right-0 flex justify-center z-50 
      bottom-navbar ${isNavbarVisible ? "hidden" : "visible"}`}>
      <div className="bg-gray-800 text-white p-3 rounded-3xl flex justify-around w-3/5 md:w-1/3">
        <button
          onClick={() => scrollToSection("intro")}
          className="cursor-pointer group">
          <HomeIcon className="icon" />
          <span className="navbar-text">Home</span>
        </button>
        <button
          onClick={() => scrollToSection("skills")}
          className="cursor-pointer group">
          <BuildIcon className="icon" /> {/* New Skills Icon */}
          <span className="navbar-text">Skills</span>
        </button>
        <button
          onClick={() => scrollToSection("work")}
          className="cursor-pointer group">
          <WorkIcon className="icon" />
          <span className="navbar-text">Work</span>
        </button>
        <button
          onClick={() => scrollToSection("experience")}
          className="cursor-pointer group">
          <HistoryIcon className="icon" />
          <span className="navbar-text">Experience</span>
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          className="cursor-pointer group">
          <PermContactCalendarIcon className="icon" />
          <span className="navbar-text">Contact</span>
        </button>
      </div>
    </div>
  );
};

export default BottomNavbar;
