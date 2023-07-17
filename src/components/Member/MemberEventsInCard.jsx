import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteMemberWorkspace, getMemberRole } from "../slice/memberSlice";

export default function MemberEventInCard({
  item,
  wsId,
  setFetch,
  fetchDelete,
}) {
  const userId = item.userId;
  const workspaceId = +wsId;
  // console.log("ppppppp------", item);
  const dispatch = useDispatch();

  const data = { workspaceId, userId };
  // console.log(data);
  const getAuthMember = useSelector((state) => state.auth.user);
  const authUserId = getAuthMember.id;
  // console.log("=======", authUserId);
  const roleMember = { authUserId, workspaceId };

  const getRole = useSelector((state) => state.member.memberrole);
  // console.log("----------", getRole.userId);

  const leave = () => {
    if (authUserId == getRole.userId && authUserId == userId) {
      return true;
    }
  };
  // console.log("leave.......", leave());

  useEffect(() => {
    dispatch(getMemberRole(roleMember));
  }, []);

  const handleOnClickToDelete = async (e) => {
    // console.log("1 2 3 4 5 Test");
    await dispatch(deleteMemberWorkspace(data)).unwrap();
    // await dispatch(getMemberAsync(wsId));
    setFetch(!fetchDelete);
  };

  return (
    <>
      <div className="flex flex-1 gap-5">
        <div className="flex items-center justify-center w-[40px] h-[40px] bg-blue-400 text-white rounded-full">
          {item.User.firstName[0]}
          {item.User.lastName[0]}
        </div>
        <div>
          <h2 className="font-bold">
            {item.User.firstName} {item.User.lastName}
          </h2>
          <h3>{item.User.email}</h3>
        </div>
        <div className="flex flex-1 justify-end items-center gap-5 ">
          <div className="flex justify-center items-center w-[120px]">
            <h2 className="text-blue-600">
              {item.count <= 0
                ? "Not in Board"
                : "On" + " " + item.count + " " + "Boards"}
            </h2>
          </div>
          <div className="flex items-center justify-center w-[50px]">
            <p>{item.isAdmin == true ? "Admin" : "User"}</p>
          </div>

          {getRole == true ? (
            <button
              className="flex justify-center items-center w-[90px] px-2 py-1 bg-gray-100 rounded-[4px] hover:bg-gray-200 duration-200"
              onClick={handleOnClickToDelete}
            >
              <h2 className="text-gray-500 ">Remove</h2>
            </button>
          ) : leave() == true ? (
            <button
              className="flex justify-center items-center w-[90px] px-2 py-1 bg-gray-100 rounded-[4px] hover:bg-gray-200 duration-200"
              onClick={handleOnClickToDelete}
            >
              <h2 className="text-gray-500 ">Leave</h2>
            </button>
          ) : (
            <button className="flex justify-center items-center w-[90px] px-2 py-1 bg-gray-100 rounded-[4px] hover:bg-gray-200 duration-200 invisible"></button>
          )}
        </div>
      </div>
    </>
  );
}
