import React from "react";

const Center = ({ handleClick, setCenterId, CenterList }) => {
  const clickHandler = (e) => {
    setCenterId(e);
    handleClick();
  };
  if (CenterList.length <= 0) return <>Loading ...</>;
  return (
    <div className="w-full">
      {CenterList.map((center) => {
        return (
          <div
            className="mb-6 flex flex-col md:border-0 border border-x-0 border-b-0 border-t-gray-500 "
            key={center.id}
          >
            <div className=" py-4 md:pb-2">
              <span>{center.center_name}</span>
            </div>
            <div className="text-sm pb-2">
              <span>
                43 mambolo street wuse zone 2 zone 2 Mambolo St, Wuse 904101,
                Abuja, Nigeria,
              </span>
            </div>
            <div className="text-sm pb-2">
              <span>Monday - Friday</span>
            </div>
            <div className="text-sm pb-2">
              <span>08:30am - 04:00pm</span>
            </div>
            <div className="text-sm pb-2">
              <span>5 Appointment Remaining</span>
            </div>
            <div className="pt-2 text-sm lg:text-base">
              <button
                className="rounded bg-red-500 text-white px-8 py-2"
                onClick={() => clickHandler(center.id)}
              >
                Schedule Appointment
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Center;
