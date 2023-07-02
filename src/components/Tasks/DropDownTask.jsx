import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function DropdownTask({
  label,
  icon,
  children = null,
  width = "w-[300px]",
  Component,
  cardItem,
  task,
  setTaskItem,
  taskItem,
  fetch,
  setFetch,
}) {
  const [open, setOpen] = useState(false);
  const dropdownEl = useRef(); //return obj {current: value}
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!dropdownEl.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  const modalStyle = ` absolute bg-white ${width} right-0 top-0 translate-y-1 `;
  return (
    <div className="relative " ref={dropdownEl}>
      {/* ref = {current: document.querySelector('.relative')} */}
      <div
        role="button"
        onClick={(e) => {
          // setFetch(!fetch);
          setOpen(true);
        }}
      >
        {/* UI */}
        <div className="z-0 flex gap-2 items-start bg-gray-100 hover:bg-gray-200 p-1 py-2 rounded-[4px] text-gray-600">
          {icon}
          <p className="text-xs ">{label}</p>
        </div>
        <Component
          task={task}
          open={open}
          setOpen={setOpen}
          cardItem={cardItem}
          setTaskItem={setTaskItem}
          taskItem={taskItem}
          fetch={fetch}
          setFetch={setFetch}
        />
      </div>
    </div>
  );
}
