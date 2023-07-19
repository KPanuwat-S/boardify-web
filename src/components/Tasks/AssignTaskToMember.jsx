import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWorkspaceMembersAsync } from "../../features/workspace/Slice/workspaceSlice";
import { getMemberAsync } from "../../features/member/slice/memberSlice";
import MemberItem from "../Member/MemberItem";
import { addMemberToTaskAsync } from "../../features/board/task/Slice/taskSlice";

function AssignTaskToMember({
  cardItem,
  setTaskItem,
  taskItem,
  open,
  setOpen,
  setFetch,
  fetch,
}) {
  const board = useSelector((state) => state.board.board);
  const dispatch = useDispatch();
  // const members
  useEffect(() => {
    dispatch(getMemberAsync(board.workspaceId));
  }, []);
  const members = useSelector((state) => state.member.showmembercard);

  const filterMembers = members.filter((el) => {
    const membersAlreadyInTask = taskItem?.TaskMembers;
    console.log("memintask", membersAlreadyInTask);
    const found = membersAlreadyInTask?.find((mem) => mem.userId == el.userId);
    if (!found) return el;
  });
  const submitJoinTask = (userId) => {
    const taskId = taskItem.id;
    const input = { taskId, userId };
    dispatch(addMemberToTaskAsync(input));
    setFetch(!fetch);
    setOpen(false);
  };

  return (
    open && (
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="flex flex-col w-[350px] absolute gap-3 z-50 bg-white border rounded-[4px] shadow-lg p-5"
      >
        <h1 className="text-center mt-1 ">Asign this task to</h1>
        <hr className="mb-1" />
        {/* <div className="rounded-[4px] m-2 p-3 hover:bg-gray-100"> */}

        {filterMembers.map((el) => {
          return (
            <div
              onClick={() => {
                submitJoinTask(el.User.id);
              }}
              className="relative overflow-y-scroll flex  z-50 items-center w-full px-2 py-3 bg-gray-100 rounded-[4px] duration-300"
            >
              <div className="absolute  w-full h-full bg-black/20 flex items-center justify-center -left-20 hover:left-0 duration-300 opacity-0 hover:opacity-100">
                <div className="absolute right-10">
                  <i class="fa-solid fa-arrow-right-to-bracket text-white"></i>
                </div>
              </div>
              <div className="">
                {" "}
                <MemberItem
                  firstName={el.User.firstName}
                  lastName={el.User.lastName}
                  email={el.User.email}
                />
              </div>
            </div>
          );
        })}

        {/* </div> */}
        {/* <div className="flex justify-center gap-2 mt-5 mb-2">
          <button
            onClick={submitJoinTask}
            className="bg-blue-600 text-white py-1 px-5 rounded-[4px]"
          >
            Join
          </button>

          <button
            className="py-1 px-2 rounded-[4px] border border-gray-300 hover:bg-gray-300"
            onClick={() => {
              setOpen(false);
            }}
          >
            Cancel
          </button>
        </div> */}
      </div>
    )
  );
}

export default AssignTaskToMember;
