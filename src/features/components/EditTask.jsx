import { useState } from "react";
import Modal from "../../components/Modal";

function EditTask() {
  const [openModel, setOpenModel] = useState(false);
  return (
    <div>
      <h1>Click on the button</h1>
      <button
        onClick={() => {
          setOpenModel(true);
        }}
      >
        Open
      </button>
      {openModel && <Modal />}
    </div>
  );
}

export default EditTask;
