import React from "react";
import { useSelector } from "react-redux";
import MemberItem from "../Member/MemberItem";
function JoinTaskSideMenu({ open, setOpen, cardItem,task,setTaskItem }) {
  const { firstName, lastName, email } = useSelector(
    (state) => state.auth.user
  );

  return (
    open && (
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="flex flex-col w-[350px] gap-2 absolute z-50 bg-white border rounded-[4px] shadow-lg p-2"
      >
        <h1 className="text-center mt-1 ">Join this task</h1>
        <hr className="mb-1" />
        <div className="rounded-[4px] m-2 p-2">
          <MemberItem firstName={firstName} lastName={lastName} email={email} />
        </div>
        <div className="flex justify-center gap-2 mt-5 mb-2">
          <button
            onClick={() => {
              setOpen(false);
            }}
            className="bg-blue-600 text-white py-1 px-5 rounded-[4px]"
          >
            Join
          </button>
          <button className="py-1 px-2 rounded-[4px] border border-gray-300 hover:bg-gray-300">
            Cancel
          </button>
        </div>
      </div>
    )
  );
}

export default JoinTaskSideMenu;
