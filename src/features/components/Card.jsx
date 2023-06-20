import { AddIcon } from "../../icons";
import { TaskForm } from "../components/TaskForm";
export default function Card() {
  return (
    <>
      <div>
        <div className="w-[300px] h-fit bg-slate-400 overflow-y-auto">
          {/* CARD NAME */}
          <div className="p-5">`Card Name`</div>
          {/* TASK */}
          <TaskForm />
          {/* ADD CARD */}
          <div className="flex items-center mx-3 gap-5">
            <AddIcon />
            <div className="p-5">Add card</div>
          </div>
        </div>
      </div>
    </>
  );
}
