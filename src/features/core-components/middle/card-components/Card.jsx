// import TaskRow from "../task-component/TaskRow";
// import AddTaskContainer from "../task-component/AddTaskContainer";
import AddCardContainer from "./AddCardContainer";
// import { MeatballsIcon2 } from "../../../../icons";
import CardList from "./CardList";
export default function Card() {
  return (
    <>
      <div className="flex gap-3 font-semibold text-blue-950">
        <div>
          <CardList />
        </div>
        <div>
          <AddCardContainer />
        </div>
      </div>
    </>
  );
}
