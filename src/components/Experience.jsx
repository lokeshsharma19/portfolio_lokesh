
import jioPhoto from "../assets/jio.png";

const Experience = () => {
  return (
    <div className="h-1/3 py-16 px-24 flex flex-col items-center bg-gray-50">
      <div className="bg-gray-200 text-gray-600 p-2 rounded-xl">
        <p className="text-sm">Experience</p>
      </div>
      <p className="mt-8">
        Here is a quick summary of my most recent experiences:
      </p>
      <div className="flex flex-wrap gap-16 justify-center mt-10">
        <div className="experienceContainer w-11/12 grid grid-cols-[1fr_3fr_auto] gap-6 items-center bg-white p-8 rounded-lg shadow-md hover:shadow-xl">
          <div className="flex justify-center px-10">
            <div className="text-purple-600 font-bold text-3xl">Globixo</div>
          </div>
          <ul className="experienceInfo list-disc w-full">
            <p className="text-lg font-medium">SDE Intern</p>
            <li className="my-2">
              Enhanced Globixo’s main website by developing and implementing new
              features.
            </li>
            <li className="my-2">
              Addressed UI/UX inconsistencies by aligning elements with current
              design standards.
            </li>
            <li className="my-2">
              Created data scraping solutions using Node.js and Chromium.
            </li>
            <li className="my-2">
              Developed an offline-compatible, cross-platform mobile application
              with React Native.
            </li>
            <li className="my-2">
              Technologies: Next.js, React Native, Node.js, Tailwind CSS
            </li>
          </ul>
          <div className="date text-sm text-right">
            <p>Sep 2024 - Present</p>
          </div>
        </div>

        <div className="experienceContainer w-11/12 grid grid-cols-[1fr_3fr_auto] gap-6 items-center bg-white p-8 rounded-lg shadow-md hover:shadow-xl">
          <div className="flex justify-center px-10">
            <img className="w-28" src={jioPhoto} alt="Jio Platforms Limited" />
          </div>
          <ul className="experienceInfo list-disc w-full">
            <p className="text-lg font-medium">Final Year Project</p>
            <li className="my-2">
              Creating a healthcare application to automate up to 60% of
              appointment scheduling and patient management tasks by
              transcribing doctor-patient conversations into structured SOAP
              notes and progress reports.
            </li>
          </ul>
          <div className="date text-sm text-right">
            <p>Aug 2024 - Present</p>
          </div>
        </div>

        <div className="experienceContainer w-11/12 grid grid-cols-[1fr_3fr_auto] gap-6 items-center bg-white p-8 rounded-lg shadow-md hover:shadow-xl">
          <div className="flex justify-center px-10">
            <img className="w-28" src={jioPhoto} alt="Jio Platforms Limited" />
          </div>
          <ul className="experienceInfo list-disc w-full">
            <p className="text-lg font-medium">SDE Intern</p>
            <li className="my-2">
              Speech Recognition Tool: Developed a tool enabling school faculty
              to record student assignments, manage participants, and handle
              secure authentication for faculty access.
            </li>
            <li className="my-2">
              Call Analysis tool: Implemented 10-15 client-specified UI
              improvements, achieving a 20% enhance- ment in customer service
              response times.
            </li>
            <li className="my-2">
              Developed a document annotation tool, allowing users to annotate,
              edit, and save documents for train- ing data and analytical
              purposes.
            </li>
          </ul>
          <div className="date text-sm text-right">
            <p>Jul 2024 - Aug 2024 </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
