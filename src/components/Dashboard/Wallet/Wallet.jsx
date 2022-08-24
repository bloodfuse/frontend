/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useRef, Fragment } from "react";
import { FiCopy } from "react-icons/fi";
import { BsClipboardPlus } from "react-icons/bs";
import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/solid";
import { Popover, Transition } from "@headlessui/react";

import {
  Dollar,
  FundAccount,
  Transfer,
  Vault,
  Withdraw,
} from "../../../assets/images";
import Record from "./Record";
import Pagination from "./Pagination";
import Table from "./Table";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Wallet = () => {
  const radio = useRef([]);
  // User is currently on this page
  const [currentPage, setCurrentPage] = useState(1);
  // No of Records to be displayed on each page
  const [recordsPerPage] = useState(7);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  // Records to be displayed on the current page
  const currentRecords = Record.slice(indexOfFirstRecord, indexOfLastRecord);

  // no of items on a page
  const itemsNo = currentRecords.length;

  // Calculate the number of pages.

  const nPages = Math.ceil(Record.length / recordsPerPage);

  return (
    <div className="w-full  h-full p-4">
      <div className="grid grid-cols-1 sm:grid-cols-3  gap-x-2 sm:gap-x-8 gap-y-4 w-full md:max-w-7xl mt-4 mb-8">
        <div className="sm:col-span-3">
          <span className="font-[500] hidden md:inline h-fit text-xl md:text-2xl whitespace-nowrap">
            My Wallet
          </span>
          <span className="font-[500] inline md:hidden h-fit md:mb-4 text-xl md:text-2xl whitespace-nowrap">
            Dashboard {">>"} STX Wallet
          </span>
        </div>
        <div className="bg-[#FCFCFC] shadow-sm flex flex-col py-2 px-4  gap-2 justify-between">
          <div className="flex justify-between  py-4 ">
            <span>Total Balance</span>
            <button className="block sm:hidden text-[14px] bg-[#FFF5F7] px-4 ml-auto rounded-full text-[#F00530] border border-transparent focus:border-[#F00530]">
              Connect STX Account
            </button>
          </div>
          <div className="">
            <span className="tracking-wide">
              <span className="text-5xl font-semibold">0.00</span>
              <span className="text-1xl">STX /</span>
              <span className="text-gray-500 text-1xl"> 0.00NGN</span>
            </span>
          </div>
          <div className="flex justify-start items-center gap-4 flex-wrap py-4">
            <span className="text-gray-500">Q0GP2DPPE4H9N0G....</span>
            <FiCopy className="ml-2 text-[#BFBFBF]" />
          </div>
          <div className="flex justify-start items-center gap-4 py-4 text-white">
            <button className="bg-red-500 py-3 px-3 lg:px-6 md:px-4  rounded flex gap-1 justify-between items-center ">
              <ArrowUpIcon className="h-5 w-5" />
              Send
            </button>
            <button className="bg-red-500 py-3 px-1 lg:px-5 md:px-2 rounded flex gap-1 justify-between items-center">
              <ArrowDownIcon className="h-5 w-5" />
              Receive
            </button>
          </div>
        </div>
        <div className="flex  flex-col gap-4 sm:col-span-2 justify-start md:justify-center bg-[#FCFCFC] rounded shadow-sm px-4 py-6">
          <div className="mr-auto">
            <span>Quick Links</span>
          </div>
          <div className=" grid grid-cols-2  sm:grid-cols-4  gap-x-4 gap-y-7">
            <div className="bg-white flex flex-col justify-between gap-4 items-center rounded-lg w-full py-6 border-2">
              <span>
                <img src={Dollar} className="h-10 w-10" alt="dollar" />
              </span>
              <span>Buy STX</span>
            </div>
            <div className="bg-white flex flex-col justify-between gap-4 items-center rounded-lg w-full py-6 border-2">
              <span>
                <img src={Withdraw} className="h-10 w-10" alt="dollar" />
              </span>
              <span className="">Withdraw Fund</span>
            </div>
            <div className="bg-white flex flex-col justify-between gap-4 items-center rounded-lg w-full py-6 border-2">
              <span>
                <img src={FundAccount} className="h-10 w-10" alt="dollar" />
              </span>
              <span>Fund account</span>
            </div>
            <div className="bg-white flex flex-col justify-between gap-4 items-center rounded-lg w-full py-6 border-2">
              <span>
                <img src={Transfer} className="h-10 w-10" alt="dollar" />
              </span>
              <span>Bank transfer</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between bg-[white] px-4 py-6 sm:col-span-3 rounded">
          <div className="flex justify-between">
            <div>Transactions</div>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button className=" flex justify-between gap-2 items-center rounded-xl text-gray-200 border px-3 py-1">
                    <BsClipboardPlus className="h-5 w-5 " />
                    Export
                  </Popover.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-20 left-1/2 transform -translate-x-1/2 mt-3 pl-2 pr-12 w-max ">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 ">
                        <div className="relative grid text-[14px] gap-4 bg-white p-2 text-gray-200  ">
                          <div className=" px-4 py-2 hover:bg-gray-300 rounded cursor-pointer hover:text-red-400 whitespace-nowrap ">
                            Export as .xlsx
                          </div>

                          <div className="px-4 py-2 hover:bg-gray-300 rounded cursor-pointer hover:text-red-400 whitespace-nowrap">
                            Export as .doc
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </div>
          {currentRecords.length > 0 ? (
            <Table record={currentRecords} />
          ) : (
            <div className="flex flex-col items-center justify-center gap-12 py-8">
              <img src={Vault} alt="vault" />
              <div className="text-[#BFBFBF] flex flex-col gap-1 justify-center items-center">
                <span>This is where you’ll see all your transactions.</span>
                <span>Get some STX to get started.</span>
              </div>
              <div>
                <button className="text-red-500 bg-[#FFF5F7] px-6 rounded py-2 text-sm">
                  Fund your account
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="sm:col-span-3">
          <Pagination
            nPages={nPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            recordsPerPage={itemsNo}
          />
        </div>
      </div>
    </div>
  );
};

export default Wallet;
