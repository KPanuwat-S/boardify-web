import { useState } from "react";
import { MeatballsIcon } from "../../../../icons";
// import { SettingIcon } from "../../../../icons";
import Avatar from "../../../../assets/Avatar.jpg";
import AddMemberContainer from "../member-component/AddmemberContainer";
import AddBoardContainer from "./AddBoardContainer";

export default function SideBar() {
  const [hover, setHover] = useState(false);

  const handleMouseOver = () => {
    setHover(true);
  };
  const handleMouseOut = () => {
    setHover(false);
  };
  return (
    <>
      <div className="">
        <div className=" p-5 ">
          <div className="collapse-title hover:bg-[#5959598e] cursor-pointer">
            Boards
          </div>
        </div>
      </div>
      <div className="">
        <AddMemberContainer />
      </div>

      {/* SETTING BOX ไม่แน่ใจว่าจะเอาแถบ Setting ด้วยไหม เลยคอมเม้นไว้ก่อน */}
      {/* <div tabIndex={0} className=" p-5  ">
        <div className="flex gap-32 collapse-title hover:bg-[#5959598e] cursor-pointer">
          <div>Setting</div>
          <div className="w-6">
            <SettingIcon />
          </div>
        </div>
      </div> */}
      {/* ////////////// */}
      <div>
        <div className="">
          <AddBoardContainer />
        </div>
        <div
          className="flex justify-between px-5 hover:bg-[#5959598e] cursor-pointer   "
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <div className="flex gap-3 items-end py-3   ">
            <div className="avatar">
              <div className="w-8 rounded-xl">
                <img src={Avatar} />
              </div>
            </div>

            <div>My board 1</div>
          </div>
          {hover && (
            <div className="flex items-center ">
              <MeatballsIcon />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
