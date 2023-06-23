// import React from "react";
import AddTaskContainer from "../../features/board/task/AddTaskContainer";
import TaskRow from "../../features/board/task/TaskRow";
import { MeatballsIcon2 } from "../../icons";

function TaskItem({ todo }) {
  return (
    <>
      <div className=" bg-white  shadow-[0_0_4px_rgb(0_0_0_/0.2)] rounded-xl w-[320px] h-fit p-2">
        <div className="flex justify-between p-5">
          <div className="text-gray-600">{todo.title}</div>
          <div>
            <MeatballsIcon2 />
          </div>
        </div>
        <div>
          <TaskRow />
        </div>
        <AddTaskContainer />
      </div>
    </>
  );
}

export default TaskItem;
