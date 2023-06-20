import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import EditTask from "../features/components/EditTask";
import BoardPage from "../pages/BoardPage";

const router = createBrowserRouter([
  {
    path: "/board",
    element: <BoardPage />,
    // path: "/board",
    // element: <BoardPage />,
  },
  {
    children: [
      //   {
      //     path: "/board",
      //     element: <BoardPage />,
      //   },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
