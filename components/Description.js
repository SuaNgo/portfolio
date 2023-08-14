import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section
      id="description"
      className="text-white pt-28 max-[600px]:pt-8 max-[1000px]:pt-20 "
    >
      <div className="flex gap-10 min-[1000px]:px-40 max-[600px]:flex-col min-[600px]:px-10 max-[600px]:px-10 mr-5">
        <div className="flex flex-col flex-[45%] h-[600px] max-[1000px]:pb-10">
          <div className="">
            <h1 className="font-title text-[28px]">WHAT I WANT TO DO</h1>
            <p className="font-para text-[18px] text-justify">
              Deserunt excepteur nulla velit duis sunt nisi exercitation
              consequat dolore adipisicing ea elit.
            </p>
          </div>
          <div className="overflow-hidden max-[1000px]:w-full">
            <Image
              src="/2842680.png"
              className="object-cover object-center"
              width={450}
              height={200}
            />
          </div>
        </div>
        <div className="flex-[45%] flex flex-col justify-start min-[1260px]:pl-[4rem]">
          <ul>
            <il>
              <h1 className="font-list text-[20px]">
                BECOME A FRONTEND DEVELOPER
              </h1>
              <p className="font-para text-[18px] text-justify">
                Velit dolore occaecat cillum magna in dolore tempor.
              </p>
              <div className="border-cyan-200 border-solid border my-5"></div>
            </il>
            <il>
              <h1 className="font-list text-[20px]">
                LEARN BACKEND AND DATABASE
              </h1>
              <p className="font-para text-[18px] text-justify">
                Velit dolore occaecat cillum magna in dolore tempor.
              </p>
              <div className="border-cyan-200 border-solid border my-5"></div>
            </il>
            <il>
              <h1 className="font-list text-[20px]">
                BECOME A FULLSTACK DEVELOPER
              </h1>
              <p className="font-para text-[18px] text-justify">
                Velit dolore occaecat cillum magna in dolore tempor.
              </p>
              <div className="border-cyan-200 border-solid border my-5"></div>
            </il>
            <il>
              <h1 className="font-list text-[20px]">
                I DONT KNOW, PLACEHOLDER I THINK
              </h1>
              <p className="font-para text-[18px] text-justify">
                Velit dolore occaecat cillum magna in dolore tempor.
              </p>
              <div className="border-cyan-200 border-solid border my-5"></div>
            </il>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
