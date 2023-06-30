import { useSelector } from "react-redux";
import CardColumn from "../../../components/Tasks/CardColumn";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllCardsInOneBoardAsync } from "../../../features/board/card/Slice/cardSlice";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

import { useState } from "react";
import { StrictModeDroppable } from "./StrictModeItem";

function CardList() {
  const [cards, setCards] = useState(initialList);
  const onDragEnd = (result) => {
    const { destination, source, type } = result;

    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    if (type === "column") {
      const entries = [...cards];
      const [removed] = entries.splice(source.index, 1);
      entries.splice(destination.index, 0, removed);
      setCards(entries);
    }
    if (type === "card") {
      const start = cards.find((list) => list.id === source.droppableId)?.cards;
      const finish = cards.find(
        (list) => list.id === destination.droppableId
      )?.cards;

      if (!start || !finish) return;

      const [removed] = start.splice(source.index, 1);
      finish.splice(destination.index, 0, removed);
      setCards(cards);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <StrictModeDroppable
        droppableId="agenda"
        direction={"horizontal"}
        type="column"
      >
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="flex gap-4"
          >
            {cards.map((list, idx) => (
              <Draggable key={list.id} draggableId={list.id} index={idx}>
                {(provided) => (
                  <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    className="flex flex-row-reverse gap-3 "
                  >
                    <TaskItem
                      id={list.id}
                      title={list.title}
                      cards={list.cards}
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
