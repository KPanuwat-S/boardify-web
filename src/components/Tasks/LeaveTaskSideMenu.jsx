import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MemberItem from "../Member/MemberItem";

import {
  addMeToTaskAsync,
  getOneTaskAsync,
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
  }, []);

  const { firstName, lastName, email, id } = useSelector(
    (state) => state.auth.user
  );
  const taskItem = useSelector((state) => state.task.taskItem);

  const submitJoinTask = () => {
    const meAsMember = taskItem.TaskMembers?.find(
      (el) => el.userId === id
    ).User;
    // if (meAsMember) return setOpen(false);
    const taskId = taskItem.id;
    console.log("taskId", taskId);
    const newMember = [...taskItem.TaskMembers, ];
    const editTaskItem = { ...taskItem, TaskMembers: newMember };
    dispatch(addMeToTaskAsync({ taskId }));
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
            onClick={submitJoinTask}
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
