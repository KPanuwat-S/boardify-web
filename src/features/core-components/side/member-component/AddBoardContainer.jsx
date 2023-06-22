import { useState } from "react";
import Modal from "../../../../components/Modal";

import { AddWhiteIcon } from "../../../../icons";

export default function AddBoardContainer() {
  const [openModal, setOpenModal] = useState(false);
  const [hover, setHover] = useState(false);

  const handleMouseOver = () => {
    setHover(true);
  };
  const handleMouseOut = () => {
    setHover(false);
  };
  return (
    <>
      <div className=" p-5 ">
        <div
          className="flex gap-x-24 collapse-title hover:bg-[#5959598e] cursor-pointer"
          onClick={() => {
            setOpenModal(true);
          }}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <div>Your boards</div>
          {hover && (
            <div className="w-6 ">
              <AddWhiteIcon />
            </div>
          )}
        </div>
      </div>
      {openModal && (
        <Modal
          // title="Invite to Workspace"
          width="27"
          onClose={() => setOpenModal(false)}
        >
          {/* <div className=" w-[480px] h-fit"> */}
          <div className=" flex flex-col w-[90%] pl-5 gap-3 ">
            <div className="text-slate-950 ">Board title</div>
            <div>
              <input className="text-black rounded-md border border-gray-300 px-3 py-1.5 outline-none text-sm focus:ring focus:ring-red-300 focus:border-red-500 w-[240px]" />
            </div>
            <div className="text-slate-950 ">Work Space</div>
            <div className="DAISY">
              <ul className="menu bg-base-200 w-56 rounded-box">
                <li>
                  <span className="text-black menu-dropdown-toggle">
                    WORKSPACE S NAME
                  </span>
                  <ul className="menu-dropdown">
                    <li>
                      <a>level 2 item 1</a>
                    </li>
                    <li>
                      <a>level 2 item 2</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          {/* <button className="bg-blue-500  w-32 rounded-lg  text-sm ">
              Create
            </button> */}
          {/* </div> */}
        </Modal>
      )}
    </>
  );
}
