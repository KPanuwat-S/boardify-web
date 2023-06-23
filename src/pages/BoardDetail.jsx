import Navbar from "../features/board/board/Navbar";
import SideBar from "../features/board/board/Sidebar";
import Card from "../features/board/card/Card";
export default function BoardDetail() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="h-[100vh]">
          <SideBar />
        </div>
        <div className="flex w-full bg-[#F2F3F5] h-[100vh] bg-[#] p-16 overflow-x-auto ">
          <Card />
        </div>
      </div>
    </>
  );
}
