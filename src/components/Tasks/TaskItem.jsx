import { Draggable, Droppable } from "react-beautiful-dnd";
// import { StrictModeDroppable as Droppable } from "../../help/StrictModeDroppable";
import AddTaskContainer from "../../features/board/task/AddTaskContainer";
import TaskRow from "../../features/board/task/TaskRow";
import { MeatballsIcon2 } from "../../icons";
import { StrictModeDroppable } from "../../features/board/card/StrictModeItem";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCardsInOneBoardAsync } from "../../features/board/card/Slice/cardSlice";

function TaskItem({ id, cardItem, fetch, tasks, cardType, setFetch, boardId }) {
  // console.log(cardType);
  const dispatch = useDispatch();
  const fetchCards = useSelector((state) => state.card.cardItems);

  const [tasksOfCards, setTaskOfCards] = useState(
    fetchCards.find((card) => card.id == cardItem.id)?.tasks || tasks
  );
  console.log("task prop", tasks);

  console.log("cardItem in task item", cardItem);
  useEffect(() => {
    dispatch(getAllCardsInOneBoardAsync(boardId)).unwrap();
  }, [fetch]);
  useEffect(() => {
    // setCards(fetchCards);
    setTaskOfCards(fetchCards.find((card) => card.id == cardItem.id)?.tasks);
  }, [fetchCards]);
  return (
    <StrictModeDroppable droppableId={cardType} key={id} type="task">
      {(provided, snapshot) => (
        <div
          className={`bg-white  shadow-[0_0_4px_rgb(0_0_0_/0.2)] rounded-xl w-[320px] h-fit p-2 ${
            snapshot.isDraggingOver && "bg-gray-300"
          } `}
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          <div className="flex justify-between p-5">
            <div className="text-gray-600">{cardItem.name}</div>
            <div>
              <MeatballsIcon2 />
            </div>
          </div>
          {tasksOfCards?.map((task, idx) => (
            <Draggable
              key={task?.taskId}
              draggableId={task?.taskId + ""}
              // draggableId={uuidv4()}
              index={idx}
            >
              {(provided, snapshot) => (
                <div
                  className={`w-full p-2 bg-white/90 rounded-lg mb-2 flex flex-col space-y-2 ${
                    snapshot.isDragging && "bg-gray-400/10 "
                  } `}
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  {/* <TaskRow name={task?.taskName} /> */}
                  <TaskRow
                    task={task}
                    cardItem={cardItem}
                    fetch={fetch}
                    setFetch={setFetch}
                  />
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}

          <AddTaskContainer
            cardItem={cardItem}
            tasksOfCards={tasksOfCards}
            setFetch={setFetch}
            fetch={fetch}
          />
        </div>
      )}
    </StrictModeDroppable>
  );
}

export default TaskItem;
