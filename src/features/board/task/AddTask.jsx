import React, { useEffect, useState } from "react";
import { addTaskAsync } from "../../../features/board/task/Slice/taskSlice";
import { useDispatch } from "react-redux";
// import { v4 as uuid4 } from "uuid";

function AddTask({ setOpenModal, cardItem, tasksOfCards, fetch, setFetch }) {
  const [taskName, setTaskName] = useState("");
  const dispatch = useDispatch();

  const taskNameHandler = (e) => {
    e.preventDefault();
    setTaskName(e.target.value);
  };

  const submitTaskName = () => {
    console.log("taskName", taskName);
    console.log("cardItem", cardItem);
    console.log("tasksOfCards", tasksOfCards);
    const input = {
      cardId: cardItem.id,
      task: { taskName: taskName, position: tasksOfCards?.length + 1 || 1 },
      // task: { taskName: taskName },
    };
    console.log("input in submit task", input);
    dispatch(addTaskAsync(input));
    setFetch(!fetch);
    window.location.reload();
    setOpenModal();
  };
  return (
    <div className="flex flex-col items-center">
      <div className="w-[300px] flex items-center justify-center bg-red-400">
        <img
          className=""
          src="https://img.freepik.com/free-vector/checklist-concept-illustration_114360-339.jpg?w=1380&t=st=1688125388~exp=1688125988~hmac=efbb3e8450f81f2b9732e7c2edff6d18e80572347eb2e5a90044cbedd9ab20f0"
          alt=""
        />
      </div>

      <div className="flex gap-5 items-center justify-center">
        <label htmlFor="task">Task Name</label>
        <input
          autoFocus
          name="task"
          value={taskName}
          onChange={taskNameHandler}
          id="task"
          type="text"
          className="rounded-[4px]  p-1 bg-gray-100 border"
        />
      </div>
      <div className="flex gap-5 mt-5 mb-5">
        <button
          onClick={submitTaskName}
          className="bg-blue-600 hover:bg-blue-700 rounded-[4px] p-1 px-2 text-white"
        >
          Create
        </button>
        <button
          onClick={() => {
            setOpenModal();
          }}
          className="bg-gray-100 p-1 px-2 rounded-[4px] hover:bg-gray-200"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default AddTask;
