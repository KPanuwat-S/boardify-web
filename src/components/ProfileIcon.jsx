import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DropDownProfile from "./DropDownProfile";
 
function ProfileIcon() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  console.log("isAuthenticated", isAuthenticated);
  console.log("authenticate icon");
  return isAuthenticated ? (
    // <Link to="/myProfile">
    <>
      {" "}
      {/* <i class="fa-regular fa-user text-xl" role="button"></i> */}
      <div>
        <DropDownProfile />
      </div>
    </>
  ) : (
    // </Link>
    <Link to="/login">
      <i class="fa-regular fa-user text-xl" role="button"></i>
    </Link>
  );
}

export default ProfileIcon;
