import { useState } from "react";
import { MeatballsIcon } from "../../../../icons";
import Avatar from "../../../../assets/Avatar.jpg";
import AddMemberContainer from "../member-component/AddmemberContainer";

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
        {/* BOARDS BOX */}
        <div className="collapse p-5 ">
          <div className="collapse-title hover:bg-[#5959598e]">Boards</div>
        </div>
        {/* MEMBER BOX */}
        <div tabIndex={0} className="collapse collapse-plus p-5  ">
          <AddMemberContainer />
        </div>
        {/* SETTING BOX */}
        <div tabIndex={0} className="collapse collapse-arrow p-5  ">
          <div className="collapse-title hover:bg-[#5959598e] ">Setting</div>
        </div>
        {/* YOUR BOARD BOX */}
        <div>
          <div tabIndex={0} className="collapse collapse-plus p-5">
            <div className="collapse-title hover:bg-[#5959598e]  ">
              Your boards
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
        </div>

        {/* MY BOARD */}
      </div>
    </>
  );
}
