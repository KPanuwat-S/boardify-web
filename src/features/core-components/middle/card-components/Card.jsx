import TaskRow from "../task-component/TaskRow";
import AddTaskContainer from "../task-component/AddTaskContainer";
import AddCardContainer from "./AddCardContainer";
import { MeatballsIcon2 } from "../../../../icons";
export default function Card() {
  return (
    <>
      <div className="flex gap-4">
        <div className="bg-[#F1F2F4] w-[320px] h-fit p-2">
          <div className="flex justify-between p-5 ">
            <div>`Card Name`</div>
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
        <AddCardContainer />
      </div>
    </>
  );
}
