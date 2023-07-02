import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMyproject } from "../features/myProject/Slice/myProjectSlice";
import MyprofileComponent from "./MyprofileComponent";

// Mock Data

function MyProfile() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMyproject());
  }, [dispatch]); // adding dispatch to the dependencies

  const items = useSelector((state) => state.projects);
  console.log("items", items);

  function onSelectionChange(e) {
    const sortDirection = e.target.value;
    if (sortDirection === "0") {
      dispatch(fetchMyproject("board"));
    } else if (sortDirection === "1") {
      dispatch(fetchMyproject("task"));
    } else if (sortDirection === "9") {
      dispatch(fetchMyproject(""));
    }
  }
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="flex flex-col gap-5">
      {/* <div className="bg-blue-100 text-white">
        <h1 className="font-bold">My Profile</h1>
        <p>
          Name: {user.firstName} {user.lastName}
        </p>
        <p>Email</p>
      </div> */}

      <div className="">
        <div className="px-10 w-full py-5 sticky top-20 bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-100">
          {" "}
          <h1 className="text-blue-600 font-bold">My task</h1>
          <label>
            <h1 className="font-semibold text-gray-600 mb-5">Sort by</h1>
            <select
              className="rounded-[4px]"
              defaultValue={"9"}
              onChange={onSelectionChange}
            >
              <option value={"9"}>sort</option>
              <option value={"0"}>Sorting by board</option>
              <option value={"1"}>Sorting by due date</option>
            </select>
          </label>
        </div>

        {items.projects.length > 0 &&
          items.projects.map((item, index) => {
            return (
              <div className="w-[1280px] mx-auto rounded-xl" key={index}>
                <MyprofileComponent data={item} />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default MyProfile;
