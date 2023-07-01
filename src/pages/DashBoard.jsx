import { useDispatch } from "react-redux";
import CardPerList from "../components/Dashboard/CardPerList";
import CardPerDueDate from "../components/Dashboard/CardPerDueDate";
import CardPerMember from "../components/Dashboard/CardPerMember";
import CardPerLabel from "../components/Dashboard/CardPerLabel";
import Navbar from "../features/board/board/Navbar";
import SideBar from "../features/board/board/Sidebar";
import { useEffect, useState } from "react";
import { getAllCardsInOneBoardAsync } from "../features/board/card/Slice/cardSlice";
import { MeatballsIcon3 } from "../icons";

export default function DashBoard() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getAllCardsInOneBoardAsync());
  // }, []);

  return (
    <>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn m-1">
          Click
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div>
    </>
  );
}
