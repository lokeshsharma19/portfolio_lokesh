import jioLogo from "../assets/jio.png";
import rigvedLogo from "../assets/Rigved-Logo.png";

const experiences = [
  {
    company: "Rigved Technologies",
    role: "SDE Intern",
    logo: rigvedLogo,
    details: [
      "Collaborated with a team of developers to design and develop web applications for Reliance Foundation Hospital, creating features utilized by 600+ doctors, staff, and patients.",
      "Integrated AI models and complex APIs to streamline hospital operations and improve patient care.",
    ],
    date: "Jan 2025 - Present",
    link: "https://www.rigvedtech.com/",
  },
  {
    company: "Globixo",
    role: "SDE Intern",
    logo: null,
    details: [
      "Led the comprehensive revamp of Globixo's website, implementing new features that increased user engagement by 20% and streamlining UI/UX design to resolve inconsistencies, resulting in a 15% decrease in bounce rates.",
      "Developed data scraping solutions using Node.js and Chromium, extracting over 10,000 records monthly for market analysis.",
      "Engineered an offline-compatible, cross-platform mobile application with React Native, accelerating development time by 40% compared to separate Android and iOS codebases.",
    ],
    date: "Sep 2024 - Dec 2024",
    link: "https://www.globixo.com/",
  },
  {
    company: "Jio Platforms Limited",
    role: "SDE Intern",
    logo: jioLogo,
    details: [
      "Engineered and optimized a speech recognition tool for faculty, enabling efficient recording of assignments and participant management within a 20-25 day timeline.",
      "Improved customer service response times by 20% through the implementation of 10-15 client-specified UI improvements and features in a call analysis tool.",
      "Architected a document annotation tool, enhancing data preparation efficiency by 30% for the analytics team.",
    ],
    date: "Jul 2024 - Aug 2024",
    link: "https://www.jio.com/platforms/about-us/",
  },
];

const Experience = () => {
  return (
    <div
      id="experience"
      className="py-16 px-2 md:px-24 flex flex-col items-center bg-gray-50">
      <div className="bg-gray-200 text-gray-600 p-2 rounded-xl">
        <p className="text-sm">Experience</p>
      </div>
      <p className="mt-8 text-center">
        Here is a quick summary of my most recent experiences:
      </p>
      <div className="flex flex-wrap gap-6 md:gap-16 justify-center mt-10">
        {experiences.map((exp, index) => (
          <a
            key={index}
            href={exp.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-11/12">
            <div className="experienceContainer grid grid-cols-1 md:grid-cols-[1fr_3fr_auto] gap-4 md:gap-6 items-center bg-white p-6 lg:p-8 md:p-8 rounded-lg shadow-md hover:shadow-xl cursor-pointer transition-all">
              <div className="flex justify-center px-4 md:px-10">
                {exp.logo ? (
                  <img
                    className="w-20 md:w-28"
                    src={exp.logo}
                    alt={exp.company}
                  />
                ) : (
                  <div className="text-purple-600 font-bold text-xl md:text-3xl">
                    {exp.company}
                  </div>
                )}
              </div>
              <ul className="experienceInfo list-disc w-full text-sm md:text-base">
                <p className="text-lg font-medium text-center md:text-left">
                  {exp.role}
                </p>
                {exp.details.map((detail, i) => (
                  <li key={i} className="my-2">
                    {detail}
                  </li>
                ))}
              </ul>
              <div className="date text-sm text-right">
                <p>{exp.date}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Experience;
