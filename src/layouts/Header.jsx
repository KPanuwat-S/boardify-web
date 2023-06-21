import React, { useState } from "react";
import { Link } from "react-router-dom";
import DropDownEL from "../components/DropDownEl";
function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex mx-auto py-3 border-b mb-5">
      <div className="flex-1">
        <div className="flex items-center gap-5 justify-start">
          <Link to="/workspace">
            <h1 className="font-bold text-3xl text-gray-800 ml-5">Boardify.</h1>
          </Link>
          <div
            className="flex mx-5 items-center gap-1"
            onClick={(params) => {}}
          >
            <DropDownEL
              label="Workspace"
              data={["Work Space 1", "Work Space 2"]}
            />
          </div>
          <button className=" bg-blue-600 hover:bg-blue-700 duration-200 text-white py-1 px-2 rounded-[4px] focus:outline-none focus:ring focus:ring-gray-300">
            Create
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center w-10">
        <Link to="/login">
          <i class="fa-regular fa-user text-gray-800 mr-5"></i>
        </Link>
      </div>
    </div>
  );
}

export default Header;
