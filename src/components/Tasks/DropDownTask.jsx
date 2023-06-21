import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function DropdownTask({ label, icon, data }) {
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
  return (
    <div className="relative" ref={dropdownEl}>
      {/* ref = {current: document.querySelector('.relative')} */}
      <div
        role="button"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {/* UI */}
        <div className="z-0 flex gap-2 items-start bg-gray-200 hover:bg-gray-300 p-1 py-2 rounded-[4px] text-gray-600">
          {icon}
          <p className="text-sm ">{label}</p>
        </div>

        {open && (
          <div className="z-50 absolute bg-white w-[300px] left-0 translate-y-1 border rounded-[4px] shadow-lg p-2">
            {data.map((el) => {
              return (
                <div className="flex items-center gap-4 hover:bg-gray-100 p-2 rounded-[4px]">
                  <div className="flex gap-2">
                    <div className="text-gray-700 text-sm">{el}</div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
