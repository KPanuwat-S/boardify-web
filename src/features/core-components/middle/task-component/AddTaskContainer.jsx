import { useState } from "react";
import { AddIcon } from "../../../../icons";
import Modal from "../../../../components/Modal";
// import Card from "../card-components/Card";
export default function AddTaskContainer() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div>
        <div className="w-[300px] h-fit  mx-5 my-2  ">
          {/* <Card /> */}

          <div
            className="flex items-end mx-3 gap-2 cursor-pointer"
            onClick={() => {
              setOpenModal(true);
            }}
          >
            <div>
              <AddIcon />
            </div>
            <div>Add a Task</div>
          </div>
        </div>
        {openModal && (
          <Modal
            title="Invite to Workspace"
            width="27"
            closeModal={setOpenModal}
          >
            <div>PUT MODAL EDIT TASK HERE</div>
          </Modal>
        )}
      </div>
    </>
  );
}
