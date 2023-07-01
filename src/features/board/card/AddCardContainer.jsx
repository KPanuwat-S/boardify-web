import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { useDispatch, useSelector } from "react-redux";
import {
  addCardAsync,
  getAllCardsInOneBoardAsync,
} from "../../../features/board/card/Slice/cardSlice";

import Modal from "../../../components/Modal";

export default function AddCardContainer({ boardId, fetch, setFetch }) {
  const [open, setOpen] = useState(false);
  const boards = useSelector((state) => state.board.boards);
  const positionOfAddedCard = boards.length;
  console.log("position", positionOfAddedCard);
  const [cardName, setCardName] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const input = {
      data: { name: cardName, position: positionOfAddedCard },
      boardId: boardId,
    };
    if (cardName) {
      await dispatch(addCardAsync(input)).unwrap();
      setCardName("");
      setFetch(!fetch);
      setOpen(false);
    } else {
      // toast.error("Card's name should not be empty");
    }
  };

  return (
    <>
      <div
        className="flex items-center cursor-pointer bg-[#F1F2F4] p-3 hover:bg-[#cacaca8e] rounded-xl h-fit w-[320px] gap-2"
        onClick={() => {
          setOpen(true);
        }}
      >
        <i class="fa-solid fa-plus"></i>
        <div>Add another Card</div>
      </div>

      {/* ADD CARD */}

      <Modal open={open} onClose={() => setOpen(false)} title="Add A Card">
        <div className="w-[480px]  h-fit">
          <div className="flex flex-col w-[90%] gap-3">
            <form className="flex gap-2" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  id="title"
                  placeholder="Type Card name"
                  className="text-black rounded-md border border-gray-300 px-3 py-1.5 outline-none text-sm focus:ring focus:ring-blue-300 focus:border-blue-500 w-[240px]"
                  value={cardName}
                  onChange={(e) => setCardName(e.target.value)}
                />
              </div>
              <div className="cursor-pointer bg-blue-600 rounded-[4px] text-sm px-4 py-2 text-white">
                <input
                  value="Create Card"
                  className="cursor-pointer"
                  type="submit"
                />
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
}
