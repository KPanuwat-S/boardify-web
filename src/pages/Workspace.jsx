import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getWorkspaceMembersAsync,
  getAllWorkSpacesAsync,
} from "../features/workspace/Slice/workspaceSlice";
import WorkspaceComponent from "./WorkspaceComponent";

// Mock Data

function Workspace() {
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
    const copyArray = structuredClone(data); // create a new array & not mutate state
    const newArray = copyArray[0].Workspace.Boards.sort((a, b) => {
      let result = 0;
      switch (sortDirection) {
        case "0":
          result =
            a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase() ? -1 : 1;
          console.log("0");
          return result;

        case "1":
          result =
            b.name.toLocaleLowerCase() > a.name.toLocaleLowerCase() ? 1 : -1;
          console.log("1");
          return result;
      }
    });
    setData(copyArray); //re-render
    console.log("data", data, "copyArray", copyArray, "newArray", newArray);
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
          <option value={"0"}>Alphabetically A-Z</option>
          <option value={"1"}>Alphabetically Z-A</option>
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

export default Workspace;
