import React from "react";
import angular from '../public/assests/angular.png'
import data from '../public/assests/data.png'
import ProjectItems from "./ProjectItems";
import orm from '../public/assests/orm.jpg'
import node from '../public/assests/node.png'
import Reactjs from "../public/assests/ReactJs.png"
import boot from "../public/assests/boot.png"
import hulu from "../public/assests/hulu.jpg"

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
        <ProjectItems title='Hulu-clone' backgroundImage={hulu} URL='/Hulu' technology="Next.js" />
         <ProjectItems title='Crud application' backgroundImage={angular} URL='/Angular' technology="Angular" />
         <ProjectItems title='Crud application' backgroundImage={node} URL='/Node' technology="Node" />
         <ProjectItems title='Crud application + Api' backgroundImage={boot} URL='/Spring_boot' technology="Springboot" />
         <ProjectItems title='Portfolio' backgroundImage={Reactjs} URL='/ReactProject' technology="React js" />
         <ProjectItems title='Database connection' backgroundImage={orm} URL='/Database' technology="Java" />
         <ProjectItems title='Data Structures' backgroundImage={data} URL='/Data_Structures' technology="Java" />
        
        </div>
      </div>
    </div>
  );
};

export default Projects;
