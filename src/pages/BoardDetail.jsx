import React from "react";
import { useParams } from "react-router-dom";

function BoardDetail() {
  const { id } = useParams();
  return <div>BoardDetail</div>;
}

export default BoardDetail;
