import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const resume = () => {
  return (
    <>
      <Head>
        <title>Manthan | Resume</title>
        <meta name="description" content="I’m a full-stack developer" />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Manthan</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/manthan-824104178/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/manthan8219"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <p>
            Learner <span className="px-1">|</span> Web Development{" "}
            <span className="px-1">|</span> Complex Problem Solving
          </p>
        </div>
        <p>
          A motivated full stack developer and cyber security enthusiast with
          specialist expertise in java , springboot , RestAPi
          ,Javascript,Nodejs,AngularJs ,Data Structures , OOP concepts along
          with web app secuirty fundamentals like xss,rce and others as a
          penetration tester also . A strategic and agile thinker known for
          driving change by tackling ambiguous problems and ef ectively
          communicating solutions
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2">
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">|</span>Full-Stack Developer
            <span className="px-2">|</span> HTML <span className="px-2">|</span>
            CSS <span className="px-2">|</span>Javascript
            <span className="px-2">|</span>React
            <span className="px-2">|</span>bootstrap
            <span className="px-2">|</span>tailwind
            <span className="px-2">|</span>Angular




          </p>
        </div>

        {/* Experience */}
        <div className="py-4">
          <h5 className="text-center underline text-[18px] py-4">
            Professional Experience
          </h5>
          <p className="italic">
            <span className="font-bold">Nagarro Softwares limited</span>
            <span className="px-2">|</span>Gurgaon,Haryana,
          </p>
          <p className="py-1 italic">Java Full Stack Developer(Current)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Learnt .about java and advance java with data structures along
              with oop concepts
            </li>
            <li>
              learnt about spring boot ,spring mvc ,servlets,jsp
              ,html,css,bootsrap,javascript
            </li>
            <li>
              learnt about Jenkins ,sonarqueber ,nodeJs ,Angular js,my sql, sql
            </li>
            <li>
              I have completed more than 13 assignments in which was majorily
              focused on full stack development
            </li>
          </ul>
        </div>
        {/* Experience */}
        <div className="py-4">
          <p className="italic">
            <span className="font-bold">Virtual testing foundation</span>
          </p>
          <p className="py-1 italic">
            Cyber security intern (JAN,2021 – MARCH,2021)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>Dockers and Kubernetes functioning</li>
            <li>
              Learn about latest technology and how to use them in information
              technology
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
