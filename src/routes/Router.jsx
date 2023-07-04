import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "../layouts/Header";
import Homepage from "../pages/Homepage";
// import Sidebar from "../layouts/Sidebar";
import Workspace from "../pages/Workspace";
// import SidebarRouter from "./SidebarRouter";
import BoardDetail from "../pages/BoardDetail";
import Boards from "../pages/Boards";
import WorkspaceDetail from "../pages/WorkspaceDetail";
import RedirectIfAuthenticated from "../features/auth/components/RedirectIfAuthenticated";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import MemberPage from "../pages/MemberPage";
import DashBoard from "../pages/DashBoard";
// import Task from "../components/Tasks/TaskEditContent";
import WelcomingPage from "../pages/WelcomingPage";
import MyProfile from "../pages/MyProfile";
import ProtectedRoute from "../features/auth/components/ProtectedRoute";
import TaskEditContent from "../components/Tasks/TaskEditContent";

import PurchasePage from "../pages/PurchasePage";
import SuccessPage from "../pages/SuccessPage";
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
        { path: "/", element: <Homepage /> },
        // { path: "/homepage", element: <Homepage /> },
        // { path: "/workspace", element: <Workspace /> },
        { path: "/boards", element: <Boards /> },
        { path: "/dashboard/:id", element: <DashBoard /> },
        { path: "/boardDetail/:id", element: <BoardDetail /> },
        { path: "/workspaceDetail/:id", element: <WorkspaceDetail /> },
        // { path: "/login", element: <LoginPage /> },
        { path: "/member/:id", element: <MemberPage /> },
        { path: "/task", element: <TaskEditContent /> },
        { path: "/register", element: <RegisterPage /> },
        { path: "/welcoming", element: <WelcomingPage /> },
        { path: "/board", element: <Boards /> },
        { path: "/dashboard/:id", element: <DashBoard /> },

        { path: "/myProfile", element: <MyProfile /> },
        { path: "/purchase", element: <PurchasePage /> },
        { path: "/success", element: <SuccessPage /> },
      ],
    },

    {
      path: "/login",
      element: (
        <RedirectIfAuthenticated>
          <Header />
          <LoginPage />
        </RedirectIfAuthenticated>
      ),
    },
    {
      path: "/myProfile",
      element: (
        <ProtectedRoute>
          <Header />
          <MyProfile></MyProfile>
        </ProtectedRoute>
      ),
    },
    {
      path: "/workspace",
      element: (
        <ProtectedRoute>
          <Header />
          <Outlet />
        </ProtectedRoute>
      ),
      children: [{ path: "/workspace", element: <Workspace /> }],
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
