import { useState } from "react";
import Modal from "../../../../components/Modal";
import { AddWhiteIcon } from "../../../../icons";

export default function AddMemberContainer() {
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
      <div className="  p-5 ">
        <div
          className="flex gap-28 collapse-title hover:bg-[#5959598e] cursor-pointer"
          onClick={() => {
            setOpenModal(true);
          }}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <div>Members</div>
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
          <div className=" w-[480px] h-fit">
            <div className=" flex flex-col w-[90%] pl-5 gap-3 ">
              <div className="text-slate-950">Invite To Workspace</div>
              <div className="flex gap-2">
                <div>
                  <input
                    className="text-black rounded-md border border-gray-300 px-3 py-1.5 outline-none text-sm focus:ring focus:ring-blue-300 focus:border-blue-500 w-[240px]"
                    placeholder="Email address or name"
                  />
                </div>
                <button className="bg-blue-500  w-32 rounded-lg  text-sm ">
                  Send Invite
                </button>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
