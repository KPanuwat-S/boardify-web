import { Draggable, Droppable } from "react-beautiful-dnd";
// import { StrictModeDroppable as Droppable } from "../../help/StrictModeDroppable";
import AddTaskContainer from "../../features/board/task/AddTaskContainer";
import TaskRow from "../../features/board/task/TaskRow";
import { MeatballsIcon2 } from "../../icons";
import { StrictModeDroppable } from "../../features/board/card/StrictModeItem";

function TaskItem({ id, title, cards }) {
  // console.log(task, name, id, position, index);

  return (
    <div className="bg-white  shadow-[0_0_4px_rgb(0_0_0_/0.2)] rounded-xl w-[320px] h-fit p-2">
      <div className="flex justify-between p-5">
        <div className="text-gray-600">{title}</div>
        <div>
          <MeatballsIcon2 />
        </div>
      </div>
      <StrictModeDroppable droppableId={id} key={id} type="card">
        {(provided, snapshot) => (
          <div
            className={` ${snapshot.isDraggingOver && "bg-lime-200"} `}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {cards.map((task, idx) => (
              <Draggable key={task.id} draggableId={task.id} index={idx}>
                {(provided) => (
                  <div
                    className="w-full p-2 bg-white/90 rounded-lg mb-2 flex flex-col space-y-2"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <TaskRow text={task.text} />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
            <AddTaskContainer />
          </div>
        )}
      </StrictModeDroppable>
    </div>
  );
}

export default TaskItem;
