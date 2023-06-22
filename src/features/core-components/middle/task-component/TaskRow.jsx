import { useState } from "react";
import { PenIcon } from "../../../../icons";
import Modal from "../../../../components/Modal";
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
          className="flex justify-between bg-white hover:bg-[#e9e9e98e]  p-4 w-full mx-5 my-2 h-fit"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          <div>Task</div>
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

{
  /*  */
}
