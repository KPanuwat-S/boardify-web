import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getWorkspaceMembersAsync,
  getAllWorkSpacesAsync,
} from "../features/workspace/Slice/workspaceSlice";
import WorkspaceComponent from "./WorkspaceComponent";
import { getAllBoardsInWorkspaceAsync } from "../features/board/board/Slice/boardSlice";
import Loading from "../components/Loading";

// Mock Data

function Workspace() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const loading = useSelector((state) => state.workspace.isLoading2);

  // console.log(user);
  const userId = user?.id;

  // Fetch workspace by user id
  useEffect(() => {
    dispatch(getAllWorkSpacesAsync(userId));
  }, []);

  const workspaces = useSelector((state) => state.workspace.workspaces);
  if (loading) {
    return <Loading />;
  }

  // console.log("+++++work : ", workspaces.Workspace);

  // console.log("workspaces", workspaces);
  return (
    <div className="w-[1280px] mx-auto mt-5">
      <h1 className="font-bold text-gray-400 text-2xl mb-5">Your Workspace</h1>
      {workspaces.length > 0 ? (
        workspaces.map((el, index) => {
          return (
            <WorkspaceComponent
              key={el.Workspace}
              workspace={el.Workspace}
              boards={el.Workspace.Boards}
              countmember={el.count}
            />
          );
        })
      ) : (
        <div className="flex items-center justify-center mt-10">
          <div className="bg-gray-100 rounded-[4px] p-5 text-gray-500 flex items-center justify-center gap-5 h-[240px] w-2/3">
            <i class="fa-solid fa-border-top-left fa-2xl"></i>
            <p>Empty workspace</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Workspace;
