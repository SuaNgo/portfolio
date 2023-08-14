import React from "react";

const About = () => {
  return (
    <section
      id="project"
      className="text-white pt-28 max-[600px]:pt-8 max-[1000px]:pt-20 "
    >
      <div className="flex justify-between min-[1000px]:px-40 max-[600px]:flex-col min-[600px]:px-10 max-[600px]:px-10 flex-wrap max-[600px]:h-[900px] gap-4 mr-5">
        <div className="flex flex-1 flex-col min-[600px]:flex-[45%]">
          <h1 className="font-title text-[28px]">MY PROJECTS</h1>
          <p className="font-para">
            Qui non commodo veniam pariatur ex non nulla exercitation in laboris
            aute do adipisicing.
          </p>
        </div>
        <div className="max-[600px]:flex-[30vw] flex-[45%] h-[300px] border-cyan-300 border-2 rounded-lg relative overflow-hidden">
          <a
            href="https://github.com/SuaNgo/genshin_landing"
            className=" hover:bg-slate-950 w-full h-full absolute z-10 opacity-60"
          ></a>
          <img
            src="/hoyo1.png"
            className="object-cover w-full h-full -top-[20%] left-[10%] absolute scale-150"
          />
          <h1 className="top-[3%] left-[5%] absolute text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-300 font-list text-[18px] z-20">
            GENSHIN PROJECT
          </h1>
        </div>
        <div className="max-[600px]:flex-[30vw] flex-[45%] h-[300px] border-cyan-300 border-2 rounded-lg relative overflow-hidden">
          <a
            href="https://github.com/SuaNgo/reactjs_learning"
            className=" hover:bg-slate-950 w-full h-full absolute z-10 opacity-60"
          ></a>
          <img
            src="/hoyo1.png"
            className="object-cover w-full h-full -top-[20%] left-[10%] absolute scale-150 "
          />
          <h1 className="top-[3%] left-[5%] absolute text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-300 font-list text-[18px] z-20">
            TODO AND CALCULATOR
          </h1>
        </div>
        <div className="max-[600px]:flex-[30vw] flex-[45%] h-[300px] border-cyan-300 border-2 rounded-lg relative overflow-hidden">
          <a
            href="https://github.com/SuaNgo/grid_learning"
            className=" hover:bg-slate-950 w-full h-full absolute z-10 opacity-60"
          ></a>
          <img
            src="/hoyo1.png"
            className="object-cover w-full h-full -top-[20%] left-[10%] absolute scale-150"
          />
          <h1 className="top-[3%] left-[5%] absolute text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-300 font-list text-[18px] z-20">
            HOYOGAMES PAGE
          </h1>
        </div>
      </div>
    </section>
  );
};

export default About;
