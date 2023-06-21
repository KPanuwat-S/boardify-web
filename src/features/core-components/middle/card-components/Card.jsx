import TaskForm from "../task-component/TaskForm";
import AddTaskContainer from "../task-component/AddTaskContainer";
import AddCardContainer from "./AddCardContainer";
export default function Card() {
  return (
    <>
      <div className="flex gap-4">
        <div className="bg-[#F1F2F4] w-[320px] h-fit p-2">
          <div className="p-5 ">`Card Name`</div>
          <div className="">
            <TaskForm />
            <TaskForm />
            <TaskForm />
          </div>
          <AddTaskContainer />
        </div>
        <AddCardContainer />
      </div>
    </>
  );
}
