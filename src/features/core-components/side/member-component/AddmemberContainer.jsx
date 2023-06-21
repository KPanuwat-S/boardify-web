import { useState } from "react";
import Modal from "../../../../components/Modal";

export default function AddMemberContainer() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div>
        <div
          className="collapse-title hover:bg-[#5959598e]"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          <div>Members</div>
        </div>
      </div>
      {openModal && (
        // <Modal title="Mew" width="27" closeModal={setOpenModal}>
        //   <div>Invite someone to this Workspace with a link</div>
        //   <button>Create link</button>
        // </Modal>
        <Modal
          className="bg-lime-800"
          title="Invite to Workspace"
          width="27"
          closeModal={setOpenModal}
        >
          <div className="bg-lime-800">
            Invite someone to this Workspace with a link
          </div>
          <button>Create link</button>
        </Modal>
      )}
    </>
  );
}
