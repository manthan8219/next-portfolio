import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Link from 'next/link'

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-grey-600">
            LETS'S BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4 text-gray-700">
            Hi ,I'm <span className="text-[#5651e5]">Manthan</span>
          </h1>
          <h1 className="py-4 text-gray-700">A Full Stack Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I'm a Full-stack Developer Freshly graduated from college with a
            computer science enginerring degree Currently working as a java full
            stack developer with an organization and have profecient skills in
            MERN and MEAN stack and putting efforts learning new technolgies and
            integrating them with my projects to learn the concepts better
          </p>

          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
          <a
          href='https://www.linkedin.com/in/manthan-824104178/'
          target='_blank'
          rel='noreferrer'
        > <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaLinkedinIn />
            </div>
            </a>
            <a
            href='https://github.com/manthan8219'
            target='_blank'
            rel='noreferrer'
          > <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaGithub />
            </div></a>
          
            <a href='mailto:manthanbhatia367@gmail.com'>  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <AiOutlineMail />
            </div></a>
            <Link href='/resume'><div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <BsFillPersonLinesFill />
            </div></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
