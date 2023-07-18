import { useEffect } from "react";
import Navbar from "../features/board/board/Navbar";
import SideBar from "../features/board/board/Sidebar";
import Card from "../features/board/card/Card";
import { useParams } from "react-router-dom";
import CardTest from "../features/board/card/CardTest";

import { useDispatch, useSelector } from "react-redux";
import { getWorkspaceByIdAsync } from "../features/workspace/Slice/workspaceSlice";
import { getOneBoardAsync } from "../features/board/board/Slice/boardSlice";

export default function BoardDetail() {
  const { id } = useParams();
  console.log("id in bdt", id);
  const dispatch = useDispatch();

  const board = useSelector((state) => state.board.board);
  console.log("board", board);
  useEffect(() => {
    dispatch(getOneBoardAsync(id));
  }, []);

  console.log("board", board);
  return (
    <>
      <Navbar boardId={id} board={board} />
      <div className="flex">
        <div className="h-[100vh]">
          <SideBar boardId={id} />
        </div>
        <div className="flex w-full bg-[#F2F3F5] h-[100vh] bg-[#] p-16 overflow-x-auto ">
          <Card boardId={id} />
        </div>
      </div>
    </>
  );
}
