import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "../features/board/board/Navbar";
import SideBar from "../features/board/board/Sidebar";
import { getOneBoardAsync } from "../features/board/board/Slice/boardSlice";
import Card from "../features/board/card/Card";

function MyWork() {
  const { id } = useParams();
  console.log("id", id);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOneBoardAsync(id));
  }, []);
  const user = useSelector((state) => state.auth.user);
  const board = useSelector((state) => state.board.board);
  return (
    <>
      <div>
        <Navbar boardId={id} board={board} />
      </div>
      <div className="flex">
        <div className="h-[100vh]">
          <SideBar />
        </div>
        <div className="flex w-full bg-[#F2F3F5] h-[100vh] bg-[#] p-16 overflow-x-auto ">
          <Card boardId={id} user={user} />
        </div>
      </div>
    </>
  );
}

export default MyWork;
