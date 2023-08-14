import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="text-white pt-28 max-[600px]:pt-8 max-[1000px]:pt-20 "
    >
      <div className="flex min-[1000px]:px-40 max-[600px]:flex-col min-[600px]:px-10 max-[600px]:px-10 mr-5">
        <div className="flex flex-[45%] justify-left overflow-hidden rounded-full max-[1000px]:w-full max-[1000px]:pb-10">
          <Image
            src="/avatar.png"
            className="object-cover object-center"
            width={400}
            height={200}
          />
        </div>
        <div className="flex-[45%] flex flex-col">
          <h1 className="font-title text-[28px] ">ABOUT ME</h1>
          <p className="font-para text-[18px] text-justify">
            I am trying to be a Front-end Developer, this is my portfolio with
            some of my projects.
          </p>
          <p className="font-para py-4 text-[18px] text-justify">
            I really like Hoyo games so some projects are about them, that's why
            I want to build a website which is similar to paimon.moe or Enka for
            fetching data so you can show character details, artifacts, ...
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
