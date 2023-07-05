import React, { useEffect, useState } from "react";
import cn from "../../utils/cn";
import { useSelector, useDispatch } from "react-redux";
import {
  editTaskAsync,
  getOneTaskAsync,
} from "../../features/board/task/Slice/taskSlice";
function LabelSideMenu({
  open,
  setOpen,
  cardItem,
  task,
  setTaskItem,
  // taskItem,
  setFetch,
  fetch,
}) {
  const mockLabelsData = [
    { id: 1, description: "Urgent", color: "#ca3521" },
    { id: 2, description: "Important", color: "#0b66e4" },
    { id: 3, description: "Medium", color: "#e1b205" },
    { id: 4, description: "Low", color: "#4cce97" },
  ];
  const dispatch = useDispatch();
  const taskItem = useSelector((state) => state.task.taskItem);
  const [selectLabel, setSelectLabel] = useState("");

  useEffect(() => {
    dispatch(getOneTaskAsync(taskItem?.id));
  }, []);

  const submitLabel = (label = undefined) => {
    const editTaskItem = { ...taskItem, labelId: label?.id };
    const input = {
      id: taskItem.id,
      data: editTaskItem,
    };
    dispatch(editTaskAsync(input));
    // editTaskAsync ทำให้ข้อมูลหลังบ้านเปลี่ยน
    setTaskItem(editTaskItem);
    setFetch(!fetch);
    // setTaskItem => ทำให้เวลาคลิกแล้ว state ใน edit เปลี่ยน
  };

  const removeLabel = () => {
    const editTaskItem = { ...taskItem, labelId: null, Label: null };
    console.log("editTaskItem label", editTaskItem);
    const input = {
      id: taskItem.id,
      data: editTaskItem,
    };
    dispatch(editTaskAsync(input));
    // editTaskAsync ทำให้ข้อมูลหลังบ้านเปลี่ยน
    setTaskItem(editTaskItem);
    // setFetch(!fetch);
    // setTaskItem => ทำให้เวลาคลิกแล้ว state ใน edit เปลี่ยน
  };
  console.log("taskItem in label", taskItem);
  return (
    open && (
      <div
        className="flex flex-col gap- absolute z-50 bg-white border rounded-[4px] shadow-lg p-2"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h1 className="text-center mt-1 ">Select Label</h1>
        <hr className="mb-1" />
        <div className="rounded-[4px] m-2 p-2">
          {mockLabelsData.map((el) => {
            // const color = `bg-[${el.color}]`;
            const color = `bg-[${el.color}]`;
            return (
              <div
                onClick={() => {
                  setSelectLabel(el);
                }}
                key={el.key}
                className={cn(
                  el.id == selectLabel.id ? "bg-gray-100" : "",
                  "flex gap-5 justify-between items-center hover:bg-gray-100 rounded-[4px] p-2"
                )}
              >
                <div key={el.key} className="text-gray-600 font-light ">
                  {el.description}
                </div>
                <div
                  key={el.key}
                  className={cn(
                    el.id == 1
                      ? "bg-red-500"
                      : el.id == 2
                      ? "bg-blue-600"
                      : el.id == 3
                      ? "bg-yellow-500"
                      : "bg-green-500",
                    "h-3 w-10 rounded-[4px]"
                  )}
                ></div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center gap-2 mt-5 mb-2">
          <button
            className="bg-blue-600 text-white py-1 px-5 rounded-[4px]"
            onClick={() => {
              setOpen(false);
              submitLabel(selectLabel);
            }}
          >
            Save
          </button>
          <button
            onClick={() => {
              setOpen(false);
            }}
            className="py-1 px-2 rounded-[4px] border border-gray-300 hover:bg-gray-300"
          >
            Cancel
          </button>
          <div className="flex gap-2 items-center py-1 px-5 rounded-[4px] border p-1">
            <i class="fa-regular fa-trash-can text-gray-700"></i>
            <button
              className="text-gray-700  "
              onClick={() => {
                setOpen(false);
                removeLabel();
              }}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    )
  );
}

export default LabelSideMenu;
