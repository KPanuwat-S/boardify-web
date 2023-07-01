import { Draggable, Droppable } from "react-beautiful-dnd";
// import { StrictModeDroppable as Droppable } from "../../help/StrictModeDroppable";
import AddTaskContainer from "../../features/board/task/AddTaskContainer";
import TaskRow from "../../features/board/task/TaskRow";
import { MeatballsIcon2 } from "../../icons";
import { StrictModeDroppable } from "../../features/board/card/StrictModeItem";

function TaskItem({ id, cardName, tasks, cardType }) {
  // console.log(cardType);
  return (
    <StrictModeDroppable droppableId={cardType} key={id} type="task">
      {(provided, snapshot) => (
        <div
          className={`bg-white  shadow-[0_0_4px_rgb(0_0_0_/0.2)] rounded-xl w-[320px] h-fit p-2 ${
            snapshot.isDraggingOver && "bg-slate-100"
          } `}
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          <div className="flex justify-between p-5">
            <div className="text-gray-600">{cardName}</div>
            <div>
              <MeatballsIcon2 />
            </div>
          </div>

          {tasks.map((task, idx) => (
            <Draggable
              key={task?.taskId}
              draggableId={task?.taskType}
              index={idx}
            >
              {(provided) => (
                <div
                  className="w-full p-2 bg-white/90 rounded-lg mb-2 flex flex-col space-y-2"
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  <TaskRow name={task?.taskName} />
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}

          <AddTaskContainer />
        </div>
      )}
    </StrictModeDroppable>
  );
}

export default TaskItem;
