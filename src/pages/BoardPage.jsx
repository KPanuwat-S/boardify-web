import Navbar from "../features/core-components/head/Navbar";
import SideBar from "../features/core-components/side/member-component/SideBar";
// import AddCardContainer from "../features/core-components/middle/task-component/AddTaskContainer";
import Card from "../features/core-components/middle/card-components/Card";
export default function BoardPage() {
  return (
    <>
      {/* LOGO */}
      <div className=" flex bg-[#072363] gap-5 justify-between px-10 py-4 ">
        <div className="gap-3 flex cursor-pointer">
          <img
            className="w-[60px]"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Antu_trello.svg/256px-Antu_trello.svg.png"
          />
          <div className="text-[40px] text-white tracking-wide ">Boardify</div>
        </div>
        <div>
          {/* <div className=" rounded-sm text-xl  hover:bg-[#7b8387] flex justify-end items-end bg-teal-300 w-fit">
            `BOARD NAME `
          </div> */}
        </div>
        <div className="bg-[#072363] flex justify-end items-end text-white">
          <Navbar />
        </div>
      </div>

      <div className="flex">
        <div className="w-[20%]  h-screen bg-[#123da0] text-white">
          <SideBar />
        </div>
        <div className="bg-[#f9fafc] w-[80%] p-16 overflow-x-auto ">
          <Card />
        </div>
      </div>
    </>
  );
}
