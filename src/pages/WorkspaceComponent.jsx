import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getWorkspaceMembersAsync } from "../features/workspace/Slice/workspaceSlice";
function WorkspaceComponent({ workspace, boards }) {
  useEffect(() => {
    dispatch(getWorkspaceMembersAsync(workspace.id));
  }, []);
  const dispatch = useDispatch();
  // dispatch(getWorkspaceMembersAsync(workspace.id));
  const members = useSelector((state) => state.workspace.members);

  return (
    <>
      <div className="flex items-center justify-between">
        <Link to={`/workspaceDetail/${workspace.id}`}>
          <div className="flex items-center gap-5 ">
            <i class="fa-solid fa-chart-simple text-blue-600"></i>
            <h2 className="font-semibold text-blue-600 text-xl flex-1">
              {" "}
              {workspace.name}
            </h2>
          </div>
        </Link>

        <Link to={`/member/${workspace.id}`}>
          <div className="flex items-center justify-center gap-1 p-2 bg-gray-100 hover:bg-gray-200 rounded-[4px] duration-200">
            <i class="fa-regular fa-user text-gray-500 w-5"></i>
            <p className="text-gray-500">Member ({members.length})</p>
          </div>
        </Link>
      </div>
      <hr className="mt-2" />
      <div className="mt-5 flex gap-5">
        {boards.map((el) => {
          return (
            <Link to={`/boardDetail/:${el.id}`}>
              <div className="flex  items-center w-[240px] h-[120px] bg-gray-100 rounded-[4px] hover:bg-gray-200 duration-300">
                <div className="mx-5">
                  <i class="fa-solid fa-table-columns text-gray-800"></i>
                  <p>{el.name}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default WorkspaceComponent;
