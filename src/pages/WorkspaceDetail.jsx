import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllBoardsInWorkspaceAsync,
  searchBoard,
  sortBoard,
} from "../features/board/board/Slice/boardSlice";
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

  console.log("id", id);

  const dispatch = useDispatch();

  const boards = useSelector((state) => state.board.boards);

  const [isEdit, setIsEdit] = useState(false);

  const [open, setOpen] = useState(false);
  const members = useSelector((state) => state.workspace.members);
  // const [boards, setBoards] = useState(board);
  const navigate = useNavigate();
  const workspace = useSelector((state) => state.workspace.oneWorkspace);
  // const [workspace, setWorSpace] = useState(workspaces);
  const [workspaceName, setWorkspaceName] = useState(workspace?.name);
  useEffect(() => {
    dispatch(getAllBoardsInWorkspaceAsync(id));
    dispatch(getWorkspaceMembersAsync(id));
    dispatch(getWorkspaceByIdAsync(id));
    // setWorSpace(workspaces);
    // setBoards(board);
    // console.log("useeffect run");
  }, []);

  const sugmitEditWorkspaceName = (e) => {
    e.preventDefault();
    const workspaceEdit = { name: workspaceName };
    const input = { workspaceId: id, workspaceName: workspaceEdit };
    dispatch(editWorkspaceNameAsync(input));
    setIsEdit(false);
    setFetch(!fetch);
    window.location.reload();
  };

  const handleOnClickDelete = (e) => {
    dispatch(deleteWorkspace(id));
    navigate("/workspace");
  };
  const [search, setSearch] = useState("");
  // const [sort, setSort] = useState("");
  const sortHandler = (sortQuery) => {
    dispatch(sortBoard(sortQuery));
  };
  const searchHandler = (searchParams) => {
    console.log("searchParams", searchParams);
  };
  const [searchLength, setSearchLength] = useState(Infinity);
  useEffect(() => {
    const length = search.length;
    if (length < searchLength) {
      dispatch(getAllBoardsInWorkspaceAsync(id));
      setSearchLength(length);
    }
    setSearchLength(length);
    const timeout = setTimeout(() => {
      dispatch(searchBoard(search));
    }, 300);

    return () => {
      clearTimeout(timeout);
    };
  }, [search]);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  return (
    <div className="w-[1280px] mx-auto mt-5">
      <div className=" ">
        <div className="flex gap-5">
          <div
            className="group bg-gray-50 p-2 max-w-[200px] rounded-2xl hover:bg-gray-100"
            role="button"
          >
            <select
              role="button"
              name=""
              id=""
              className="bg-gray-50 group-hover:bg-gray-100 w-full"
              onChange={(e) => {
                sortHandler(e.target.value);
              }}
            >
              <option value="sort">Sort</option>
              <option value="a-z">Sort By Name: A-Z</option>
              <option value="z-a">Sort By Name: Z-A</option>
              <option value="last-created">Last Created</option>
            </select>
          </div>
          <div className="relative group  rounded-2xl w-[200px]">
            <i class="text-gray-500  absolute left-3 top-[11px] group-hover:opacity-70 group-hover:scale-125 opacity-30 duration-500 fa-solid fa-magnifying-glass"></i>
            <input
              className="hover:bg-gray-100 bg-gray-50 px-10 py-2 rounded-2xl"
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              placeholder="Search"
            />
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex items-center justify-center gap-2">
            <i class="fa-solid fa-chart-simple text-blue-600 mb-[-15px]"></i>
            {isEdit ? (
              <div className="flex gap-2 mt-5">
                <input
                  className="animate-pulse bg-gray-200 min-w-[300px] font-semibold"
                  type="text"
                  value={workspaceName}
                  onChange={(e) => {
                    setWorkspaceName(e.target.value);
                  }}
                  onClick={(e) => {
                    setIsEdit(true);
                    e.stopPropagation();
                  }}
                  autoFocus
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
                  setWorkspaceName(workspace?.name);
                }}
                className="cursor-pointer group flex items-center gap-5 text-gray-600 hover:bg-gray-100 p-2 rounded-[4px] mt-5"
              >
                <h2 className="font-semibold text-blue-600 text-xl flex-1 px-2">
                  {workspace?.name}
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
              onClick={() => {
                setOpenDeleteModal(true);
              }}
            >
              <p className="">Delete Workspace</p>
            </button>
            {/* handleOnClickDelete */}
            <Modal
              title="Delete Workspace"
              open={openDeleteModal}
              onClose={() => {
                setOpenDeleteModal(false);
              }}
              width={25}
            >
              <div className="mb-5">Do you want to delete this workspace</div>
              <div className="flex gap-5 items-center bg-gray-100 rounded-[4px] px-3 mb-10 ">
                <i class="fa-solid fa-cubes fa-xl text-gray-300"></i>
                <div className="font-semibold py-2 ">
                  {workspace.name ?? workspaceName}
                </div>
              </div>

              <div className="flex gap-5 items-center justify-center">
                {" "}
                <button
                  className="hover:bg-gray-200 bg-gray-100 px-3 py-2 rounded-[4px] duration-300"
                  onClick={handleOnClickDelete}
                >
                  Delete
                </button>
                <button
                  className="hover:bg-blue-700 bg-blue-600 px-3 py-2 text-white rounded-[4px] duration-300"
                  onClick={() => {
                    setOpenDeleteModal(false);
                  }}
                >
                  Cancel
                </button>
              </div>
            </Modal>
          </div>
        </div>
        <hr className="mt-2" />
      </div>
      {boards.length == 0 && (
        <>
          {" "}
          <div className="flex items-center justify-center mt-10">
            <div className="bg-gray-100 rounded-[4px] p-5 text-gray-500 flex items-center justify-center gap-5 h-[240px] w-2/3">
              <i class="fa-solid fa-border-top-left fa-2xl"></i>
              <p>Empty Board</p>
            </div>
          </div>
        </>
      )}
      <div className="mt-5 grid grid-cols-5 gap-5">
        {boards?.map((el) => {
          console.log(el);
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
                  <p className="mt-10 text-xs font-light text-gray-500">
                    Created at: {new Date(el.createdAt).toDateString()}
                  </p>
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
