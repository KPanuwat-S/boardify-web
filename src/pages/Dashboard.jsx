// import { useDispatch } from "react-redux";
import CardPerList from "../components/Dashboard/CardPerList";
import CardPerDueDate from "../components/Dashboard/CardPerDueDate";
import CardPerMember from "../components/Dashboard/CardPerMember";
import CardPerLabel from "../components/Dashboard/CardPerLabel";
import Navbar from "../features/board/board/Navbar";
import SideBar from "../features/board/board/Sidebar";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { getAllCardsInOneBoardAsync } from "../features/board/card/Slice/cardSlice";
// import { MeatballsIcon3 } from "../icons";

export default function DashBoard() {
  // const { id } = useParams();
  const { id } = useParams();
  console.log("id", id);
  const dispatch = useDispatch();
  const allWorkspace = useSelector((state) => state.workspace.workspaces);
  const thisWorkSpace = allWorkspace.find((el) =>
    el.Workspace.Boards.find((el) => el.id == id)
  );
  return (
    <>
      <div>
        <Navbar boardId={id} workspace={thisWorkSpace.Workspace} />
      </div>
      <div className="flex">
        <div className="h-[100vh]">
          <SideBar />
        </div>
        {/* ///// */}
        <div className="my-9  max-h-[450px]  ">
          <div className=" p-8 bg-[#f5f5f5] flex gap-3 max-h-[480px] rounded-lg overflow-y-auto overflow-x-hidden ">
            <div className="flex  flex-col gap-3">
              <div className="w-[560px] bg-white border-solid border-[1px] rounded-xl shadow-inner  ">
                <div className="p-8 ">
                  <div className="flex justify-between">
                    <p className="">Task per Card</p>
                    <div>{/* <MeatballsIcon3 /> */}</div>
                  </div>
                  <div className="m-10 mb-[-10px]">
                    <CardPerList />
                  </div>
                </div>
              </div>
              <div className="w-[560px] bg-white border-solid border-[1px] rounded-xl shadow-inner  ">
                <div className="p-8 ">
                  <div className="flex justify-between">
                    <p className="">Task per Member</p>
                    <div>{/* <MeatballsIcon3 /> */}</div>
                  </div>
                  <div className="m-10 mb-[-10px]">
                    <CardPerMember />
                  </div>
                </div>
              </div>
            </div>
            {/* ////// */}
            <div className="flex   flex-col gap-3">
              <div className="w-[560px] bg-white border-solid border-[1px] rounded-xl shadow-inner ">
                <div className="p-8 ">
                  <div className="flex justify-between">
                    <p className="">Task per Due Date</p>
                    <div>{/* <MeatballsIcon3 /> */}</div>
                  </div>
                  <div className="m-10 mb-[-10px]">
                    <CardPerDueDate />
                  </div>
                </div>
              </div>
              <div className="w-[560px] bg-white border-solid border-[1px] rounded-xl shadow-inner  ">
                <div className="p-8 ">
                  <div className="flex justify-between">
                    <p className="">Task per Label</p>
                    <div>{/* <MeatballsIcon3 /> */}</div>
                  </div>
                  <div className="m-10 mb-[-10px]">
                    <CardPerLabel />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
