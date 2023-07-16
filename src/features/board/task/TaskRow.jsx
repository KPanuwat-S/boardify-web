import { useState } from "react";
import Modal from "../../../components/Modal";
import { PenIcon } from "../../../icons";

import TaskEditContent from "../../../components/Tasks/TaskEditContent";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTaskAsync,
  getOneTaskAsync,
  removeTaskItem,
} from "./Slice/taskSlice";
import cn from "../../../utils/cn";

export default function TaskRow({ fetch, task, cardItem, setFetch }) {
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);

  const [openDeleteTask, setOpenDeleteTask] = useState(false);

  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);

  const [taskItem, setTaskItem] = useState(
    task || {
      name: "",
      description: "",
      position: "",
      dueDate: "",
      attachmentId: "",
      labelId: "",
      userId: user.id,
      Label: {
        description: "",
        color: "",
      },
      ChecklistItems: [],
      Comments: [],
      TaskMembers: [],
      Attachment: {
        file: "",
        userId: user.id,
      },
    }
  );

  const deleteTaskHandler = () => {
    dispatch(deleteTaskAsync(task.taskId));
    setOpenDeleteTask(false);
    setFetch(!fetch);
  };
  return (
    taskItem && (
      <div>
        <div
          className=" flex cursor-pointer relative"
          onClick={() => {
            setOpen(true);
          }}
        >
          <div className="hover:bg-gray-200 flex justify-between rounded-xl shadow-[0_1px_2px_rgb(0_0_0_/0.2)] bg-[#f6f5fa]   p-4 w-full mx-5 my-2 h-fit">
            <div className="flex justify-between flex-col w-full ">
              <div className="flex justify-between">
                {task.labelColor && (
                  <div
                    className={cn(
                      task.labelColor == "red"
                        ? "bg-red-400"
                        : task.labelColor == "blue"
                        ? "bg-blue-400"
                        : task.labelColor == "yellow"
                        ? "bg-yellow-400"
                        : "bg-green-400",
                      "w-10 h-2 rounded-full"
                    )}
                  ></div>
                )}
              </div>
              <p className="font-light text-s w-[180px]">{task.taskName}</p>

              <div className="w-100 h-10 flex items-end gap-5 text-gray-600">
                {task?.dueDate && (
                  <div className="flex gap-2">
                    <i class="fa-regular fa-clock "></i>
                    <p className="font-light text-xs">
                      {new Date(task.dueDate).toDateString()}
                    </p>
                  </div>
                )}

                {task.checkListsTotal > 0 && (
                  <div className="flex items-center justify-center gap-2 text-gray-600 ">
                    <i class="fa-regular fa-square-check "></i>
                    <p className="font-light text-xs">
                      {task.checkListsChecked}/{task.checkListsTotal}
                    </p>
                  </div>
                )}

                <div className="items-end">
                  {task.members.length > 0 && (
                    <i class="fa-regular fa-user"></i>
                  )}
                </div>
              </div>
            </div>

            {
              <>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenDeleteTask(true);
                  }}
                  className="hover:bg-gray-300 group  py-1 px-2 rounded-xl absolute top-5 right-8"
                >
                  <i class="fa-regular group-hover:text-white text-gray-300 fa-trash-can fa-sm"></i>
                </div>
                <Modal
                  title="Delete Task"
                  open={openDeleteTask}
                  width={20}
                  onClose={(e) => {
                    e.stopPropagation();
                    setOpenDeleteTask(false);
                    setFetch(!fetch);
                  }}
                >
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    <p>Do you want to delete this task?</p>
                    <div className="bg-gray-100 flex items-center gap-5 px-5 py-3 rounded-[4px] mt-5">
                      <i class="fa-regular fa-file"></i>
                      <p className="font-semibold">{task?.taskName}</p>
                    </div>
                    <div
                      className="flex gap-5 mt-10"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      <button
                        onClick={deleteTaskHandler}
                        className="text-gray-500 border hover:bg-gray-200 p-2 rounded-[4px]"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => {
                          setOpenDeleteTask(false);
                        }}
                        className="hover:bg-blue-700 bg-blue-600 p-2 text-white rounded-[4px]"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </Modal>
              </>
            }
          </div>
        </div>
        {open && (
          <Modal
            title="Edit Task"
            open={() => {
              setOpen(true);
            }}
            width={50}
            onClose={() => {
              console.log("close");
              console.log("fetch", fetch);
              setOpen(false);
              setFetch(!fetch);
              dispatch(removeTaskItem());
            }}
          >
            <TaskEditContent
              fetch={fetch}
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
