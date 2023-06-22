// import React from "react";
import TaskRow from "../features/core-components/middle/task-component/TaskRow";
import { MeatballsIcon2 } from "../icons";
import AddTaskContainer from "../features/core-components/middle/task-component/AddTaskContainer";
function TodoItem({ todo }) {
  return (
    <>
      <div className="bg-[#F1F2F4] w-[320px] h-fit p-2">
        <div className="flex justify-between p-5">
          <div>{todo.title}</div>
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

export default TodoItem;
