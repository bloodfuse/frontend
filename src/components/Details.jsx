import React from "react";
import BloodBankLogo from "../assets/BloodBank.png";
const Details = () => {
  return (
    <div ClassName="h-screen  mt-10  relative ">
      <div className=" flex flex-col mt-20 max-w-7xl mx-auto px-4 sm:px-6 justify-center">
        <div className="text-lg items-center font-bold"> EVERY TWO SECONDS</div>
        <div className="mt-10 items-center">
          Someone in your community needs blood. This number counter shows how
          many people have needed blood since you arrived here.
        </div>
        <div className="text-7xl my-10">00 - 499</div>
        <div className="flex  justify-around flex-wrap mx-28 my-10">
          <div class="flex flex-col  items-center pb-10">
            <img class=" w-14 h-14 " src={BloodBankLogo} alt="Bonnie" />
            <h5 class="mb-1 text-xl font-medium text-gray-900 py-2">
              Donate Now
            </h5>
            <span class="text-sm text-gray-500 py-4">
              Schedule your appointment now.
            </span>

            <a
              href="#t"
              class="inline-flex items-center py-2 mt-2 px-4 text-sm font-medium text-center text-white bg-red-600 rounded hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <span className="px-16">Donate</span>
            </a>
          </div>
          <div class="flex flex-col  items-center pb-10">
            <img class=" w-14 h-14 " src={BloodBankLogo} alt="Bonnie" />
            <h5 class="mb-1 text-xl font-medium text-gray-900 py-2">
              Donate Now
            </h5>
            <span class="text-sm text-gray-500 py-4">
              Schedule your appointment now.
            </span>

            <a
              href="#t"
              class="inline-flex items-center py-2 mt-2 px-4 text-sm font-medium text-center text-white bg-red-600 rounded hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <span className="px-16">Donate</span>
            </a>
          </div>
          <div class="flex flex-col  items-center pb-10">
            <img class=" w-14 h-14 " src={BloodBankLogo} alt="Bonnie" />
            <h5 class="mb-1 text-xl font-medium text-gray-900 py-2">
              Donate Now
            </h5>
            <span class="text-sm text-gray-500 py-4">
              Schedule your appointment now.
            </span>

            <a
              href="#t"
              class="inline-flex items-center py-2 mt-2 px-4 text-sm font-medium text-center text-white bg-red-600 rounded hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <span className="px-16">Donate</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
