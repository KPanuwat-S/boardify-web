import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { countMemberWorkspace, getWorkspaceMembersAsync } from "../features/workspace/Slice/workspaceSlice";
import { useState } from "react";
function WorkspaceComponent({ workspace, boards, countmember }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWorkspaceMembersAsync(workspace.id));
    dispatch(countMemberWorkspace(workspace.id))
  }, []);
  // dispatch(getWorkspaceMembersAsync(workspace.id));

  const members = useSelector((state) => state.workspace.countmember);
  // console.log('count member ',members);

  const boardsLimited = boards.slice(0, 5);

  return (
    <div className=" mb-5 p-5">
      <div className="flex items-center justify-between">
        <Link to={`/workspaceDetail/${workspace.id}`}>
          <div className="flex items-center gap-5 ">
            <i class="fa-solid fa-chart-simple text-blue-600"></i>
            <h2 className="font-semibold hover:text-blue-700 text-blue-600 text-xl flex-1">
              {" "}
              {workspace.name}
            </h2>
          </div>
        </Link>

        <Link to={`/member/${workspace.id}`}>
          <div className="flex items-center justify-center gap-1 p-2 bg-gray-100 hover:bg-gray-200 rounded-[4px] duration-200">
            <i class="fa-regular fa-user text-gray-500 w-5"></i>
            <p className="text-gray-500">Member {countmember}</p>
          </div>
        </Link>
      </div>
      <hr className="mt-2" />
      <div className="mt-5 grid grid-cols-5 gap-5">
        {boardsLimited.map((el) => {
          return (
            <Link to={`/boardDetail/${el.id}`}>
              <div className="relative overflow-hidden flex  z-50 items-center w-[240px] h-[120px] bg-gray-100 rounded-[4px] duration-300">
                <div className="absolute  w-full h-full bg-black/20 flex items-center justify-center -left-20 hover:left-0 duration-300 opacity-0 hover:opacity-100">
                  <div className="absolute right-10">
                    <i class="fa-solid fa-arrow-right-to-bracket text-white"></i>
                  </div>
                </div>
                <div className="mx-5">
                  <i class="fa-solid fa-table-columns text-gray-800"></i>
                  <p>{el.name}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default WorkspaceComponent;
