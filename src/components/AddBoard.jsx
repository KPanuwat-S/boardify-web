import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  createBoardAsync,
  getAllBoardsInWorkspaceAsync,
} from "../features/board/board/Slice/boardSlice";
function AddBoard({ workspaceId, onSuccess }) {
  const [board, setBoard] = useState("");

  const [data, setData] = useState({
    name: "",
    workspaceId: workspaceId,
  });
  useEffect(() => {
    setData({ name: board, workspaceId: workspaceId });
  }, [board]);

  const dispatch = useDispatch();
  const changeHandler = (e) => {
    setBoard(e.target.value);
  };
  const createBoardHanlder = async (e) => {
    e.preventDefault();
    try {
      await dispatch(createBoardAsync(data)).unwrap();
      dispatch(getAllBoardsInWorkspaceAsync(workspaceId));
      onSuccess();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <h1 className="text-gray-800 text-center font-light mb-10">
        Boost your productivity by making it easier for everyone to access
        boards in one location.
      </h1>
      <div className="flex items-center justify-center">
        <img
          className="w-[300px]"
          src="https://img.freepik.com/free-vector/hand-drawn-business-planning_52683-76248.jpg?w=1380&t=st=1687356105~exp=1687356705~hmac=bc1d6ce4959b823f4c2d738558671b479c7723ea71183e40ffd2fa0324394e21"
          alt=""
        />
      </div>
      <form onSubmit={createBoardHanlder}>
        <div className="flex flex-col p-5 gap-2">
          <label htmlFor="workspaceName">Board name</label>
          <input
            className="border border-gray-400 p-2 rounded-[4px]"
            type="text"
            id="workspaceName"
            name="workspaceName"
            value={board}
            onChange={changeHandler}
          />

          <div className="flex items-center justify-center mt-4">
            <input
              className="cursor-pointer w-[120px] bg-blue-600 rounded-[4px] p-2 text-white"
              type="submit"
              value="Create"
              onClick={createBoardHanlder}
              //
            />
          </div>
        </div>
      </form>
    </>
  );
}

export default AddBoard;
