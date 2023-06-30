// import React from "react";
import AddTaskContainer from "../../features/board/task/AddTaskContainer";
import TaskRow from "../../features/board/task/TaskRow";
import { MeatballsIcon2 } from "../../icons";
import { useSelector } from "react-redux";

function CardColumn({ cardItem, fetch, setFetch }) {
  const tasks = ["name", "name2"];
  // tasks ตรงนี้ สามารถดเอา cardItem.id ไปหา task ได้

  const cards = useSelector((state) => state.card.cardItems);
  const tasksOfCards = cards.find((card) => card.id == cardItem.id).tasks;

  // cardItem = card id
  return (
    <>
      <div className=" bg-white  shadow-[0_0_4px_rgb(0_0_0_/0.2)] rounded-xl w-[320px] h-fit p-2">
        <div className="flex justify-between p-5">
          <div className="text-gray-600">{cardItem.name}</div>
          <div>
            <MeatballsIcon2 />
          </div>
        </div>
        <div>
          {tasksOfCards?.map((task) => (
            <TaskRow
              task={task}
              cardItem={cardItem}
              fetch={fetch}
              setFetch={setFetch}
            />
          ))}
        </div>
        <AddTaskContainer cardItem={cardItem} tasksOfCards={tasksOfCards} />
      </div>
    </>
  );
}

export default CardColumn;
