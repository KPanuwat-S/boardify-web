import { useState } from "react";
import { AddIcon } from "../../../../icons";
import Modal from "../../../../components/Modal";
export default function AddCardContainer() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div
        className="cursor-pointer bg-[#F1F2F4] hover:bg-[#cacaca8e] rounded-2xl h-fit w-[320px] p-3  flex items-end gap-2"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        <div>
          <AddIcon />
        </div>
        <div>Add another Card</div>
      </div>
      {openModal && <Modal onClose={() => setOpenModal(false)}></Modal>}
    </>
  );
}
