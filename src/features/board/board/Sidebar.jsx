import { useState } from "react";
import { MeatballsIcon } from "../../../icons";

import AddMemberContainer from "./AddMemberContainer";
import AddBoardContainer from "./AddBoardContainer";

export default function SideBar({ boardId }) {
  const [hover, setHover] = useState(false);

  const handleMouseOver = () => {
    setHover(true);
  };
  const handleMouseOut = () => {
    setHover(false);
  };
  return (
    <>
      <div className="w-[200px] text-gray-500 p-5 flex flex-col gap-5">
        <div className="hover:bg-gray-100 cursor-pointer rounded-[4px] p-2 hover:text-blue-600">
          Boards
        </div>
        <AddMemberContainer />
        <AddBoardContainer />
      </div>

      <div>
        <div className=""></div>
        <div
          className="flex px-5 hover:bg-[#f5f5f5] cursor-pointer"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <div className="flex gap-3 items-end py-3   ">
            <div className="avatar">
              <div className="w-8 rounded-xl">{/* <img src={Avatar} /> */}</div>
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
