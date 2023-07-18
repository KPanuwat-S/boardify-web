import React from "react";
import { useSelector } from "react-redux";

function AssignTaskToMember({
  cardItem,
  setTaskItem,
  taskItem,
  fetch,
  setFetch,
}) {
  const board = useSelector((state) => state.board.board);
  console.log("boardindsajdksadjksa", board);
  return <div>AssignTaskToMember</div>;
}

export default AssignTaskToMember;
