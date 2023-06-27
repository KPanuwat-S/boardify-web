import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { getAllWorkSpacesAsync } from "../features/workspace/Slice/workspaceSlice";
import WorkspaceComponent from "./WorkspaceComponent";

// Mock Data

function MyProfile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const userId = user.id;

  // Fetch workspace by user id
  useEffect(() => {
    dispatch(getAllWorkSpacesAsync(userId));
  }, []);

  const workspaces = useSelector((state) => state.workspace.workspaces);

  return (
    <div className="w-[1280px] mx-auto mt-5">
      <h1 className="font-bold text-gray-400 text-2xl mb-5">Your Workspace</h1>
      {workspaces.map((el) => {
        return (
          <WorkspaceComponent
            workspace={el.Workspace}
            boards={el.Workspace.Boards}
          />
        );
      })}
    </div>
  );
}

export default MyProfile;
