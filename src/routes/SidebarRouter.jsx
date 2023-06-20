import React from "react";
import Sidebar from "../layouts/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Workspace from "../pages/Workspace";

function SidebarRouter() {
  return (
    <BrowserRouter>
      <div>
        <Sidebar />
      </div>
      <div className="">
        <Routes>
          <Route path="/workspace" element={<Workspace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default SidebarRouter;
