import { useState } from "react";
import { AddIcon, MenuIcon, TimeIcon } from "../../../icons";
import Modal from "../../../components/Modal";
// import Avatar from "../../../../assets/Avatar.jpg";

export default function AddTaskContainer() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div>
        <div
          className="rounded-xl h-fit p-3 mx-5 my-2  hover:bg-gray-100 rounded-md flex font-light items-center gap-2 text-gray-400 cursor-pointer hover:text-blue-600"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          <i class="fa-solid fa-plus "></i>
          <div>Add a Task</div>
        </div>
        {openModal && (
          <Modal
            // title="`TASK NAME`"
            open={(params) => {
              setOpenModal(true);
            }}
            width="34"
            onClose={() => setOpenModal(false)}
          >
            <div className="bg-slate-300 h-[480px] w-[480px]">
              <div className="bg-red-400 flex gap-2 items-end">
                <div className="avatar">
                  <div className="w-7 rounded-full ">
                    {/* <img src={Avatar} /> */}
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
