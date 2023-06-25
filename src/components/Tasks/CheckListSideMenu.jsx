import React from "react";
import SaveCancelBtnGroup from "./SaveCancelBtnGroup";

function CheckListSideMenu() {
  return (
    <div>
      <h2>Add Checklist</h2>
      <hr />
      <input type="text" className="my-2 p-1 border w-full" />
      <div className="flex gap-2"></div>
    </div>
  );
}

export default CheckListSideMenu;
