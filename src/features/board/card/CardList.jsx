import { useSelector } from "react-redux";
import TaskItem from "../../../components/Tasks/TaskItem";

function CardList() {
  const taskItem = useSelector((state) => state.card.cardItems);
  console.log(taskItem);

  const sortedTodoList = [...taskItem];
  sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time));

  return (
    <>
      <div className="flex flex-row-reverse gap-3 ">
        {sortedTodoList && sortedTodoList.length > 0
          ? sortedTodoList.map((todo) => <TaskItem key={todo.id} todo={todo} />)
          : "no todo found"}
      </div>
    </>
  );
}
export default CardList;
