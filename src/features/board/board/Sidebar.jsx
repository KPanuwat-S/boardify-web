import { useState } from "react";
import { Link } from "react-router-dom";
import { MeatballsIcon } from "../../../icons";

import AddMemberContainer from "./AddMemberContainer";
import AddBoardContainer from "./AddBoardContainer";
import { deleteboard } from "./Slice/boardSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function SideBar({ boardId }) {
  const [hover, setHover] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate() 

  const handleMouseOver = () => {
    setHover(true);
  };
  const handleMouseOut = () => {
    setHover(false);
  };

  const handleOnClickDelete = (e) => {
    dispatch(deleteboard(boardId))
    navigate("/workspace");
  };

  return (
    <>
      <div className="w-[200px] text-gray-500 p-5 flex flex-col gap-5 ">
        <Link to="/boardDetail/:id">
          <div className="hover:bg-gray-100 cursor-pointer rounded-[4px] p-2 hover:text-blue-600 flex pl-6 ">
            Cards
          </div>
        </Link>
        <AddMemberContainer />
        {/* <AddBoardContainer /> */}
      </div>
      <div>
        <div className=""></div>
        <div
        // className="flex px-5 hover:bg-[#f5f5f5] cursor-pointer"
        // onMouseOver={handleMouseOver}
        // onMouseOut={handleMouseOut}
        >
          <div className="flex gap-3 items-end py-3   ">
            <div className="avatar">
              <div className="w-8 rounded-xl">{/* <img src={Avatar} /> */}</div>
            </div>

            {/* <div>My board 1</div> */}
          </div>
          {/* {hover && (
            <div className="flex items-center ">
              <MeatballsIcon />
            </div>
          )} */}
        </div>
      </div>

      <button
        className="flex items-center justify-center gap-1 p-2 text-red-600 bg-red-100 hover:bg-red-600 hover:text-white rounded-[4px] duration-200"
        onClick={handleOnClickDelete}
      >
        <p className="">Delete Board</p>
      </button>
    </>
  );
}
