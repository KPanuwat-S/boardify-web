import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "../components/Modal";
import MemberCard from "../features/member/components/MemberCard";
import MemberInvitation from "../features/member/components/MemberInvitation";

function MemberPage() {
  const { id } = useParams();

  const [open, setOpen] = useState(false);

  return (
    <div className="w-[1280px] mx-auto">
      <div className="">
        <div className="flex justify-between">
          <div className="flex items-center gap-5">
            <i class="fa-solid fa-chart-simple text-blue-600"></i>
            <h2 className="font-semibold text-blue-600 text-xl flex-1">
              CC14 Group Project
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
            <div className="px-10 h-[600px]">
              <MemberInvitation workspaceId={id} />
            </div>
          </Modal>
        </div>
        <hr className="mt-2" />
      </div>

      {/* Member Component */}
      <div className="flex flex-col  mt-10">
        {/* Member Card */}
        <MemberCard />
      </div>
    </div>
  );
}

export default MemberPage;
