const AboutMe = () => {
  return (
    <div className="h-2/3 py-14 px-24 flex flex-col items-center bg-gray-50">
      <div className=" bg-gray-200 text-gray-600 p-2 rounded-xl">
        <p className="text-sm ">About me</p>
      </div>
      <div className="flex justify-center">
        <div className="content w-11/12 px-6 py-6">
          <p className="my-6 text-3xl text-gray-900">
            Curious about me? Here you have it:
          </p>
          <ul className="list-disc ml-10 space-y-4 text-lg">
            <li>
              {`I'm a passionate, self-driven developer who specializes in
              full-stack development. My journey began 2 years ago with Data
              Structures and Algorithms (C++), which laid a strong foundation
              for my growth as a developer. I quickly transitioned into web
              development, from basics to advanced frontend frameworks like
              React.js and Next.js.`}
            </li>
            <li>
              To understand the full spectrum of web development, I expanded my
              expertise to backend technologies and databases, including both{" "}
              <span className="font-medium">SQL and NoSQL</span>. I create
              end-to-end web applications using modern technologies such as{" "}
              <span className="font-medium">
                Next.js, TypeScript, Tailwind CSS, Cloudflare
              </span>
              , and much more.
            </li>
            <li>
              {`I'm committed to building in public, sharing my progress and
              insights on `}
              <a
                className="underline font-medium"
                href="https://x.com/lokeshshrma19"
                target="_blank"
                rel="noopener noreferrer">
                Twitter
              </a>{" "}
              and{" "}
              <a
                className="underline font-medium"
                href="https://www.linkedin.com/in/lokeshas1/"
                target="_blank"
                rel="noopener noreferrer">
                LinkedIn
              </a>
              , and contributing to the developer community, or you can follow
              me on{" "}
              <a
                className="underline font-medium"
                href="https://github.com/lokeshsharma19"
                target="_blank"
                rel="noopener noreferrer">
                GitHub
              </a>
              .
            </li>
            <li>
              I thrive on bringing the technical and visual aspects of digital
              products to life, with a strong focus on{" "}
              <span className="font-medium">
                user experience, pixel-perfect design, and writing clean,
                structured & performant code
              </span>
              .
            </li>
          </ul>
          <div className="my-4">
            <p>Finally, some quick bits about me:</p>
            <ul className="list-disc ml-10 mt-2 grid grid-cols-2 gap-x-4 text-lg">
              <li>B.E. in Computer Engineering</li>
              <li>Avid learner</li>
              <li>Full stack web developer</li>
              <li>Efficient Problem Solver</li>
            </ul>
            <p className="mt-3">
              {`One last thing, I'm available for freelance work and internships,
              so feel free to reach out and say hello! I promise I don't bite 😉`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
