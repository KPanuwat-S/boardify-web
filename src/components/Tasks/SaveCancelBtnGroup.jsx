import React from "react";

function SaveCancelBtnGroup() {
  return (
    <div className="flex gap-2">
      <button className="bg-blue-600 text-white py-1 px-2 rounded-[4px]">
        Save
      </button>
      <button className="py-1 px-2 rounded-[4px] border border-gray-300 hover:bg-gray-300">
        Cancel
      </button>
    </div>
  );
}

export default SaveCancelBtnGroup;
