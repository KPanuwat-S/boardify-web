import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import EditTask from "../features/components/EditTask";
import BoardPage from "../pages/BoardPage";
// import AddTask from "../features/components/AddTask";

const router = createBrowserRouter([
  {
    // path: "/addTask",
    // element: <AddTask />,
    path: "/board",
    element: <BoardPage />,
  },
  // {
  //   path: "/board",
  //   element: <BoardPage />,
  //   // path: "/board",
  //   // element: <BoardPage />,
  // },
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
