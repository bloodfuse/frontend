/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { Heart, BloodCells, WeightIcon } from "../../assets/images";
import { BsPeople } from "react-icons/bs";
import { ChevronDownIcon, PlusIcon } from "@heroicons/react/solid";
import { UploadIcon, DownloadIcon } from "@heroicons/react/outline";
import { DotsVerticalIcon } from "@heroicons/react/outline";
import { Popover } from "@headlessui/react";

import MedicalInfo from "../Modal/MedicalInfo";

const MedicalsPage = () => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const personData = {
    bloodGroup: "O+",
    heartRate: "80",
    weight: "120kg",
    bloodCount: "9,567/ml",
  };
  return (
    <>
      <MedicalInfo
        isModalOpen={isOpen}
        closeModalFunc={closeModal}
        // openAppointmentModal={openAppointmentModal}
        // closeAppointmentModal={closeAppointmentModal}
      />
      <div className="w-full  h-full p-4">
        <h1 className="font-[500] text-xl md:text-2xl">Medical Report</h1>
        {/* Grid of Cards*/}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-4 w-full md:max-w-7xl mt-4 mb-8">
          {/*Blood Group */}
          <div className="w-full h-48 rounded-[4px]">
            <div className="w-full h-full py-4 px-4 shadow-sm bg-white flex flex-col gap-4 items-start">
              <span className="font-mod-light  text-xl"> Blood Group</span>
              <div className="flex items-center justify-between w-full text-[#F00530]">
                <span className="font-mod-bold text-2xl md:text-3xl">
                  {personData.bloodGroup}
                </span>
                <BsPeople className="w-16 h-16 md:w-12 md:h-12" />
              </div>
              <span className="font-mod-light text-[#333333] text-opacity-40">
                10% higher than last month
              </span>
            </div>
          </div>
          <div className="w-full h-48 rounded-[4px]">
            {/*Heart Rate */}

            <div className="w-full h-full py-4 px-4 shadow-sm bg-white flex flex-col gap-4 items-start">
              <span className="font-mod-light text-xl">Heart Rate</span>
              <div className="flex items-center justify-between w-full text-[#44C13C]">
                <span className="font-mod-bold text-2xl md:text-3xl">
                  {personData.heartRate}bmp
                </span>
                <img src={Heart} className="w-16 h-16 md:w-12 md:h-12" alt="" />
              </div>
              <span className="font-mod-light text-[#333333] text-opacity-40">
                10% higher than last month
              </span>
            </div>
          </div>
          <div className="w-full h-48 rounded-[4px]">
            {/*Weight */}

            <div className="w-full h-full py-4 px-4 shadow-sm bg-white flex flex-col gap-4 items-start">
              <span className="font-mod-light text-xl">Weight</span>
              <div className="flex items-center justify-between w-full text-[#FB9637]">
                <span className="font-mod-bold text-2xl md:text-3xl">
                  {personData.weight}
                </span>
                <img
                  src={WeightIcon}
                  className="w-16 h-16 md:w-12 md:h-12"
                  alt=""
                />
              </div>
              <span className="font-mod-light text-[#333333] text-opacity-40">
                10% higher than last month
              </span>
            </div>
          </div>
          <div className="w-full h-48 rounded-[4px]">
            {/*Blood Count */}
            <div className="w-full h-full py-4 px-4 shadow-sm bg-white flex flex-col gap-4 items-start">
              <span className="font-mod-light text-xl">Blood Count</span>
              <div className="flex items-center justify-between w-full text-[#61A0FF]">
                <span className="font-mod-bold text-2xl md:text-3xl">
                  {personData.bloodCount}
                </span>
                <img
                  src={BloodCells}
                  className="w-16 h-16 md:w-12 md:h-12"
                  alt=""
                />
              </div>
              <span className="font-mod-light text-[#333333] text-opacity-40">
                10% higher than last month
              </span>
            </div>
          </div>
        </div>
        {/* Create a report, Download a report and View Report Card */}
        <div className="w-full bg-white min-h-[60vh]">
          {/* Heading */}
          <div className="py-4 w-full">
            <div className="flex items-center justify-between px-6">
              {/* First Flex */}
              <div className="flex gap-4 items-center">
                <div className="flex items-center gap-1 cursor-pointer">
                  <span>View Medical Report</span>
                  <ChevronDownIcon className="w-6 h-6 text-[#445665]" />
                </div>
                <div className="hidden lg:block cursor-pointer">
                  <button className="bttn bttn-black">
                    <PlusIcon className="w-4 h-4" />
                    <span className="font-mod-light" onClick={openModal}>
                      Create Medical Report
                    </span>
                  </button>
                </div>
              </div>
              {/* Second Flex */}

              <div className="hidden lg:flex gap-6 items-center">
                <div className="flex items-center gap-2 text-[#F00530] font-[600] mr-4 cursor-pointer">
                  <UploadIcon className="w-5 h-5" />
                  <span className="font-mod">Upload Report</span>
                </div>
                <button className="bttn bttn-primary">
                  <DownloadIcon className="w-5 h-5 mr-2" />
                  <span className="font-mod">Download Report</span>
                </button>
              </div>
              {/* Dropdown Icon for mobile */}
              <div className="block lg:hidden">
                <DotsVerticalIcon className="w-6 h-6 text-[#445665]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MedicalsPage;
