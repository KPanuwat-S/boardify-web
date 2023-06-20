import React from "react";
import { Link } from "react-router-dom";

// Mock Data
const id = 1;

function Workspace() {
  return (
    <div className="w-[1280px] mx-auto">
      <h1 className="font-bold text-gray-400 text-2xl mb-5">Your Workspace</h1>
      <div className="flex items-center justify-between">
        <Link to={`/workspaceDetail/${id}`}>
          <div className="flex items-center gap-5 ">
            <i class="fa-solid fa-chart-simple text-blue-600"></i>
            <h2 className="font-semibold text-blue-600 text-xl flex-1">
              CC14 Group Project
            </h2>
          </div>
        </Link>

        <Link>
          <div className="flex items-center justify-center gap-1 p-2 bg-gray-100 hover:bg-gray-200 rounded-[4px] duration-200">
            <i class="fa-regular fa-user text-gray-500 w-5"></i>
            <p className="text-gray-500">Member (6)</p>
          </div>
        </Link>
      </div>
      <hr className="mt-2" />
      <div className="mt-5 flex gap-5">
        <Link to={`/boardDetail/:${id}`}>
          <div className="flex  items-center w-[240px] h-[120px] bg-gray-100 rounded-[4px] hover:bg-gray-200 duration-300">
            <div className="mx-5">
              <i class="fa-solid fa-table-columns text-gray-800"></i>
              <p>Board 1</p>
            </div>
          </div>
        </Link>
        <Link to={`/boardDetail/:${id}`}>
          <div className="flex  items-center w-[240px] h-[120px] bg-gray-100 rounded-[4px] hover:bg-gray-200 duration-300">
            <div className="mx-5">
              <i class="fa-solid fa-table-columns text-gray-800"></i>
              <p>Board 1</p>
            </div>
          </div>
        </Link>
        <Link to={`/boardDetail/:${id}`}>
          <div className="flex  items-center w-[240px] h-[120px] bg-gray-100 rounded-[4px] hover:bg-gray-200 duration-300">
            <div className="mx-5">
              <i class="fa-solid fa-table-columns text-gray-800"></i>
              <p>Board 1</p>
            </div>
          </div>
        </Link>

        <div className="flex  items-center w-[240px] h-[120px] bg-gray-100 rounded-[4px] hover:bg-gray-200 duration-300">
          <div className="mx-5">
            <i class="fa-solid fa-table-columns text-gray-800"></i>
            <p>Board 1</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Workspace;
