import React from "react";
import Scientist from "../assets/Lab.png";
const About = () => {
  return (
    <div className=" relative  mt-20 h-screen" id="about">
      <div className="flex max-w-7xl mx-auto px-4 sm:px-6 justify-between">
        <div className=" text-left my-40">
          <div className="text-lg  text-semibold  mb-5">WHO WE ARE</div>
          <div className="">
            <h4 className="text-semibold">
              At BloodFuse, we know how important blood is for life and we
              believe every Individual should be given an opportunity to stay
              alive, which is why we.
            </h4>
            <ul className="marker:text-red-400 list-disc pl-5 space-y-3 text-slate-500">
              <li>
                Connect Blood Donors & Recipients in a convenient and safe way.
              </li>
              <li>Increase communication with our members.</li>
              <li>Examine critically to ensure alignment.</li>
              <li>Perform extra care from a multi-disciplinary team.</li>
              <li>Are community based organization.</li>
              <li>
                Are incorporating blockchain technology to our platform, for
                transparency, security of data and decentralization.
              </li>
            </ul>
          </div>
        </div>
        <div className="my-20">
          <img src={Scientist} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
