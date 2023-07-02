import { useEffect } from "react";
import Navbar from "../features/board/board/Navbar";
import SideBar from "../features/board/board/Sidebar";
import Card from "../features/board/card/Card";
import { useParams } from "react-router-dom";
import CardTest from "../features/board/card/CardTest";
// const initialList = [

//   {
//     id: "21321321313131",
//     title: "List 1",
//     cards: [
//       { id: "124", text: "Card 1" },
//       { id: "4213", text: "Card 2" },
//     ],
//   },
//   {
//     id: "213123213",
//     title: "List 2",
//     cards: [{ id: "124214", text: "Card 3" }],
//   },
//   {
//     id: "123123213123213",
//     title: "List 3",
//     cards: [{ id: "124124", text: "Card 4" }],
//   },
// ];
export default function BoardDetail() {
  const id = useParams();
  return (
    <>
      <Navbar boardId={id} />
      <div className="flex">
        <div className="h-[100vh]">
          <SideBar boardId={id} />
        </div>
        <div className="flex w-full bg-[#F2F3F5] h-[100vh] bg-[#] p-16 overflow-x-auto ">
          <Card boardId={id} />
          {/* <CardTest boardId={id} /> */}
        </div>
      </div>
    </>
  );
}
