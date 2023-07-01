// import { useDispatch } from "react-redux";
import CardPerList from "../components/Dashboard/CardPerList";
import CardPerDueDate from "../components/Dashboard/CardPerDueDate";
import CardPerMember from "../components/Dashboard/CardPerMember";
import CardPerLabel from "../components/Dashboard/CardPerLabel";
import Navbar from "../features/board/board/Navbar";
import SideBar from "../features/board/board/Sidebar";
// import { getAllCardsInOneBoardAsync } from "../features/board/card/Slice/cardSlice";
import { MeatballsIcon3 } from "../icons";

export default function DashBoard() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="flex">
        <div className="h-[100vh] bg-black">
          <SideBar />
        </div>
        {/* ///// */}
        <div className="m-9  max-h-[450px]  ">
          <div className=" p-8 bg-[#f5f5f5] flex gap-3 max-h-[480px] rounded-lg overflow-y-auto overflow-x-hidden ">
            <div className="flex  flex-col gap-3">
              <div className="w-[560px] bg-white border-solid border-[1px] rounded-xl shadow-inner  ">
                <div className="p-8 ">
                  <div className="flex justify-between">
                    <p className="">Task per list</p>
                    <div>
                      <MeatballsIcon3 />
                    </div>
                  </div>
                  <div className="m-10 mb-[-10px]">
                    <CardPerList />
                  </div>
                </div>
              </div>
              <div className="w-[560px] bg-white border-solid border-[1px] rounded-xl shadow-inner  ">
                <div className="p-8 ">
                  <div className="flex justify-between">
                    <p className="">Task per member</p>
                    <div>
                      <MeatballsIcon3 />
                    </div>
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
                    <p className="">Task per due date</p>
                    <div>
                      <MeatballsIcon3 />
                    </div>
                  </div>
                  <div className="m-10 mb-[-10px]">
                    <CardPerDueDate />
                  </div>
                </div>
              </div>
              <div className="w-[560px] bg-white border-solid border-[1px] rounded-xl shadow-inner  ">
                <div className="p-8 ">
                  <div className="flex justify-between">
                    <p className="">Task per label</p>
                    <div>
                      <MeatballsIcon3 />
                    </div>
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
