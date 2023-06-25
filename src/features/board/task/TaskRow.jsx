import { useState } from "react";

import Modal from "../../../components/Modal";
import { PenIcon } from "../../../icons";

export default function TaskRow() {
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
      <div
        className=" flex cursor-pointer  "
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <div
          className="flex justify-between rounded-xl shadow-[0_1px_2px_rgb(0_0_0_/0.2)] bg-[#f6f5fa]   p-4 w-full mx-5 my-2 h-fit"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          <div className="font-light">task</div>
          {hover && (
            <div>
              <PenIcon />
            </div>
          )}
        </div>
      </div>
      {openModal && (
        <Modal
          // title="Invite to Workspace"
          onClose={() => setOpenModal(false)}
        ></Modal>
      )}
    </>
  );
}
