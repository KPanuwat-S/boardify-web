import { useState } from "react";
import Modal from "../../../components/Modal";
import { PenIcon } from "../../../icons";

import TaskEditContent from "../../../components/Tasks/TaskEditContent";
import { useDispatch, useSelector } from "react-redux";
import { getOneTaskAsync, removeTaskItem } from "./Slice/taskSlice";
import cn from "../../../utils/cn";

export default function TaskRow({ fetch, task, cardItem, setFetch }) {
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
  const user = useSelector((state) => state.auth.user);

  // console.log("task in task row", task);
  // useEffect(() => {
  //   dispatch(getOneTaskAsync(task.taskId)).unwrap();
  // }, []);

  // const taskFromCardSlice = useSelector((state) => state.card.cardItems);
  // const taskFromCardSlice2 = taskFromCardSlice.map((el) => el.tasks);
  // console.log("taskFromCardSlice2", taskFromCardSlice2);

  // const fetchTask = useSelector((state) => state.task.taskItem);

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

  // useEffect(() => {
  //   if (fetchTask !== null) setTaskItem(fetchTask);
  // }, [fetchTask]);

  // useEffect(() => {
  //   dispatch(getOneTaskAsync(task.taskId)).unwrap();
  // }, [fetch]);

  // console.log("task item", taskItem);
  // console.log("fetch", fetch);
  console.log("task", task);
  return (
    taskItem && (
      <div>
        <div
          className=" flex cursor-pointer relative"
          // onMouseOver={handleMouseOver}
          // onMouseOut={handleMouseOut}
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
                        ? "bg-red-500"
                        : task.labelColor == "blue"
                        ? "bg-blue-600"
                        : task.labelColor == "yellow"
                        ? "bg-yellow-500"
                        : "bg-green-500",
                      "w-10 h-2 rounded-full"
                    )}
                  ></div>
                )}
              </div>
              <p className="font-light text-s">{task.taskName}</p>

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

                {task.members.length > 0 && <i class="fa-regular fa-user"></i>}
              </div>
            </div>
            {/* {hover && (
              <div className="absolute top-5 right-10">
                <PenIcon />
              </div>
            )} */}
          </div>
        </div>
        {open && (
          <Modal
            title="Create Task"
            open={() => {
              setOpen(true);
              //
              // setFetch(!fetch);
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
