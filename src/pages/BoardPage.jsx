import Navbar from "../features/components/Navbar";
import SideBar from "../features/components/SideBar";
import Card from "../features/components/Card";
export default function BoardPage() {
  return (
    <>
      {/* <div className="bg-red-300 flex justify-end"> */}
      <div className="w-screen">
        <div className="bg-[#646B6E] flex justify-end text-white">
          <Navbar />
        </div>

        <div className="flex">
          <div className="w-[20%]  h-screen bg-[#6E757A] text-white">
            <SideBar />
          </div>
          <div className="bg-[#838C91] w-[80%] p-16 overflow-x-auto ">
            <Card />
          </div>
        </div>
      </div>
    </>
  );
}
