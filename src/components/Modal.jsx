// import React from "react";

import AddMemberForm from "../features/core-components/side/member-component/AddMemberForm";

// import AddMemberInput from "../features/components/AddMemberInput";

// import { MenuIcon, TaskNameIcon } from "../icons";

// export default function Modal() {
export default function Modal({ title, closeModal, children, width = 27 }) {
  return (
    <>
      <div className="fixed inset-0 bg-white opacity-70 z-20"></div>
      <div className="fixed inset-0 z-30">
        <div className="flex justify-center items-center min-h-full ">
          <div
            style={{ maxWidth: `${width}rem` }}
            className="bg-white rounded-lg w-full shadow-[0_0_15px_rgb(0_0_0_/0.2)] flex flex-col overflow-hidden max-h-[calc(100vh-2rem)]"
          >
            <div className="flex justify-between text-black">
              <div>{title}</div>
              <button className="" onClick={() => closeModal(false)}>
                X
              </button>
            </div>
            <AddMemberForm />
            <div className="flex bg-orange-400">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
