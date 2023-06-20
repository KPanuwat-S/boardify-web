import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "../layouts/Header";
import Homepage from "../pages/Homepage";
import Sidebar from "../layouts/Sidebar";
import Workspace from "../pages/Workspace";
import SidebarRouter from "./SidebarRouter";
import BoardDetail from "../pages/BoardDetail";
import Boards from "../pages/Boards";
import WorkspaceDetail from "../pages/WorkspaceDetail";
import RedirectIfAuthenticated from "../features/auth/components/RedirectIfAuthenticated";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import MemberPage from "../pages/MemberPage";
import Task from "../components/Task";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Outlet />
        </>
      ),
      children: [
        { path: "/homepage", element: <Homepage /> },
        { path: "/workspace", element: <Workspace /> },
        { path: "/boards", element: <Boards /> },
        { path: "/boardDetail/:id", element: <BoardDetail /> },
        { path: "/workspaceDetail/:id", element: <WorkspaceDetail /> },
        { path: "/login", element: <LoginPage /> },
        { path: "/member/:id", element: <MemberPage /> },
        { path: "/task", element: <Task /> },
      ],
    },
    {
      path: "/login",
      element: (
        <RedirectIfAuthenticated>
          <LoginPage />
        </RedirectIfAuthenticated>
      ),
    },
    {
      path: "/register",
      element: (
        <RedirectIfAuthenticated>
          <RegisterPage />
        </RedirectIfAuthenticated>
      ),
    },
    // {
    //   path: "/workspace",
    //   element: (
    //     <>
    //       <Header />
    //       {/* <Sidebar /> */}
    //       <Outlet />
    //     </>
    //   ),
    //   children: [
    //     { path: "/workspace", element: <Workspace /> },
    //     { path: "/boards", element: <Boards /> },
    //     { path: "/boardDetail", element: <BoardDetail /> },
    //   ],
    // },
  ]);
  return <RouterProvider router={router} />;
}

export default Router;
