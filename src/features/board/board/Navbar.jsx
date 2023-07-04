// import Avatar from "../../../assets/Avatar.jpg";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBoardByIdAsync } from "./Slice/boardSlice";
import { getOneBoardAsync } from "./Slice/boardSlice";
export default function Navbar({ boardId, workspace }) {
  const dispatch = useDispatch();
  const [fetch, setFetch] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  // // console.log("workspace in nav", workspace);
  useEffect(() => {
    dispatch(getOneBoardAsync(boardId));
  }, [fetch]);
  const boardDetail = useSelector((state) => state.board.board);
  // console.log("boardDetail", boardDetail);

  const submitBoardName = () => {
    dispatch();
    setIsEdit(false);
    setFetch(!fetch);
  };

  const [boardName, setBoardName] = useState(boardDetail?.name);
  return (
    <>
      {/* MENU*/}
      <div className="w-full p-3 flex justify-between items-center border-b">
        {/* <Link to={`/workspaceDetail/${workspace.id}`}> */}
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="flex gap-3 items-center px-5 py-5 "
        >
          <i class="fa-solid fa-chart-simple text-blue-600"></i>
          {isEdit ? (
            <div className="flex gap-2">
              {" "}
              <input
                className="px-2 outline outline-blue-600 w-full"
                type="text"
                value={boardName}
                onChange={(e) => {
                  setBoardName(e.target.value);
                }}
                onClick={() => {
                  setIsEdit(true);
                }}
              />
              <div className="font-light flex flex-col gap-2">
                <button
                  onClick={submitBoardName}
                  className="text-white text-xs bg-blue-600 w-[50px] hover:bg-blue-700 p-1 rounded-[4px]"
                >
                  Save
                </button>
                <button
                  onClick={() => {
                    // e.stopPropagation();
                    setIsEdit(false);
                  }}
                  className="text-xs p-1 rounded-[4px] bg-gray-100 hover:bg-gray-200"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div
              className="text-blue-600 font-semibold"
              onClick={() => {
                setIsEdit(true);
              }}
            >
              {boardName}
            </div>
          )}
        </div>

        {/* </Link> */}
        <div className="flex justify-end gap-10 flex-1">
          <Link>
            <div className="btn btn-ghost normal-case hover:text-blue-600">
              Table
            </div>
          </Link>
          <Link>
            <div className="btn btn-ghost normal-case hover:text-blue-600">
              Calendar
            </div>
          </Link>

          <Link to={`/dashboard/${boardId}`}>
            <div className="btn btn-ghost normal-case hover:text-blue-600">
              Dashboard
            </div>
          </Link>
        </div>

        {/* Avatar */}
        <div className=" w-28   ">
          <div>
            <div className="avatar">
              <div className="w-12 rounded-full ">
                {/* <img src={Avatar} /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
