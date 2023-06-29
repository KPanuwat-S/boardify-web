import React, { useEffect, useState } from "react";

import DropdownTask from "./DropDownTask";
import JoinTaskSideMenu from "./JoinTaskSideMenu";
import LabelSideMenu from "./LabelSideMenu";
import DateSideMenu from "./DateSideMenu";
import TaskDescription from "./TaskDescription";
import ChecklistListItems from "./ChecklistListItems";
import { useDispatch, useSelector } from "react-redux";
import {
  editTaskAsync,
  getOneTaskAsync,
} from "../../features/board/task/Slice/taskSlice";

import cn from "../../utils/cn";
import { useRef } from "react";

function TaskEditContent({ open, task, cardItem, setFetch }) {
  const [openDescription, setOpenDescription] = useState(false);
  const [openDropDown, setOpenDropDown] = useState(false);

  const [isEdit, setIsEdit] = useState(false);
  const [check, setCheck] = useState(false);
  const [add, setAdd] = useState(false);
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);
  const inputRef = useRef(null);

  const [taskItem, setTaskItem] = useState(
    useSelector((state) => state.task.taskItem) || {
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
  const [title, setTitle] = useState(taskItem.name || "");
  const fetchTask = useSelector((state) => state.task.taskItem);
  console.log("taskItem", taskItem);
  useEffect(() => {
    dispatch(getOneTaskAsync(task.taskId)).unwrap();
  }, []);

  useEffect(() => {
    if (fetchTask !== null) setTaskItem(fetchTask);
  }, [fetchTask]);

  const onSuccess = () => {
    setOpenDropDown(false);
  };
  const createLabel = (labelId) => {
    const labelObj = { 1: "Urgent", 2: "Important", 3: "Medium", 4: "Low" };
    return labelObj[labelId];
  };

  const submitEditTitle = () => {
    const editTaskItem = { ...taskItem, name: title };
    const input = {
      id: taskItem.id,
      data: editTaskItem,
    };
    dispatch(editTaskAsync(input));
    // setTaskItem((oldObject) => {
    //   return { ...oldObject, name: title };
    // });

    setFetch(true);
    setTaskItem(editTaskItem);
    setIsEdit(false);
  };

  return (
    <>
      <div
        className="flex w-full mx-auto gap-10 p-5 rounded-[4px]"
        onClick={submitEditTitle}
      >
        {/* Right */}

        <div className="flex flex-col gap-5 flex-1 ">
          <div>
            <div className="flex justify-between items-center">
              <div className="flex gap-5 items-center">
                <i class="fa-solid fa-bars-progress text-gray-500"></i>
                <h1
                  className="cursor-pointer hover:bg-gray-100 p-2 rounded-[4px]"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  {isEdit ? (
                    <input
                      className="px-2 border"
                      type="text"
                      defaultValue={taskItem.name}
                      value={title}
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                    />
                  ) : (
                    <h1
                      onClick={() => {
                        setIsEdit(true);
                        setTitle(taskItem.name);
                      }}
                    >
                      {taskItem.name}
                    </h1>
                  )}
                </h1>
                {taskItem.dueDate && (
                  <div className="flex items-center gap-2 p-2 rounded-[4px] bg-blue-100 font-ligt text-xs">
                    <i class="fa-solid fa-clock-rotate-left text-gray-500"></i>
                    <p className="">
                      Due: {new Date(taskItem.dueDate).toLocaleString()}
                    </p>
                  </div>
                )}
              </div>
            </div>
            <p className="font-light text-[14px]">In Card: {taskItem.name}</p>
            <div className="mt-5 flex gap-5">
              {taskItem.Label && (
                <div>
                  <p className="font-light text-xs mb-1">Labels</p>
                  <div
                    className={cn(
                      taskItem.labelId == 1
                        ? "bg-red-500"
                        : taskItem.labelId == 2
                        ? "bg-blue-600"
                        : taskItem.labelId == 3
                        ? "bg-yellow-500"
                        : "bg-green-500",
                      "  rounded-full w-20 text-center text-white font-light text-xs"
                    )}
                  >
                    {createLabel(taskItem.labelId)}
                  </div>
                </div>
              )}
              {taskItem.TaskMembers?.length > 0 && (
                <div>
                  <p className="font-light text-xs mb-1">Member</p>
                </div>
              )}
            </div>
          </div>
          <div>
            <TaskDescription
              setOpenDescription={setOpenDescription}
              openDescription={openDescription}
              taskItem={taskItem}
            />
            <ChecklistListItems setTaskItem={setTaskItem} />
          </div>
        </div>

        <div className="flex w-[150px] flex-col gap-2">
          <DropdownTask
            width="w-[420px]"
            label="Due Date"
            icon={<i class="fa-regular fa-clock ml-2"></i>}
            Component={DateSideMenu}
            cardItem={cardItem}
            setTaskItem={setTaskItem}
          />
          <DropdownTask
            label="Join Task"
            icon={<i class="fa-solid fa-arrow-left ml-2"></i>}
            Component={JoinTaskSideMenu}
            cardItem={cardItem}
            setTaskItem={setTaskItem}
          />
          <DropdownTask
            label="Labels"
            icon={<i class="fa-solid fa-tag ml-2"></i>}
            Component={LabelSideMenu}
            cardItem={cardItem}
            setTaskItem={setTaskItem}
          />
        </div>
      </div>
    </>
  );
}

export default TaskEditContent;
