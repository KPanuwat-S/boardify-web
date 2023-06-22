import { useState } from "react";
import { AddIcon, MenuIcon, TimeIcon } from "../../../../icons";
import Modal from "../../../../components/Modal";
import Avatar from "../../../../assets/Avatar.jpg";
export default function AddTaskContainer() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div>
        <div className="w-[264px] h-fit  mx-5 my-2 hover:bg-[#cacaca8e] rounded-md ">
          <div
            className="flex items-end gap-2 cursor-pointer   "
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
            title="`TASK NAME`"
            width="34"
            onClose={() => setOpenModal(false)}
          >
            <div className="bg-slate-300 h-[480px] w-[480px]">
              <div className="bg-red-400 flex gap-2 items-end">
                <div className="avatar">
                  <div className="w-7 rounded-full ">
                    <img src={Avatar} />
                  </div>
                </div>
                <div>
                  <AddIcon />
                </div>
              </div>
              <div className="bg-orange-300 flex gap-2 items-end">
                <div>
                  <MenuIcon />
                </div>
                <div>Description</div>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Add a more detailed description"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="bg-lime-400 flex gap-2 items-end">
                <div>
                  <TimeIcon />
                </div>
                <div>Dates</div>
              </div>
              <div className="bg-orange-200 flex gap-2 items-end">
                <div>
                  <MenuIcon />
                </div>
                <div>Activity</div>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </>
  );
}
