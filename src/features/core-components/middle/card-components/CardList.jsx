// import { useState, useEffect } from "react";
import { MeatballsIcon2 } from "../../../../icons";
import AddTaskContainer from "../task-component/AddTaskContainer";
import TaskRow from "../task-component/TaskRow";

export default function CardList() {
  // const [card, setCard] = useState({ name: "" }); // Initialize card state with an empty object

  // useEffect(() => {
  //   // Assuming rs.data is an object with the card name
  //   const rs = { data: { name: "Card Name" } }; // Replace this with the actual data

  //   setCard(rs.data);
  // }, []);

  return (
    <div className="flex gap-4">
      <div className="bg-[#F1F2F4] w-[320px] h-fit p-2">
        <div className="flex justify-between p-5 ">
          <div>Card Name</div>
          {/* <div>Card Name: {card.name}</div> */}
          <div>
            <MeatballsIcon2 />
          </div>
        </div>
        <div>
          <TaskRow />
          <TaskRow />
          <TaskRow />
        </div>
        <AddTaskContainer />
      </div>
    </div>
  );
}
