import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMyproject } from "../features/myProject/Slice/myProjectSlice";
import MyprofileComponent from "./MyprofileComponent";
import { Link } from "react-router-dom";
import { PurchaseIcon } from "../icons";

// Mock Data

function MyProfile() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMyproject());
  }, [dispatch]); // adding dispatch to the dependencies

  const items = useSelector((state) => state.projects.projects);
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
      <div className="flex gap-5 text-gray-700 mx-auto w-[1280px] mt-5">
        <div className=" text-white flex items-center justify-center bg-blue-300 w-[50px] h-[50px] rounded-full">
          {user?.firstName[0]} {user?.lastName[0]}
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold">My Profile</h1>
          <p>
            {user?.firstName} {user?.lastName}
          </p>
          <p className="text-blue-600">{user?.email}</p>
        </div>
      </div>
      <Link to="/purchase">
        {/* <div className="bg-orange-500 w-28  p-4 flex justify-center items-center mt-10 mr-14"> */}
        <div className="hover:text-white text-blue-600 rounded-[4px] bg-white hover:bg-blue-600 w-48  p-4  gap-2 items-center mt-10 mr-14 shadow-md border bottom-1">
          <div>{/* <PurchaseIcon /> */}</div>
          <button>
            <div>Upgrade to Boardify Premium</div>
          </button>
        </div>
      </Link>

      <div className=" flex bg-gray-200">
        <div className="px-10 w-full py-5 sticky top-20 bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border ">
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
          natta
        </div>
        <div>
          <Link to="/purchase">
            {/* <div className="bg-orange-500 w-28  p-4 flex justify-center items-center mt-10 mr-14"> */}
            <div className="bg-white hover:bg-slate-300 w-48  p-4  gap-2 flex justify-center items-center mt-10 mr-14 shadow-md border bottom-1">
              <div>
                <PurchaseIcon />
              </div>
              <button>
                <div>Upgrade</div>
              </button>
            </div>
          </Link>
        </div>
        {/* {items?.length > 0 &&
          items?.map((item, index) => {
            return (
              <div className="w-[1280px] mx-auto rounded-xl" key={index}>
                <MyprofileComponent data={item} />
              </div>
            );
          })} */}
      </div>
    </div>
  );
}

export default MyProfile;
