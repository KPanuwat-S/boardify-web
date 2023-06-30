import { useState } from "react";
import Modal from "../../../components/Modal";
import { PenIcon } from "../../../icons";
export default function TaskRow({ text }) {
  const [openModal, setOpenModal] = useState(false);
  const [hover, setHover] = useState(false);
  const mockData = {
    label: 1,
    name: "Mock task",
    date: "27-7-65",
    checkLists: 10,
    checkListsChecked: 1,
    members: ["panuwat", "Laksami"],
    attachment: true,
    comments: 2,
  };

  const dispatch = useDispatch();

  const handleMouseOver = () => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  };

  return (
    
    text && (
      <div>
        <div
          className=" flex cursor-pointer relative"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          onClick={() => {
            setOpen(true);
          }}
        >
          <div className="font-light">{text}</div>

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
      
  );
}
