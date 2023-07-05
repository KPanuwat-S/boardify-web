import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MemberItem from "../Member/MemberItem";

import {
  addMeToTaskAsync,
  getOneTaskAsync,
  removeMeFromTask,
  removeMeFromTaskAsync,
} from "../../features/board/task/Slice/taskSlice";
function LeaveTaskSideMenu({
  open,
  setOpen,
  cardItem,
  task,
  setTaskItem,
  setFetch,
  fetch,
}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneTaskAsync(taskItem?.id));
    // setTaskItemId(taskItem.id);
  }, [fetch]);

  const { firstName, lastName, email, id } = useSelector(
    (state) => state.auth.user
  );
  // if (memberAsMe >= 0) return;
  const user = useSelector((state) => state.auth.user);
  const taskItem = useSelector((state) => state.task.taskItem);
  const memberIntasks = useSelector((state) => state.task.membersInTask);
  const memberAsMe = memberIntasks.findIndex((el) => el.userId == user.id);

  // console.log("task in leave task", taskItem.id);
  const submitLeaveTask = () => {
    console.log("task id in leave", taskItem);
    dispatch(removeMeFromTaskAsync(taskItem));
    setFetch(!fetch);
    setOpen(false);
  };

  return (
    open && (
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="flex flex-col w-[350px] gap-2 absolute z-50 bg-white border rounded-[4px] shadow-lg p-2"
      >
        <h1 className="text-center mt-1 ">Leave this task</h1>
        <hr className="mb-1" />
        <div className="rounded-[4px] m-2 p-2">
          <MemberItem firstName={firstName} lastName={lastName} email={email} />
        </div>
        <div className="flex justify-center gap-2 mt-5 mb-2">
          <button
            onClick={submitLeaveTask}
            className="bg-blue-600 text-white py-1 px-5 rounded-[4px]"
          >
            Leave
          </button>

          <button
            className="py-1 px-2 rounded-[4px] border border-gray-300 hover:bg-gray-300"
            onClick={() => {
              setOpen(false);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    )
  );
}

export default LeaveTaskSideMenu;
