"use client";

import {
  faDiscord,
  faFacebook,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useState } from "react";

const Landing = () => {
  const [show, setShow] = useState(false);
  const [animation, setAnimation] = useState("hidden");
  const showContact = () => {
    setShow(!show);
    setAnimation("animate-disappear");
  };

  return (
    <section
      id="intro"
      className="text-white pt-28 max-[600px]:pt-8 max-[1000px]:pt-20 "
    >
      <div className="flex justify-between min-[1000px]:px-40 max-[600px]:flex-col-reverse min-[600px]:px-10 max-[600px]:px-10 mr-5">
        <div className="flex flex-[45%] flex-col justify-center">
          <h1 className="font-list font-bold min-[1000px]:text-[50px] min-[1000px]:leading-[50px] text-[6vw] leading-[6vw] max-[600px]:text-[11vw] max-[600px]:leading-[11vw]">
            QUANG NAM
          </h1>
          <h1 className="font-list font-medium mt-2 text-[4vw] leading-[4vw] min-[1000px]:text-[32px] min-[1000px]:leading-[32px] max-[600px]:text-[7vw] max-[600px]:leading-[7vw]">
            I AM A DEVELOPER
          </h1>
          <p className="font-para my-4 text-[18px] text-justify ">
            Lorem laborum qui reprehenderit aliquip. Lorem laborum qui
            reprehenderit aliquip
          </p>
          <div className="flex flex-row items-baseline gap-4">
            <button
              className="w-fit rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-1 px-4 leading-8"
              onClick={showContact}
            >
              Contact me
            </button>

            <div className={`${show ? "animate-fade-right" : `${animation}`}`}>
              <a href="https://www.facebook.com/suango.0612/">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="leading-5 text-[20px] self-center mr-5"
                />
              </a>

              <a href="https://github.com/SuaNgo">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="leading-5 text-[20px] self-center mr-5"
                />
              </a>
              <a href="https://discord.com/users/526682863756771339">
                <FontAwesomeIcon
                  icon={faDiscord}
                  className="leading-5 text-[20px] self-center"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-[45%] justify-center overflow-hidden w-[200px] rounded-full max-[1000px]:w-full max-[1000px]:pb-10">
          <Image
            src="/senti.gif"
            className="object-cover object-center"
            width={200}
            height={200}
          />
        </div>
      </div>
    </section>
  );
};

export default Landing;
