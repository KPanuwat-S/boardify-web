import React, { useState } from "react";
import SaveCancelBtnGroup from "./SaveCancelBtnGroup";
import { useDispatch, useSelector } from "react-redux";

function CheckListSideMenu({ open, setOpen, task, setTaskItem }) {
  const dispatch = useDispatch();

  const [checklistName, setChecklistName] = useState("");
  const taskItem = useSelector((state) => state.task.taskItem);
  // console.log("task item in checklist", taskItem);
  const handleChecklistName = (e) => {
    e.preventDefault();
    setChecklistName(e.target.value);
  };
  const submitChecklistName = (e) => {
    e.preventDefault();
    const editTaskItem = { ...taskItem, checklistName };
    const input = setOpen(false);
    // console.log("submitChecklistName");
  };
  return (
    open && (
      <div
        className="w-[250px] absolute z-50 bg-white border rounded-[4px] shadow-lg p-2"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h2 className="text-center mb-2">Add Checklist</h2>
        <hr />
        {/* <input
            type="text"
            placeHolder="Checklist Name"
            className="my-2 p-2 border w-full"
            value={checklistName}
            onChange={handleChecklistName}
          /> */}
        <div className="flex gap-2 items-center justify-center mt-5">
          <button
            className="bg-blue-600 text-white py-1 px-2 rounded-[4px]"
            onClick={submitChecklistName}
          >
            Add
          </button>
          <button className="py-1 px-2 rounded-[4px] border border-gray-300 hover:bg-gray-300">
            Cancel
          </button>
        </div>
      </div>
    )
  );
}

export default CheckListSideMenu;
