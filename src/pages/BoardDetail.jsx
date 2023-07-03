import { useEffect } from "react";
import Navbar from "../features/board/board/Navbar";
import SideBar from "../features/board/board/Sidebar";
import Card from "../features/board/card/Card";
import { useParams } from "react-router-dom";
import CardTest from "../features/board/card/CardTest";

import { useDispatch, useSelector } from "react-redux";
import { getWorkspaceByIdAsync } from "../features/workspace/Slice/workspaceSlice";

export default function BoardDetail() {
  const { id } = useParams();
  console.log("id", id);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getWorkspaceByIdAsync(id));
  // }, []);
  const allWorkspace = useSelector((state) => state.workspace.workspaces);
  const thisWorkSpace = allWorkspace.find((el) =>
    el.Workspace.Boards.find((el) => el.id == id)
  );
  console.log("workspace in board", allWorkspace);
  console.log("this workspace in board", thisWorkSpace);
  return (
    <>
      <Navbar boardId={id} workspace={thisWorkSpace?.Workspace} />
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
