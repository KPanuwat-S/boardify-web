import React from "react";

function DateSideMenu() {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-center mt-1 ">Select Date</h1>
      <hr className="mb-1" />
      <div className="rounded-[4px] m-2 p-2">

        
      </div>
      <div className="flex justify-center gap-2 mt-5 mb-2">
        <button className="bg-blue-600 text-white py-1 px-5 rounded-[4px]">
          Save
        </button>
        <button className="py-1 px-2 rounded-[4px] border border-gray-300 hover:bg-gray-300">
          Cancel
        </button>
      </div>
    </div>
  );
}

export default DateSideMenu;
