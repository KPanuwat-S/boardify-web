import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllBoardsInWorkspaceAsync } from "../features/board/board/Slice/boardSlice";
import {
  deleteWorkspace,
  editWorkspaceNameAsync,
  getWorkspaceByIdAsync,
  getWorkspaceMembersAsync,
} from "../features/workspace/Slice/workspaceSlice";
import Modal from "../components/Modal";
import AddBoard from "../components/AddBoard";

function WorkspaceDetail() {
  const [fetch, setFetch] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const boards = useSelector((state) => state.board.boards);
  // console.log("boards", boards);
  console.log("...... :", id);

  const [isEdit, setIsEdit] = useState(false);

  const [open, setOpen] = useState(false);
  const members = useSelector((state) => state.workspace.members);
  const workspace = useSelector((state) => state.workspace.oneWorkspace);
  const [workspaceName, setWorkspaceName] = useState(workspace?.name);
  console.log("workspace", workspace);
  // console.log("baords", boards);
  // console.log("workspaceid", id);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllBoardsInWorkspaceAsync(id));
    dispatch(getWorkspaceMembersAsync(id));
    dispatch(getWorkspaceByIdAsync(id));
    // console.log("useeffect run");
  }, [fetch]);

  const sugmitEditWorkspaceName = (e) => {
    e.preventDefault();
    const workspaceEdit = { name: workspaceName };
    const input = { workspaceId: id, workspaceName: workspaceEdit };
    dispatch(editWorkspaceNameAsync(input));
    setIsEdit(false);
    setFetch(true);
  };

  const handleOnClickDelete = (e) => {
    dispatch(deleteWorkspace(id));
    navigate("/workspace");
  };

  return (
    <div className="w-[1280px] mx-auto mt-5">
      <div className=" ">
        <div className="flex justify-between">
          <div className="flex items-center gap-5">
            <i class="fa-solid fa-chart-simple text-blue-600"></i>
            {isEdit ? (
              <div className="flex gap-2">
                <input
                  className="px-2 outline outline-blue-600"
                  type="text"
                  value={workspaceName}
                  onChange={(e) => {
                    setWorkspaceName(e.target.value);
                  }}
                  onClick={(e) => {
                    setIsEdit(true);
                    e.stopPropagation();
                  }}
                />
                <div className="font-light flex flex-col gap-2">
                  <button
                    onClick={sugmitEditWorkspaceName}
                    className="text-white text-xs bg-blue-600 w-[50px] hover:bg-blue-700 p-1 rounded-[4px]"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => {
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
                onClick={(e) => {
                  setIsEdit(true);
                  e.stopPropagation();
                  // setTitle(.name);
                }}
                className="group flex  items-center gap-5 text-gray-600 hover:bg-gray-100 p-2 rounded-[4px]"
              >
                <h2 className="font-semibold text-blue-600 text-xl flex-1">
                  {workspaceName}
                </h2>
                <i class="fa-regular fa-pen-to-square text-white group-hover:text-gray-400"></i>
              </div>
            )}
          </div>
          <div className="flex gap-5 items-center mt-2">
            <div
              className="flex items-center justify-center gap-1 p-2 bg-gray-100 hover:bg-gray-200 rounded-[4px] duration-200"
              role="button"
              onClick={() => navigate(`/member/${id}`)}
            >
              <i class="fa-regular fa-user text-gray-500 w-5"></i>
              <p className="text-gray-500">Member ({workspace?.count})</p>
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
            <button
              className="flex items-center justify-center gap-1 p-2 text-red-600 bg-red-100 hover:bg-red-600 hover:text-white rounded-[4px] duration-200"
              onClick={handleOnClickDelete}
            >
              <p className="">Delete Workspace</p>
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
