import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
  getAllCardsInOneBoardAsync,
  updateCardAsync,
  updateTaskAsync,
} from "../../../features/board/card/Slice/cardSlice";
import { DragDropContext, Draggable } from "react-beautiful-dnd";
import { StrictModeDroppable } from "./StrictModeItem";
import TaskItem from "../../../components/Tasks/TaskItem";

function CardList({ boardId, fetch, setFetch }) {
  const cardItems = useSelector((state) => state.card.cardItems);
  const dispatch = useDispatch();
  const [cards, setCards] = useState([]);
  useEffect(() => {
    dispatch(getAllCardsInOneBoardAsync(boardId)).unwrap();
  }, [fetch]);

  useEffect(() => {
    if (cardItems.length > 0) setCards(cardItems);
  }, [cardItems]);

  const onDragEnd = async (result) => {
    const { destination, source, type } = result;
    try {
      if (!destination) return;
      if (
        destination.droppableId === source.droppableId &&
        destination.index === source.index
      )
        return;

      if (type === "card") {
        const entries = [...cards];
        const [removed] = entries.splice(source.index, 1);
        entries.splice(destination.index, 0, removed);
        dispatch(updateCardAsync({ entries, boardId }));
        setCards(entries);
      }
      if (type === "task") {
        const taskSourceIndex = source.index;
        const taskDestinationIndex = destination.index;
        const cardSourceIndex = cards.findIndex(
          (card) => card.cardType === source.droppableId
        );
        const cardDestinationIndex = cards.findIndex(
          (card) => card.cardType === destination.droppableId
        );
        const newSourceTasks = [...cards[cardSourceIndex]?.tasks];

        const newDestinationTask =
          source.droppableId !== destination.droppableId
            ? [...cards[cardDestinationIndex]?.tasks]
            : newSourceTasks;
        const [removedTask] = newSourceTasks.splice(taskSourceIndex, 1);
        newDestinationTask.splice(taskDestinationIndex, 0, removedTask);
        const newCard = [...cards];
        newCard[cardSourceIndex] = {
          ...cards[cardSourceIndex],
          tasks: newSourceTasks,
        };
        newCard[cardDestinationIndex] = {
          ...cards[cardDestinationIndex],
          tasks: newDestinationTask,
        };
        dispatch(updateTaskAsync({ newCard, boardId }));
        setCards(newCard);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <StrictModeDroppable
        droppableId="agenda"
        direction={"horizontal"}
        type="card"
      >
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className={`flex gap-4  ${snapshot.isDraggingOver && " "} `}
          >
            {cards.map((card, idx) => (
              <Draggable
                key={card?.cardId}
                draggableId={card?.cardType}
                index={idx}
              >
                {(provided) => (
                  <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    className="flex flex-row-reverse gap-3 "
                  >
                    <TaskItem
                      id={card?.cardId}
                      cardName={card?.cardName}
                      tasks={card?.tasks}
                      cardType={card?.cardType}
                    />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </StrictModeDroppable>
    </DragDropContext>
  );
}

export default CardList;

// {/* <div className="flex flex-row-reverse gap-3 ">
// {/* {sortedTodoList && sortedTodoList.length > 0
//   ? sortedTodoList.map((todo) => <TaskItem key={todo.id} todo={todo} />)
//   : "no todo found"} */}
// <TaskItem />
// </div> */}
//logic
// const taskItem = useSelector((state) => state.card.cardItems);
// console.log(taskItem);

// const sortedTodoList = [...taskItem];
// sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time));
{
  /* <div className="flex flex-row gap-5">
<TaskItem />
</div> */
}
// const newDestinationTask =
//   source.droppableId !== destination.droppableId
//     ? [...cards[cardDestinationIndex]?.tasks]
//     : newSourceTasks;
// //source task data remove
// const [removedTask] = newSourceTasks.splice(taskSourceIndex, 1);
// newDestinationTask.splice(taskDestinationIndex, 0, removedTask);
// //sort ข้อมูลทั้งหมด
// const newCard = [...cards];
// newCard[cardSourceIndex] = {
//   ...cards[cardSourceIndex],
//   tasks: newSourceTasks,
// };
// newCard[cardDestinationIndex] = {
//   ...cards[cardDestinationIndex],
//   tasks: newDestinationTask,
// };
// setCards(newCard);
