import { useDispatch } from "react-redux";

export default function MemberEventInCard({ item, workspaceId }) {
  const dispatch = useDispatch()

  const handleOnClickToDelete = e => {

  }

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
            <h2 className="text-blue-600">{item.count <= 0 ? "Not in Board" : "On" + " " + item.count + " " + "Boards"}</h2>
          </div>
          <div className="flex items-center justify-center w-[50px]">
            <p>{item.isAdmin == true ? "Admin" : "User"}</p>
          </div>
          <button className="flex justify-center items-center w-[90px] px-2 py-1 bg-gray-100 rounded-[4px] hover:bg-gray-200 duration-200">
            <h2 className="text-gray-500 ">
              {item.isAdmin == true ? "Remove" : "Leave"}
            </h2>
          </button>
        </div>
      </div>
    </>
  );
}
