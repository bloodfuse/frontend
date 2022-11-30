import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

import { XIcon } from "@heroicons/react/outline";

export default function DeleteModal({
  show,
  setShow,

  deleteAppointmentFunc,
  isLoading,
}) {
  return (
    <>
      <Transition appear show={show} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setShow(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex h-screen sm:min-h-full items-center justify-center md:p-4 text-center ">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full sm:w-[80%] sm:mx-auto h-full sm:h-auto px-5 md:px-28 max-w-3xl transform overflow-hidden sm:rounded-[4px] py-9 bg-white p-6 text-left align-middle shadow-xl">
                  <Dialog.Title
                    as="h2"
                    className=" w-full my-5 flex md:text-3xl text-xl justify-between font-extrabold text-gray-900"
                  >
                    <span>Do you want to delete this appointment?</span>
                    <button
                      type="button"
                      className="justify-center"
                      onClick={() => {
                        setShow(false);
                      }}
                    >
                      <XIcon
                        className="h-6 w-6 border-none"
                        aria-hidden="true"
                      />
                    </button>
                  </Dialog.Title>
                  <div className="flex-col flex justify-between items-center w-full sm:flex-row gap-5">
                    <button
                      className="bg-white px-7 transform sm:uppercase text-lg text-[#F00530] border focus:ring-4 focus:outline-none leading-loose focus:ring-red-300 font-medium rounded-[4px]  w-full py-2 lg:py-4 text-center"
                      onClick={() => setShow(false)}
                    >
                      No
                    </button>
                    <button
                      className="text-white px-7 transform sm:uppercase text-lg bg-[#F00530] hover:bg-red-800 focus:ring-4 focus:outline-none leading-loose focus:ring-red-300 font-medium rounded-[4px]  w-full py-2 lg:py-4 text-center"
                      onClick={deleteAppointmentFunc}
                    >
                      {!isLoading ? (
                        <>
                          <div
                            role="status"
                            className="flex justify-center gap-2 items-center"
                          >
                            <svg
                              aria-hidden="true"
                              className=" w-8 h-6 text-gray-200 animate-spin  fill-white"
                              viewBox="0 0 100 101"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="currentColor"
                              />
                              <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentFill"
                              />
                            </svg>{" "}
                            Deleting ...
                            <span className="sr-only">Deleting...</span>
                          </div>
                        </>
                      ) : (
                        "Delete"
                      )}
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}