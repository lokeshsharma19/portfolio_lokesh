import { useEffect, useRef, useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CodeIcon from "@mui/icons-material/Code";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import "./Footer.css";

const Footer = ({ setIsNavbarVisible }) => {
  const footerRef = useRef(null);
  const [copied, setCopied] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsNavbarVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, [setIsNavbarVisible]);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(""), 2000);
  };

  return (
    <footer
      id="contact"
      ref={footerRef}
      className="bg-gradient-to-r from-darkGray to-gray-700 text-white py-8 rounded-t-2xl shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <div className="mb-6 md:mb-0 text-center md:text-left flex flex-col">
          <a
            href="mailto:lokeshsharmacp2023@gmail.com"
            className="text-2xl font-bold text-white relative mb-3 inline-block shimmer-text underline">
            Hire me?
          </a>
          <a
            href="mailto:lokeshsharmacp2023@gmail.com"
            className="text-2xl font-bold text-white relative inline-block shimmer-text lg:ml-20 underline">
            {`or Let's Collaborate on a Project?`}
          </a>
        </div>
        {/* Right Side - Contact Details */}
        <div className="text-center md:text-right space-y-2">
          <p className="font-semibold text-lg">Lokesh Sharma</p>

          <div className="flex items-center justify-center md:justify-end text-gray-300 space-x-2">
            <PhoneIcon />
            <span>
              {copied === "+91 9106883315" ? "Copied!" : "+91 9106883315"}
            </span>
            <button
              onClick={() => copyToClipboard("+91 9106883315")}
              className="ml-2 p-1 bg-gray-800 rounded-full hover:bg-gray-600 transition">
              <ContentCopyIcon fontSize="small" />
            </button>
          </div>

          <div className="flex items-center justify-center md:justify-end text-gray-300 space-x-2">
            <EmailIcon />
            <span>
              {copied === "lokeshsharmacp2023@gmail.com"
                ? "Copied!"
                : "lokeshsharmacp2023@gmail.com"}
            </span>
            <button
              onClick={() => copyToClipboard("lokeshsharmacp2023@gmail.com")}
              className="ml-2 p-1 bg-gray-800 rounded-full hover:bg-gray-600 transition">
              <ContentCopyIcon fontSize="small" />
            </button>
          </div>

          <p className="flex items-center justify-center md:justify-end text-gray-300">
            <LocationOnIcon className="mr-2" /> Baner, Pune - 411021
          </p>

          <div className="flex justify-center md:justify-end gap-x-4 mt-4">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://x.com/lokeshshrma19">
              <TwitterIcon fontSize="large" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/lokeshas1/">
              <LinkedInIcon fontSize="large" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://leetcode.com/lokeshsharmacp2023/">
              <CodeIcon fontSize="large" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
