import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addCard } from "./Slice/cardSlice";
import Modal from "../../../components/Modal";
import { AddIcon } from "../../../icons";

export default function AddCardContainer() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title) {
      dispatch(
        addCard({
          id: uuidv4(),
          title: title,
          time: new Date().toLocaleString(),
        })
      );
      toast.success("Card's name Added Successfully");
      setOpenModal(false);
    } else {
      toast.error("Card's name should not be empty");
    }
  };

  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div
        className="cursor-pointerbg-[#F1F2F4] p-3 hover:bg-[#cacaca8e] rounded-xl h-fit w-[320px] flex items-end gap-2"
        onClick={() => {
          setOpenModal(true);
          console.log("test");
        }}
      >
        <div></div>
        <div>Add another Card</div>
      </div>

      {/* ADD CARD */}
      {openModal && (
        <Modal
          open={openModal}
          onClose={() => setOpenModal(false)}
          title="Add A Card"
        >
          <div className="w-[480px]  h-fit">
            <div className="flex flex-col w-[90%] gap-3">
              <form className="flex gap-2" onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    id="title"
                    placeholder="Type Card name"
                    className="text-black rounded-md border border-gray-300 px-3 py-1.5 outline-none text-sm focus:ring focus:ring-blue-300 focus:border-blue-500 w-[240px]"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="bg-blue-600 rounded-[4px] text-sm px-4 py-2 text-white">
                  <button className="btn" type="submit">
                    Create Card
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
