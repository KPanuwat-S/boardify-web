import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMyproject } from "../features/myproject/Slice/myprojectSlice";
import MyprofileComponent from "./MyprofileComponent";

// Mock Data

function MyProfile() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMyproject(items));
  }, []);

  const items = useSelector((state) => state.projects);
  console.log("items", items);

  function onSelectionChange(e) {
    const sortDirection = e.target.value;
    dispatch(fetchMyproject(`?sortBy=${sortDirection}`));
  }

  return (
    <div className="w-full mt-5">
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

      {items.projects.length &&
        items.projects.map((item, index) => {
          return (
            <div key={index}>
              <MyprofileComponent data={item} />
            </div>
          );
        })}
    </div>
  );
}

export default MyProfile;
