import React from "react";
import { useParams, Link } from "react-router-dom";

function WorkspaceDetail() {
  const { id } = useParams();
  return (
    <div>
      <div className="w-[1280px] mx-auto">
        <div className="flex justify-between">
          <div className="flex items-center gap-5">
            <i class="fa-solid fa-chart-simple text-blue-600"></i>
            <h2 className="font-semibold text-blue-600 text-xl flex-1">
              CC14 Group Project
            </h2>
          </div>
          <div className="flex items-center justify-center gap-1 p-2 bg-gray-100 hover:bg-gray-200 rounded-[4px] duration-200">
            <i class="fa-regular fa-user text-gray-500 w-5"></i>
            <p className="text-gray-500">Member (6)</p>
          </div>
        </div>
        <hr className="mt-2" />
      </div>
    </div>
  );
}

export default WorkspaceDetail;
