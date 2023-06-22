import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";
import { AddIcon } from "../../../../icons";
import Modal from "../../../../components/Modal";
import { useDispatch } from "react-redux";
import { addTodo } from "../../../../slices/todoSlice";
// import { createCard } from "../../../../api/authApi";

export default function AddCardContainer() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  // const [input, setInput] = useState({
  //   name: "",
  // });

  // const handleChangeInput = (e) => {
  //   setInput({ ...input, [e.target.name]: e.target.value });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title) {
      dispatch(
        addTodo({
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
          <div className="w-[480px] h-fit">
            <div className="flex flex-col w-[90%] pl-5 gap-3">
              <div className="text-slate-950">Add card</div>
              <form className="flex gap-2" onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    id="title"
                    placeholder="Type Card name"
                    className="text-black rounded-md border border-gray-300 px-3 py-1.5 outline-none text-sm focus:ring focus:ring-blue-300 focus:border-blue-500 w-[240px]"
                    // name="name"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="bg-blue-500 rounded-lg text-sm px-4 py-2 text-white">
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

// import { useState } from "react";
// import { AddIcon } from "../../../../icons";
// import Modal from "../../../../components/Modal";
// export default function AddCardContainer() {
//   const [input, setInput] = useState({
//     name: "",
//   });
//   const handleChangeInput = (e) => {
//     setInput({ ...input, [e.target.name]: e.target.value });
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const rs = await createCard(input);
//       // toast.success();
//       // navigate("/allproduct");
//     } catch (error) {
//       console.log(error);
//       // toast.error(err.response.data.message);
//     }
//   };
//   const [openModal, setOpenModal] = useState(false);
//   return (
//     <>
//       <div
//         className="cursor-pointer bg-[#F1F2F4] hover:bg-[#cacaca8e] rounded-2xl h-fit w-[320px] p-3  flex items-end gap-2"
//         onClick={() => {
//           setOpenModal(true);
//         }}
//       >
//         <div>
//           <AddIcon />
//         </div>
//         <div>Add another Card</div>
//       </div>

//       {/* ADD CARD */}
//       {openModal && (
//         <Modal onClose={() => setOpenModal(false)}>
//           <div className=" w-[480px] h-fit">
//             <div className=" flex flex-col w-[90%] pl-5 gap-3 ">
//               <div className="text-slate-950">Add card</div>
//               <form className="flex gap-2">
//                 {/* <form className="flex gap-2" onSubmit={handleSubmit}> */}
//                 <div>
//                   <input
//                     type="text"
//                     placeholder="Card name"
//                     className="text-black rounded-md border border-gray-300 px-3 py-1.5 outline-none text-sm focus:ring focus:ring-blue-300 focus:border-blue-500 w-[240px]"
//                     name="name"
//                     value={input.name}
//                     onChange={handleChangeInput}
//                   />
//                 </div>
//                 <button className="bg-blue-500  w-32 rounded-lg  text-sm ">
//                   Send Invite
//                 </button>
//               </form>
//             </div>
//           </div>
//         </Modal>
//       )}
//     </>
//   );
// }
