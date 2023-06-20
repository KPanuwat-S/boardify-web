import { useState } from "react";
import { MeatballsIcon } from "../../icons";
import Avatar from "../../assets/Avatar.jpg";

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
      <div className="bg-yellow-300">
        {/* BOARDS BOX */}
        <div className="px-4">Boards</div>
        {/* MEMBER BOX */}
        <div tabIndex={0} className="collapse collapse-plus  ">
          <div className="collapse-title ">Members</div>
          <div className="collapse-content">
            <p>Pop-up Modal</p>
          </div>
        </div>
        {/* SETTING BOX */}
        <div tabIndex={0} className="collapse collapse-arrow  ">
          <div className="collapse-title ">Setting</div>
          <div className="collapse-content">
            <p>All setting</p>
          </div>
        </div>
        {/* YOUR BOARD BOX */}
        <div>
          <div tabIndex={0} className="collapse collapse-plus ">
            <div className="collapse-title ">Your boards</div>
            <div className="collapse-content">
              <p>
                tabIndex={0} attribute is necessary to make the div focusable
              </p>
            </div>
          </div>

          {/* MY BOARD */}

          <div
            className="px-4 flex justify-between bg-lime-400"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <div className="flex gap-2 items-end">
              <div className="avatar">
                <div className="w-8 rounded-xl">
                  <img src={Avatar} />
                </div>
              </div>

              <div>My board 1</div>
            </div>
            {hover && (
              <div>
                <MeatballsIcon />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
