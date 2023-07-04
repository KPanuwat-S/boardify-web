import React, { useState } from "react";
import { generateDate, months } from "../../utils/calendar";
import cn from "../../utils/cn";
import dayjs from "dayjs";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { useSelector, useDispatch } from "react-redux";
import {
  editTaskAsync,
  getOneTaskAsync,
} from "../../features/board/task/Slice/taskSlice";

function DateSideMenu({
  open,
  setOpen,
  cardItem,
  task,
  setTaskItem,
  fetch,
  setFetch,
}) {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const currentDate = dayjs();
  const dispatch = useDispatch();
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(currentDate);
  const taskItem = useSelector((state) => state.task.taskItem);

  const cards = useSelector((state) => state.card.cardItems);

  // const tasksOfCards = cards.find((card) => card.id == cardItem.id).tasks;

  // tasks of cards = array of task in a card
  console.log("taskItem", taskItem);
  console.log("task prop", task);
  // console.log("tasksofcard", tasksOfCards);
  const submitDate = (date) => {
    const editTaskItem = { ...taskItem, dueDate: date };

    // console.log("editTaskItem", editTaskItem);
    const input = {
      id: taskItem.id,
      data: editTaskItem,
    };

    dispatch(editTaskAsync(input));
    dispatch(getOneTaskAsync(taskItem.id));
    setTaskItem(editTaskItem);
    setFetch(!fetch);
    setOpen(false);
  };

  return (
    open && (
      <div
        className="flex flex-col gap-2 absolute z-50 bg-white border rounded-[4px] shadow-lg p-2"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h1 className="text-center ">Select Date</h1>
        <hr className="" />
        <div className="rounded-[4px] mx-2 p-2">
          {/* Celendar */}
          <div className="w-[350px] mx-auto">
            <div className="flex justify-between mb-2">
              <h1 className="">
                {months[today.month()]}, {today.year()}
              </h1>
              <div className="flex items-center gap-5">
                <GrFormPrevious
                  className="w-5 h-5"
                  onClick={() => {
                    setToday(today.month(today.month() - 1));
                  }}
                />
                <h1
                  onClick={() => {
                    setToday(currentDate);
                  }}
                >
                  Today
                </h1>
                <GrFormNext
                  className="w-5 h-5"
                  onClick={() => {
                    setToday(today.month(today.month() + 1));
                  }}
                />
              </div>
            </div>

            <div className="m-2">
              <div className="w-full grid grid-cols-7">
                {days.map((day, index) => {
                  return (
                    <h1
                      className="grid place-content-center text-xs mb-2 text-gray-400"
                      key={index}
                    >
                      {day}
                    </h1>
                  );
                })}
              </div>
              <div className="w-full grid grid-cols-7">
                {generateDate(today.month(), today.year()).map(
                  ({ date, currentMonth, today }, index) => {
                    return (
                      <div className="border-t h-12 grid text-xs place-content-center">
                        <h1
                          className={cn(
                            currentMonth ? "" : "text-gray-400",
                            today ? "bg-blue-600 text-white" : "",
                            selectDate.toDate().toDateString() ===
                              date.toDate().toDateString()
                              ? "bg-blue-100 text-blue-600"
                              : "",
                            "h-10 w-10 grid place-content-center  rounded-full hover:bg-gray-100 hover:text-blue-600"
                          )}
                          onClick={() => {
                            setSelectDate(date);
                          }}
                        >
                          {date.date()}
                        </h1>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
            <div className="flex gap-5 items-center">
              <div className="flex gap-2 items-center justify-center">
                <i class="fa-regular fa-clock font-s"></i>
                <p className="text-gray-600">Due Date</p>
              </div>
              <p className="border p-2 rounded-[4px] text-blue-600 font-xs">
                {selectDate.toDate().toDateString()}
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-2 mb-2">
          <button
            className="bg-blue-600 text-white py-1 px-5 rounded-[4px]"
            onClick={() => {
              console.log("selectdate", selectDate.toDate().toDateString());
              submitDate(selectDate.toDate().toDateString());
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
          <div className="py-1 px-2 flex gap-2 items-center justify-center rounded-[4px] border border-gray-300 hover:bg-gray-300">
            <i class="fa-regular fa-trash-can"></i>
            <button
              onClick={() => {
                setOpen(false);
                submitDate("");
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

export default DateSideMenu;
