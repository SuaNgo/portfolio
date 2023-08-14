import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="text-white pt-28 max-[600px]:pt-8 max-[900px]:pt-20 mb-[20px]">
        <div className="flex-row min-[1000px]:px-40 min-[600px]:px-10 max-[600px]:px-10 flex flex-wrap flex-1 gap-4 justify-between mr-5">
          <div className="flex flex-col justify-center">
            <h1 className="font-title">About</h1>
            <div className="justify-center overflow-hidden w-[100px] max-[900px]:pb-10">
              <Image
                src="/senti.gif"
                className="object-cover object-center"
                width={200}
                height={200}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="font-title">About</h1>
            <ul className="">
              <li className="font-para">Thing 1</li>
              <li className="font-para">Thing 1</li>
              <li className="font-para">Thing 1</li>
              <li className="font-para">Thing 1</li>
            </ul>
          </div>
          <div className="flex flex-col ">
            <h1 className="font-title">About</h1>
            <ul>
              <li className="font-para">Thing 1</li>
              <li className="font-para">Thing 1</li>
              <li className="font-para">Thing 1</li>
              <li className="font-para">Thing 1</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h1 className="font-title">About</h1>
            <ul>
              <li className="font-para">Thing 1</li>
              <li className="font-para">Thing 1</li>
              <li className="font-para">Thing 1</li>
              <li className="font-para">Thing 1</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
