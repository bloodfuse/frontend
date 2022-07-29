import React from "react";
import HeroImage from "../assets/GroupHero.png";
const Hero = () => {
  return (
    <main className=" relative bg-primarybg text-white h-full">
      {/* <div class="flex max-w-screen-xl px-4 py-8 mx-auto justify-around max-w mx-9  py-2.5"> */}
      <div class="flex max-w-screen mx-16 px-10 sm:px-6 justify-around ">
        <div class="mr-auto place-self-center flex flex-col ">
          <div className="text-7xl sm:text-6xl font-semibold">
            Save a Life Today <br /> By Donating
            <br />
            <span className=" text-red-600">Blood</span>
          </div>
          <div className="text-lg mt-4">
            We are building the largest community where blood can be safely
            donated and accessed.
          </div>
          <div></div>
        </div>
        <div className=" ml-2">
          <img
            src={HeroImage}
            alt="mockup"
            style={{ height: "522px", width: "1278px" }}
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
