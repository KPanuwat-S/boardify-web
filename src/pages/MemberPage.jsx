import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Modal from "../components/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  getWorkspaceMembersAsync,
  getWorkspaceByIdAsync,
} from "../features/workspace/Slice/workspaceSlice";
import MemberCard from "../features/member/components/MemberCard";
import MemberInvitation from "../features/member/components/MemberInvitation";
import { getMemberAsync } from "../features/member/Slice/memberSlice";

function MemberPage() {
  const { id } = useParams();
  // console.log("id", id);
  const [open, setOpen] = useState(false);
  const [fetchDelete, setFetchDelete] = useState(false);

  useEffect(() => {
    dispatch(getWorkspaceMembersAsync(id));
    dispatch(getWorkspaceByIdAsync(id));
    dispatch(getMemberAsync(id));
  }, []);

  useEffect(() => {
    dispatch(getMemberAsync(id));
  }, [fetchDelete]);

  const dispatch = useDispatch();
  // dispatch(getWorkspaceMembersAsync(workspace.id));
  const members = useSelector((state) => state.workspace.members);
  // const workspace = useSelector((state) => state.workspace.workspaces);

  const workspace = useSelector((state) => state.workspace.oneWorkspace);
  // console.log("one workspace", workspace);
  // console.log("workspace in mem", workspace);

  const memberInCard = useSelector((state) => state.member.showmembercard);
  console.log(memberInCard);

  return (
    <div className="w-[1280px] mx-auto my-2">
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
            }}
          >
            <div className="px-10 h-[600px]">
              <MemberInvitation
                workspaceId={id}
                setFetch={setFetchDelete}
                fetchDelete={fetchDelete}
                onClose={() => setOpen(false)}
              />
            </div>
          </Modal>
        </div>
        <hr className="mt-2" />
      </div>

      {/* Member Component */}

      <div className="flex flex-col mt-10">
        {/* Member Card */}
        <MemberCard
          memberInCard={memberInCard}
          workspaceId={id}
          setFetch={setFetchDelete}
          fetchDelete={fetchDelete}
        />
      </div>
    </div>
  );
}

export default MemberPage;
