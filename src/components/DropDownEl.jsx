import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Dropdown({ label, data }) {
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
    <div className="relative z-50" ref={dropdownEl}>
      {/* ref = {current: document.querySelector('.relative')} */}
      <div
        role="button"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {open ? (
          <div>
            {label} <i class="fa-solid fa-angle-up"></i>
          </div>
        ) : (
          <div>
            {label} <i class="fa-solid fa-angle-down"></i>
          </div>
        )}

        {open && (
          <div className="absolute bg-white w-40 right-0 translate-y-1 border rounded-[4px] shadow-lg p-2">
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
