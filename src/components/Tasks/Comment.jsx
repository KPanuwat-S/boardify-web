import React, { useEffect, useState } from "react";
import { Collapse } from "react-collapse";
import { useDispatch, useSelector } from "react-redux";
import {
  addCommentAsync,
  deleteCommentAsync,
  editCommentAsync,
} from "../../features/board/task/Slice/taskSlice";
import { Link } from "react-router-dom";

function Comment({ taskItem, fetch, setFetch, setTaskItem }) {
  const board = useSelector((state) => state.board.board);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const [writeComment, setWriteComment] = useState(false);
  const [comment, setComment] = useState("");
  const [isEdit, setIsEdit] = useState(null);

  const getCommentText = (id) => {
    const obj = taskItem?.Comments?.find((el) => el.id == id);
    // console.log("obj", obj);
    return obj?.comment;
  };
  const [editCommentText, setEditCommentText] = useState(getCommentText());

  console.log("editCommentText", editCommentText);
  const submitCommentHandler = () => {
    const commentObject = {
      taskId: taskItem.id,
      comment,
    };
    console.log("");
    dispatch(addCommentAsync(commentObject));
    setFetch(!fetch);
    setWriteComment(false);
    setComment("");
  };
  const cancelCommentHandler = (e) => {
    e.preventDefault();
    setWriteComment(false);
    setComment("");
  };
  const submitEditCommentHandler = (id, comment) => {
    console.log("id-comment", id, comment);
    const input = { id, comment };
    setFetch(!fetch);
    dispatch(editCommentAsync(input));
    setIsEdit(false);
  };
  const deleteCommentHandler = (id) => {
    dispatch(deleteCommentAsync(id));
    setFetch(!fetch);
    console.log("id", id);
  };

  console.log("board", board);
  if (!board?.isPremium)
    return (
      <div
        role="button"
        className="mt-5 relative bg-gray-300 rounded-xl p-2 group  "
      >
        <div className="flex items-center gap-5 group-hover:opacity-20 duration-300">
          <i class="fa-regular fa-comment"></i>
          <p>Comment</p>
        </div>
        <Link to="/purchase">
          <div className="absolute rounded-xl opacity-0 w-full duration-200 h-full top-0 right-0 group-hover:opacity-90 flex gap-2 bg-yellow-300 items-center justify-center group-hover:animate-pulse">
            <i class="fa-solid fa-lock-open"></i>
            <p>Get Boardify Premium to Unlock Feature</p>
          </div>
        </Link>
      </div>
    );
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-5 mt-10">
        <i class="fa-regular fa-comment"></i>
        <p>Comment</p>
      </div>

      {writeComment ? (
        <>
          <input
            className="max-w-full px-5 rounded-full min-h-[40px] bg-gray-50"
            type="text"
            autoFocus
            placeholder="Write a comment..."
            value={comment}
            onChange={(e) => {
              setComment(e.target.value);
            }}
          />
          <div className="flex gap-2">
            <button
              onClick={submitCommentHandler}
              className="bg-blue-600 hover:bg-blue-700 rounded-[4px] text-white py-1 px-2"
            >
              Save
            </button>
            <button
              onClick={cancelCommentHandler}
              className="border border-gray-100 hover:bg-gray-100 rounded-[4px] py-1 px-2"
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <div
          role="button"
          onClick={() => {
            setWriteComment(true);
          }}
          className="bg-gray-100 rounded-full w-full min-h-[10px] flex items-center px-5 py-2"
        >
          <p className="text-gray-500">Write a comment...</p>
        </div>
      )}

      <div>
        <div className="flex flex-col gap-5">
          {taskItem?.Comments?.map((el, idx) => {
            return (
              <div className="flex gap-5">
                <div className="bg-blue-200 h-[50px] w-[50px] rounded-full flex items-center justify-center text-white">
                  {" "}
                  {el.User.firstName[0] + el.User.lastName[0]}
                </div>
                <div className="bg-gray-50 w-[500px] px-5 py-2 rounded-xl">
                  <div className="flex justify-between">
                    <p className="text-blue-600">
                      {el.User.firstName + el.User.lastName}
                      <span className="ml-2 text-gray-500 text-xs font-light">
                        {new Date(el.updatedAt).toLocaleString()}
                      </span>
                    </p>
                    {el.userId == user.id && (
                      <div>
                        <button
                          onClick={() => {
                            setEditCommentText(getCommentText(el.id));

                            setIsEdit(el.id);
                          }}
                          className="group hover:bg-gray-200 p-1 px-2 rounded-xl"
                        >
                          <i class="fa-regular fa-pen-to-square text-gray-300 group-hover:text-gray-400"></i>
                        </button>
                        <button
                          className="group hover:bg-gray-200 p-1 px-2 rounded-xl"
                          onClick={() => {
                            deleteCommentHandler(el.id);
                          }}
                        >
                          <i class="fa-regular fa-trash-can text-gray-300 group-hover:text-gray-400"></i>
                        </button>
                      </div>
                    )}
                  </div>
                  {isEdit == el.id ? (
                    <div className="w-full ">
                      <input
                        className="w-full p-5 mb-5"
                        value={editCommentText}
                        onChange={(e) => {
                          setEditCommentText(e.target.value);
                        }}
                      />
                      <div className="flex gap-2">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            submitEditCommentHandler(el.id, editCommentText);
                          }}
                          className="bg-blue-600 hover:bg-blue-700 rounded-[4px] text-white py-1 px-2"
                        >
                          Save
                        </button>
                        <button
                          onClick={cancelCommentHandler}
                          className=" bg-gray-200 hover:bg-gray-300 rounded-[4px] py-1 px-2"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <p>{el.comment}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Comment;
