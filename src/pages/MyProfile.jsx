import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getWorkspaceMembersAsync,
  getAllWorkSpacesAsync,
} from "../features/workspace/Slice/workspaceSlice";
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

  console.log("workspaces", workspaces);

  const [data, setData] = useState([]);
  useEffect(() => {
    if (workspaces?.length > 0) {
      setData([...workspaces]);
    }
  }, [workspaces]);

  function onSelectionChange(e) {
    const sortDirection = e.target.value;
    const copyArray = [...data]; // สร้างอาร์เรย์ใหม่

    const updatedWorkspace = {
      ...copyArray[0].Workspace,
      Boards: copyArray[0].Workspace.Boards.slice().sort((a, b) => {
        let result = 0;
        switch (sortDirection) {
          case "0":
            result = a.name.localeCompare(b.name);
            break;
          case "1":
            result = new Date(a.dueDate) - new Date(b.dueDate);
            break;
          default:
            break;
        }
        return result;
      }),
    };

    copyArray[0] = {
      ...copyArray[0],
      Workspace: updatedWorkspace,
    };

    setData(copyArray); // อัปเดตค่าใน state ของ data
  }

  return (
    <div className="w-[1280px] mx-6 mt-5">
      <label>
        <h1 className="font-semibold">Sort by</h1>
        <select
          className="border-4 border-gray-300"
          defaultValue={"9"}
          onChange={onSelectionChange}
        >
          <option value={"9"}>sort </option>
          <option value={"0"}>Sorting by board</option>
          <option value={"1"}>Sorting by due date</option>
        </select>
      </label>

      {data.map((el) => {
        return (
          <div key={workspaces}>
            <WorkspaceComponent
              workspace={el.Workspace}
              boards={el.Workspace.Boards}
            />
          </div>
        );
      })}
    </div>
  );
}

export default MyProfile;
