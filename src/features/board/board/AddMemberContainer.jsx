import { useState } from "react";
import Modal from "../../../components/Modal";
import { AddWhiteIcon } from "../../../icons";

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
      <div className="">
        <div
          className="flex gap-28 collapse-title hover:bg-gray-100 rounded-[4px] cursor-pointer hover:text-blue-600"
          onClick={() => {
            setOpenModal(true);
          }}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <div className="flex p-2 gap-10 items-center justify-center">
            <div className="">Members</div>
            {hover && <i class="fa-solid fa-plus text-blue-600"></i>}
          </div>
        </div>
      </div>

      {openModal && (
        <Modal
          // title="Invite to Workspace"
          width="27"
          onClose={() => setOpenModal(false)}
          open={openModal}
          title="Invite To Workspace"
        >
          <div className=" w-[500px] h-fit flex item-center">
            <div className=" flex flex-col w-[100%]  gap-3 ">
              <div className="flex gap-2 bg">
                <div>
                  <input
                    className="text-black rounded-md border border-gray-300 px-3 py-1.5 outline-none text-sm focus:ring focus:ring-blue-100 focus:border-blue-300 w-[240px]"
                    placeholder="Email address or name"
                  />
                </div>
                <button className="bg-blue-600 text-white w-32 rounded-lg  text-sm  hover:bg-blue-500">
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
