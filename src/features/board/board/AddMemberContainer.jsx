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
          <div className="flex p-2 gap-10 items-center">
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
