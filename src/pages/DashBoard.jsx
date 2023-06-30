import CardPerList from "../components/Dashboard/CardPerList";
import CardPerDueDate from "../components/Dashboard/CardPerDueDate";
import CardPerMember from "../components/Dashboard/CardPerMember";
import CardPerLabel from "../components/Dashboard/CardPerLabel";
import Navbar from "../features/board/board/Navbar";
import SideBar from "../features/board/board/Sidebar";

export default function DashBoard() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="h-[100vh]">
          <SideBar />
        </div>
        {/* <div className="flex w-full bg-[#F2F3F5] h-[100vh] bg-[#] p-16 overflow-x-auto "> */}
        <div className="flex  w-full bg-[#F2F3F5] h-[100vh]  p-8 ">
          <div className="flex gap-4 max-h-[500px] overflow-y-auto">
            <div className="flex flex-col gap-4 bg-white border-solid border-[1px] rounded-md shadow-inner p-10">
              <p>Taskperlist</p>
              <div className="bg-white w-[450px] m-6 ">
                <CardPerList />
              </div>
              {/* <div className="bg-red-300" style={{ width: 600 }}>
              <CardPerDueDate />
            </div> */}
            </div>

            {/* <div className="flex flex-col gap-4">
            <div className="bg-yellow-100 " style={{ width: 600 }}>
              <CardPerMember />
            </div>
            <div className="bg-red-300" style={{ width: 600 }}>
              <CardPerLabel />
            </div>
          </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
