import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Modal from "../components/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  getWorkspaceMembersAsync,
  getWorkspaceByIdAsync,
} from "../features/workspace/Slice/workspaceSlice";

function MemberPage() {
  const { id } = useParams();
  console.log("id", id);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    dispatch(getWorkspaceMembersAsync(id));
    dispatch(getWorkspaceByIdAsync(id));
  }, []);
  const dispatch = useDispatch();
  // dispatch(getWorkspaceMembersAsync(workspace.id));
  const members = useSelector((state) => state.workspace.members);
  // const workspace = useSelector((state) => state.workspace.workspaces);

  const workspace = useSelector((state) => state.workspace.oneWorkspace);
  console.log("workspace in mem", workspace);
  return (
    <div className="w-[1280px] mx-auto">
      <div className="">
        <div className="flex justify-between">
          <div className="flex items-center gap-5">
            <i class="fa-solid fa-chart-simple text-blue-600"></i>
            <h2 className="font-semibold text-blue-600 text-xl flex-1">
              {workspace?.name}
            </h2>
          </div>
          <div
            role="button"
            onClick={() => {
              setOpen(true);
            }}
            className="flex items-center justify-center gap-1 p-2 bg-gray-100 hover:bg-gray-200 rounded-[4px] duration-200"
          >
            <i class="fa-regular fa-user text-gray-500 w-5"></i>
            <p className="text-gray-500">+ Invite Member</p>
          </div>
          <Modal
            open={open}
            title="Invite Member"
            // width={35}
            onClose={() => {
              setOpen(false);
              console.log("onclose");
            }}
          >
            Hi
          </Modal>
        </div>
        <hr className="mt-2" />
      </div>

      {/* Member Component */}
      
      <div className="flex flex-col  mt-10">
        <div className="flex flex-1 gap-5 justify-between">
          <div className="flex gap-5">
            <div className="flex items-center justify-center w-[40px] h-[40px] bg-blue-400 text-white rounded-full"></div>
            <div>
              <h2 className="font-bold">Sadana Doe</h2>
              <h3>sadananDoe@gmail.com</h3>
            </div>
          </div>
          <div className="flex items-center gap-5 ">
            <div>
              <h2 className="text-blue-600">On 2 Boards</h2>
            </div>
            <div>Admin</div>
            <button className="flex items-center px-2 py-1 bg-gray-100 rounded-[4px] hover:bg-gray-200 duration-200">
              <h2 className="text-gray-500">Remove</h2>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberPage;
