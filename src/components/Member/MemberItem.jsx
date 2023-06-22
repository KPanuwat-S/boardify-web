import React from "react";

function MemberItem({ firstName, lastName, email }) {
  const profileText = firstName[0] + lastName[0];
  return (
    <div className="flex gap-5">
      <div className="flex items-center justify-center w-[35px] h-[35px] bg-blue-400 text-white rounded-full">
        {profileText}
      </div>
      <div>
        <p className="font-bold">{firstName + " " + lastName}</p>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default MemberItem;
