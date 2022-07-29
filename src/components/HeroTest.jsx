import React from "react";
import HeroImage from "../assets/GroupHero.png";
const Hero = () => {
  return (
    <div className="bg-primarybg relative h-full text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex  h-auto  ">
        <div className="flex flex-col justify-around m-auto  w-full lg:w-1/2">
          <div className="text-7xl  text-left font-semibold">
            Save a Life Today By Donating
            <br />
            <span className=" text-red-600">Blood</span>
          </div>
          <div className="text-lg mt-4 text-left">
            We are building the largest community where blood can be safely
            donated and accessed.
          </div>
          <div className="flex  justify-start ">
            <button
              type="button"
              class="inline-block px-8 mt-2 mr-6 py-3.5 bg-red-600 font-medium  leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              <span className="py-6  items-center">Request Blood</span>
            </button>
            <button
              type="button"
              class="inline-block px-8 mt-2 ml-2 py-3.5 border-2 border-white font-medium  leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              <span className="py-6 items-center">Donate Now</span>
            </button>
          </div>
        </div>
        <div class="flex items-center  justify-center w-full h-auto lg:h-auto lg:w-1/2">
          <img
            class=" w-full max-w-2xl    h-auto"
            src={HeroImage}
            alt="apple watch photo"
            style={{ height: "557px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
