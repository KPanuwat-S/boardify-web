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
  const navigate = useNavigate();

  const handleMouseOver = () => {
    setHover(true);
  };
  const handleMouseOut = () => {
    setHover(false);
  };

  const handleOnClickDelete = (e) => {
    dispatch(deleteboard(boardId));
    navigate("/workspace");
  };

  return (
    <>
      <div className="w-[200px] h-[790px] text-gray-500 p-5 flex flex-col justify-between gap-5 ">
        <div>
          <Link to={`/boardDetail/${boardId}`}>
            <div className="hover:bg-gray-100 cursor-pointer rounded-[4px] p-2 hover:text-blue-600 flex pl-6 ">
              Cards
            </div>
          </Link>
          <AddMemberContainer />
          {/* <AddBoardContainer /> */}
        </div>
        <button
          className="flex items-center pl-6 p-2 text-gray-500 hover:bg-red-600 hover:text-white rounded-[4px] duration-200 cursor-pointer"
          onClick={handleOnClickDelete}
        >
          <p className="">Delete Board</p>
        </button>
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
    </>
  );
}
