import React from "react";

const About = () => {
  return (
    <section
      id="project"
      className="text-white pt-28 max-[600px]:pt-8 max-[1000px]:pt-20 "
    >
      <div className="flex flex-col min-[1000px]:px-40 min-[600px]:px-10 max-[600px]:px-10 gap-4 mr-5">
        <h1 className="font-title text-[28px]">MY PROJECTS</h1>

        <div className="grid grid-cols-2 max-[600px]:grid-cols-1">
          <div className="h-[300px] border-cyan-300 border-2 rounded-lg relative overflow-hidden">
            <a
              href="https://github.com/SuaNgo/coffeeshop"
              className=" hover:bg-slate-950 w-full h-full absolute z-10 opacity-60"
            ></a>
            <img
              src="/coffeeshop.png"
              className="object-fit w-full h-full absolute"
            />
          </div>
          <div className="px-4 max-[600px]:px-0 max-[600px]:mt-4">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-300 font-list text-[18px] ">
              COFFEE SHOP
            </h1>
            <p>
              In anim exercitation voluptate est aute sit proident quis sint sit
              tempor aliquip aliquip velit. In anim exercitation voluptate est
              aute sit proident quis sint sit tempor aliquip aliquip velit.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 max-[600px]:grid-cols-1">
          <div className="h-[300px] border-cyan-300 border-2 rounded-lg relative overflow-hidden">
            <a
              href="https://github.com/SuaNgo/reactjs_learning"
              className=" hover:bg-slate-950 w-full h-full absolute z-10 opacity-60"
            ></a>
            <img
              src="/todo.png"
              className="object-fit w-full h-full absolute"
            />
          </div>
          <div className="px-4 max-[600px]:px-0 max-[600px]:mt-4">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-300 font-list text-[18px] ">
              TODO AND CALCULATOR
            </h1>
            <p>
              In anim exercitation voluptate est aute sit proident quis sint sit
              tempor aliquip aliquip velit. In anim exercitation voluptate est
              aute sit proident quis sint sit tempor aliquip aliquip velit.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 max-[600px]:grid-cols-1">
          <div className="h-[300px] border-cyan-300 border-2 rounded-lg relative overflow-hidden">
            <a
              href="https://github.com/SuaNgo/portfolio"
              className=" hover:bg-slate-950 w-full h-full absolute z-10 opacity-60"
            ></a>
            <img
              src="/portfolio.bmp"
              className="object-fit w-full h-full absolute"
            />
          </div>
          <div className="px-4 max-[600px]:px-0 max-[600px]:mt-4">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-300 font-list text-[18px] ">
              PORTFOLIO
            </h1>
            <p>
              In anim exercitation voluptate est aute sit proident quis sint sit
              tempor aliquip aliquip velit. In anim exercitation voluptate est
              aute sit proident quis sint sit tempor aliquip aliquip velit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
