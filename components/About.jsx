import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5] ">About</p>
          <h2 className="py-4">Who I Am</h2>
          <p className='py-2 text-gray-600'> I am not your normal developer</p>
          <p className='py-2 text-gray-600'>
            People call me Manthan or Mani . I am a Cynophile,a soccer lover and
            a game addict . I play different type of games solving different
            kind of puzzles and problems in games as well as in life and my
            codes I am a freshly Graduated programmer who has a profecient
            knowledge of Mern Stack , Mean Stack and Java full stack
            development. Beside this i am a web application pentester too as i
            am a cybersecurity Student.
          </p>
          <p className='py-2 text-gray-600'>
            Oh yeah , I am a highly motivated ,passionate web developer
            figuiring out new technolgies and learning them and applying them in
            my projects. Getting better day by day Improving myself. I have
            created some crud applications in mean stack and using j2ee in my
            internship
          </p>
          <p className='py-2 text-gray-600 underline cursor-pointer'>Checkout out my projects</p>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
        <img className='rounded-xl' src="https://images.unsplash.com/photo-1648737155328-0c0012cf2f20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"  /></div>
      </div>
    </div>
  );
};

export default About;
