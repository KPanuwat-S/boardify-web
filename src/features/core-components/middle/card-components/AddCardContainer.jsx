import { useState } from "react";
import { AddIcon } from "../../../../icons";
import Modal from "../../../../components/Modal";
export default function AddCardContainer() {
  // const [input, setInput] = useState({
  //   name: "",
  // });
  // const handleChangeInput = (e) => {
  //   setInput({ ...input, [e.target.name]: e.target.value });
  // };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const rs = await createCard(input);
  //     // toast.success();
  //     // navigate("/allproduct");
  //   } catch (error) {
  //     console.log(error);
  //     // toast.error(err.response.data.message);
  //   }
  // };
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

      {/* ADD CARD */}
      {openModal && (
        <Modal onClose={() => setOpenModal(false)}>
          <div className=" w-[480px] h-fit">
            <div className=" flex flex-col w-[90%] pl-5 gap-3 ">
              <div className="text-slate-950">Add card</div>
              <form className="flex gap-2">
                {/* <form className="flex gap-2" onSubmit={handleSubmit}> */}
                <div>
                  <input
                    type="text"
                    placeholder="Card name"
                    className="text-black rounded-md border border-gray-300 px-3 py-1.5 outline-none text-sm focus:ring focus:ring-blue-300 focus:border-blue-500 w-[240px]"
                    name="name"
                    // value={input.name}
                    // onChange={handleChangeInput}
                  />
                </div>
                <button className="bg-blue-500  w-32 rounded-lg  text-sm ">
                  Send Invite
                </button>
              </form>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
