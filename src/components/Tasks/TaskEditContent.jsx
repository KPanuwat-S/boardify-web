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
  getMemberInTaskAsync,
  getOneTaskAsync,
} from "../../features/board/task/Slice/taskSlice";
import LeaveTaskSideMenu from "./LeaveTaskSideMenu";

import cn from "../../utils/cn";
import Loading from "../../components/Loading";

function TaskEditContent({ open, task, cardItem, setFetch, fetch }) {
  const dispatch = useDispatch();
  // const isLoadind = useSelector((state) => state.task.isLoading);

  useEffect(() => {
    dispatch(getOneTaskAsync(task.taskId));
    dispatch(getMemberInTaskAsync(task.taskId));
    // dispatch(getOneTaskAsync(taskItem.id));
    // dispatch(getMemberInTaskAsync(taskItem.id));
  }, [fetch]);

  const user = useSelector((state) => state.auth.user);

  const memberIntasks = useSelector((state) => state.task.membersInTask);
  const memberAsMe = memberIntasks.findIndex((el) => el.userId == user.id);

  const [openDescription, setOpenDescription] = useState(false);
  const [openDropDown, setOpenDropDown] = useState(false);

  const [isEdit, setIsEdit] = useState(false);
  const [check, setCheck] = useState(false);
  const [add, setAdd] = useState(false);

  const [memberAll, setMemberInTasks] = useState([]);

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

  console.log("cardItem", cardItem);
  const fetchTask = useSelector((state) => state.task.taskItem);
  console.log("fetchTask", fetchTask);
  // const [title, setTitle] = useState(taskItem.name || "Title");
  const [title, setTitle] = useState(taskItem.name || "Title");

  const [join, setJoin] = useState(false);

  console.log("join", join);

  useEffect(() => {
    if (fetchTask !== null) {
      setTaskItem(fetchTask);
    }
  }, [fetchTask]);

  useEffect(() => {
    if (memberIntasks !== undefined) setMemberInTasks(memberIntasks);
  }, [memberIntasks]);

  const createLabel = (labelId) => {
    const labelObj = { 1: "Urgent", 2: "Important", 3: "Medium", 4: "Low" };
    return labelObj[labelId];
  };

  console.log("task", task);

  const submitEditTitle = () => {
    const editTaskItem = { ...taskItem, cardId: cardItem.id, name: title };
    const input = {
      id: taskItem.id,
      data: editTaskItem,
    };
    console.log("input submit title", input);
    dispatch(editTaskAsync(input));

    setFetch(!fetch);
    setTaskItem(editTaskItem);
    setIsEdit(false);
  };
  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const dueDate = new Date(fetchTask?.dueDate).getTime();
  const nowDate = new Date().getTime();
  // if (isLoadind) {
  //   return <Loading></Loading>;
  // }

  return (
    <>
      <div
        className="flex w-full mx-auto gap-10 p-5 rounded-[4px]"
        // onClick={submitEditTitle}
      >
        {/* Right */}

        <div className="flex flex-col gap-5 flex-1 ">
          <div>
            <div className="flex justify-between items-center">
              <div className="flex gap-5 items-center">
                <i class="fa-solid fa-bars-progress text-gray-500"></i>
                <h1
                  className="cursor-pointer  p-2 rounded-[4px]"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  {isEdit ? (
                    <div className="flex gap-2">
                      {" "}
                      <input
                        className="px-2 outline outline-blue-600"
                        type="text"
                        value={title}
                        onChange={(e) => {
                          setTitle(e.target.value);
                        }}
                        onClick={() => {
                          setIsEdit(true);
                        }}
                        autoFocus={true}
                      />
                      <div className="font-light flex flex-col gap-2">
                        <button
                          onClick={submitEditTitle}
                          className="text-white text-xs bg-blue-600 w-[50px] hover:bg-blue-700 p-1 rounded-[4px]"
                        >
                          Save
                        </button>
                        <button
                          onClick={() => {
                            setIsEdit(false);
                          }}
                          className="text-xs p-1 rounded-[4px] bg-gray-100 hover:bg-gray-200"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <h1
                      className="px-2 hover:bg-gray-100"
                      onClick={() => {
                        setIsEdit(true);
                        setTitle(taskItem.name);
                      }}
                    >
                      {taskItem.name}
                    </h1>
                  )}
                  {/* <h1
                className="px-2 w-[230px]"
                onClick={() => {
                  // setIsEdit(true);
                  // setTitle(taskItem.name);
                }}
              >
                {taskItem.name}
              </h1> */}
                </h1>
                {fetchTask?.dueDate && (
                  <>
                    {nowDate > dueDate ? (
                      <div className="flex items-center gap-2 p-2 rounded-[4px] bg-red-100 font-ligt text-xs">
                        <i class="fa-solid fa-clock-rotate-left text-gray-500"></i>
                        <p className="">
                          Due:{" "}
                          {new Date(fetchTask?.dueDate).toLocaleDateString(
                            "en-US",
                            dateOptions
                          )}
                        </p>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 p-2 rounded-[4px] bg-blue-100 font-ligt text-xs">
                        <i class="fa-solid fa-clock-rotate-left text-gray-500"></i>
                        <p className="">
                          Due:{" "}
                          {new Date(fetchTask.dueDate).toLocaleDateString(
                            "en-US",
                            dateOptions
                          )}
                        </p>
                      </div>
                    )}
                    {nowDate > dueDate && (
                      <p className="text-xs text-red-400 font-ligt">Over Due</p>
                    )}
                  </>
                )}
              </div>
            </div>
            {/* <p className="font-light text-[14px]">In Card: {cardItem.name}</p> */}
            <div className="mt-5 flex gap-5">
              {taskItem.labelId && (
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
            </div>
          </div>
          <div>
            {" "}
            <TaskDescription
              setOpenDescription={setOpenDescription}
              openDescription={openDescription}
              taskItem={taskItem}
              fetch={fetch}
              setFetch={setFetch}
            />
            <ChecklistListItems
              taskItem={taskItem}
              setTaskItem={setTaskItem}
              fetch={fetch}
              setFetch={setFetch}
            />
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
            taskItem={taskItem}
            fetch={fetch}
            setFetch={setFetch}
          />
          {memberAsMe >= 0 ? (
            <DropdownTask
              label="Leave Task"
              icon={<i class="fa-solid fa-arrow-right-from-bracket ml-2"></i>}
              Component={LeaveTaskSideMenu}
              cardItem={cardItem}
              setTaskItem={setTaskItem}
              taskItem={taskItem}
              fetch={fetch}
              setFetch={setFetch}
            />
          ) : (
            <DropdownTask
              label="Join Task"
              icon={<i class="fa-solid fa-arrow-left ml-2"></i>}
              Component={JoinTaskSideMenu}
              cardItem={cardItem}
              setTaskItem={setTaskItem}
              taskItem={taskItem}
              fetch={fetch}
              setFetch={setFetch}
            />
          )}
          {/* <DropdownTask
        label="Join Task"
        icon={<i class="fa-solid fa-arrow-left ml-2"></i>}
        Component={JoinTaskSideMenu}
        cardItem={cardItem}
        setTaskItem={setTaskItem}
        taskItem={taskItem}
        fetch={fetch}
        setFetch={setFetch}
      /> */}
          <DropdownTask
            setFetch={setFetch}
            fetch={fetch}
            label="Labels"
            icon={<i class="fa-solid fa-tag ml-2"></i>}
            Component={LabelSideMenu}
            cardItem={cardItem}
            setTaskItem={setTaskItem}
            taskItem={fetchTask}
          />
          {fetchTask?.TaskMembers?.length > 0 && (
            <div className=" mt-5">
              <p className=" text-xs mb-1 font-semibold">Assigned To</p>
              <div className="grid grid-cols-4 gap-1">
                {fetchTask?.TaskMembers?.map((el) => (
                  <div className=" flex items-center justify-center text-white bg-blue-400 rounded-full w-[30px] h-[30px]">
                    {el.User.firstName[0].toUpperCase()}
                    {el.User.lastName[0].toUpperCase()}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default TaskEditContent;
