import React, { useState } from "react";
import { Link } from "react-router-dom";
import DropDownEL from "../components/DropDownEl";
import CreateButton from "../components/CreateButton";
import ProfileIcon from "../components/ProfileIcon";

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {" "}
      <div className="flex w-[1480px] mx-auto py-3 ]">
        <div className="flex-1">
          <div className="flex items-center gap-5 justify-start">
            <Link to="/">
              <h1 className="font-bold text-3xl text-gray-800 ml-5">
                Boardify.
              </h1>
            </Link>
            <Link to="/workspace">
              <div
                className="flex mx-5 items-center gap-1"
                onClick={(params) => {}}
              >
                My Workspace
              </div>
            </Link>
            <div>
              <CreateButton />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-10">
          {/* <Link to="/login">
          <i class="fa-regular fa-user text-gray-800 mr-5"></i>
        </Link> */}
          <ProfileIcon></ProfileIcon>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Header;
