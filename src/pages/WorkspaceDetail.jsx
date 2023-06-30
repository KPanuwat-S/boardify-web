import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllBoardsInWorkspaceAsync } from "../features/board/board/Slice/boardSlice";
import { getWorkspaceMembersAsync } from "../features/workspace/Slice/workspaceSlice";
import Modal from "../components/Modal";
import AddBoard from "../components/AddBoard";

function WorkspaceDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const boards = useSelector((state) => state.board.boards);
  useEffect(() => {
    dispatch(getAllBoardsInWorkspaceAsync(id));
    dispatch(getWorkspaceMembersAsync(id));
  }, []);

  const [open, setOpen] = useState(false);
  const members = useSelector((state) => state.workspace.members);

  console.log("baords", boards);
  console.log("workspaceid", id);
  return (
    <div className="w-[1280px] mx-auto">
      <div className=" ">
        <div className="flex justify-between">
          <div className="flex items-center gap-5">
            <i class="fa-solid fa-chart-simple text-blue-600"></i>
            <h2 className="font-semibold text-blue-600 text-xl flex-1">
              CC14 Group Project
            </h2>
          </div>
          <div className="flex gap-5 items-center mt-2">
            <div className="flex items-center justify-center gap-1 p-2 bg-gray-100 hover:bg-gray-200 rounded-[4px] duration-200">
              <i class="fa-regular fa-user text-gray-500 w-5"></i>
              <p className="text-gray-500">Member ({members.length})</p>
            </div>
            <button
              onClick={() => {
                setOpen(true);
              }}
              className="flex items-center justify-center gap-1 p-2 text-blue-600 bg-blue-100 hover:bg-blue-600 hover:text-white rounded-[4px] duration-200"
            >
              <p className="">Create Board</p>
              <Modal
                open={open}
                onClose={() => setOpen(false)}
                title="Create Board"
              >
                <AddBoard workspaceId={id} onSuccess={() => setOpen(false)} />
              </Modal>
            </button>
          </div>
        </div>
        <hr className="mt-2" />
      </div>
      <div className="mt-5 grid grid-cols-5 gap-5">
        {boards.map((el) => {
          return (
            <Link to={`/boardDetail/${el.id}`}>
              <div className="flex items-center w-[240px] h-[120px] bg-gray-100 rounded-[4px] hover:bg-gray-200 duration-300">
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

export default WorkspaceDetail;
