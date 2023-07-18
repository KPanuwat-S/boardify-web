// import { useDispatch } from "react-redux";
import CardPerList from "../components/Dashboard/CardPerList";
import CardPerDueDate from "../components/Dashboard/CardPerDueDate";
import CardPerMember from "../components/Dashboard/CardPerMember";
import CardPerLabel from "../components/Dashboard/CardPerLabel";
import Navbar from "../features/board/board/Navbar";
import SideBar from "../features/board/board/Sidebar";
// import { getAllCardsInOneBoardAsync } from "../features/board/card/Slice/cardSlice";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneBoardAsync } from "../features/board/board/Slice/boardSlice";

export default function Dashboard() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOneBoardAsync(id));
  }, []);
  const board = useSelector((state) => state.board.board);
  return (
    <>
      <div>
        <Navbar boardId={id} board={board} />
      </div>
      <div className="flex">
        <div className="h-[100vh]">
          <SideBar boardId={id} />
        </div>
        {/* ///// */}
        <div className="m-9  max-h-[450px]  ">
          <div className="  bg-[#f5f5f5] flex gap-3  rounded-lg overflow-y-auto overflow-x-hidden ">
            <div className="flex  flex-col gap-3">
              <div className="w-[560px] bg-white border-solid border-[1px] rounded-xl shadow-inner  ">
                <div className="p-8 ">
                  <div className="flex justify-between">
                    <p className="">Task per list</p>
                    <div>
                      <i class="fa-solid fa-ellipsis"></i>
                    </div>
                  </div>
                  <div className=" mb-[-10px]">
                    <CardPerList />
                  </div>
                </div>
              </div>
              <div className="w-[560px] bg-white border-solid border-[1px] rounded-xl shadow-inner  ">
                <div className="p-8 ">
                  <div className="flex justify-between">
                    <p className="">Task per member</p>
                    <div>
                      <i class="fa-solid fa-ellipsis"></i>
                    </div>
                  </div>
                  <div className="mb-[-10px]">
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
                      <i class="fa-solid fa-ellipsis"></i>
                    </div>
                  </div>
                  <div className=" mb-[-10px]">
                    <CardPerDueDate />
                  </div>
                </div>
              </div>
              <div className="w-[560px] bg-white border-solid border-[1px] rounded-xl shadow-inner  ">
                <div className="p-8 ">
                  <div className="flex justify-between">
                    <p className="">Task per label</p>
                    <div>
                      <i class="fa-solid fa-ellipsis"></i>
                    </div>
                  </div>
                  <div className=" mb-[-10px]">
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
