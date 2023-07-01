import { useState, useEffect } from "react";

import Modal from "../../../components/Modal";
import { PenIcon } from "../../../icons";
import TaskEditContent from "../../../components/Tasks/TaskEditContent";
import { useDispatch, useSelector } from "react-redux";
import { getOneTaskAsync } from "./Slice/taskSlice";
export default function TaskRow({ task, cardItem, setFetch }) {
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const mockData = {
    label: 1,
    name: "Mock task",
    date: "27-7-65",
    checkLists: 10,
    checkListsChecked: 1,
    members: ["panuwat", "Laksami"],
    attachment: true,
    comments: 2,
  };

  const dispatch = useDispatch();

  const handleMouseOver = () => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  };

  return (
    task && (
      <div>
        <div
          className=" flex cursor-pointer relative"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          onClick={() => {
            setOpen(true);
          }}
        >
          <div className="hover:bg-gray-200 flex justify-between rounded-xl shadow-[0_1px_2px_rgb(0_0_0_/0.2)] bg-[#f6f5fa]   p-4 w-full mx-5 my-2 h-fit">
            <div className="flex justify-between flex-col w-full ">
              <div className="flex justify-between">
                <div className="w-10 h-2 bg-blue-600 rounded-full"></div>
              </div>
              <p className="font-light text-s">{task.taskName}</p>

              <div className="w-100 h-10 flex items-end gap-5 text-gray-600">
                <div className="flex gap-2">
                  <i class="fa-regular fa-clock "></i>
                  <p className="font-light text-xs">
                    {new Date(task.dueDate).toDateString()}
                  </p>
                </div>
                <div className="flex items-center justify-center gap-2 text-gray-600 ">
                  <i class="fa-regular fa-square-check "></i>
                  <p className="font-light text-xs">
                    {mockData.checkListsChecked}/{mockData.checkLists}
                  </p>
                </div>
                <div className="flex-end bg-blue-600 rounded-full h-5 w-5"></div>
              </div>
            </div>
            {hover && (
              <div className="absolute top-5 right-10">
                <PenIcon />
              </div>
            )}
          </div>
        </div>
        {open && (
          <Modal
            title="Create Task"
            open={() => {
              setOpen(true);
            }}
            width={50}
            onClose={() => {
              setOpen(false);
              setFetch(true);
            }}
          >
            <TaskEditContent
              open={open}
              task={task}
              cardItem={cardItem}
              setFetch={setFetch}
            ></TaskEditContent>
          </Modal>
        )}
      </div>
    )
  );
}
