import Navbar from "../features/board/board/Navbar";
import SideBar from "../features/board/board/Sidebar";
import Card from "../features/board/card/Card";
import { useParams } from "react-router-dom";
export default function BoardDetail() {
  const { id } = useParams();

  return (
    <>
      <Navbar boardId={id} />
      <div className="flex">
        <div className="h-[100vh]">
          <SideBar boardId={id} />
        </div>
        <div className="flex w-full bg-[#F2F3F5] h-[100vh] bg-[#] p-16 overflow-x-auto ">
          <Card boardId={id} />
        </div>
      </div>
    </>
  );
}
