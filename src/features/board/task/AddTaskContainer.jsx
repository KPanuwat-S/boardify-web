import { useState } from "react";
import { AddIcon, MenuIcon, TimeIcon } from "../../../icons";
import Modal from "../../../components/Modal";
import TaskEditContent from "../../../components/Tasks/TaskEditContent";
import AddTask from "./AddTask";

export default function AddTaskContainer({
  cardItem,
  tasksOfCards,
  fetch,
  setFetch,
}) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div>
        <div
          className="rounded-xl h-fit p-3 mx-5 my-2  hover:bg-gray-100  flex font-light items-center gap-2 text-gray-400 cursor-pointer hover:text-blue-600"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          <i class="fa-solid fa-plus "></i>
          <div>Add a Task</div>
        </div>
        {openModal && (
          <Modal
            title="Create Task"
            open={(params) => {
              setOpenModal(true);
            }}
            width={30}
            onClose={() => setOpenModal(false)}
          >
            <AddTask
              fetch={fetch}
              setFetch={setFetch}
              tasksOfCards={tasksOfCards}
              cardItem={cardItem}
              setOpenModal={() => {
                setOpenModal(false);
              }}
            />
          </Modal>
        )}
      </div>
    </>
  );
}
