import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
  clearCard,
  getAllCardsInOneBoardAsync,
  updateCardAsync,
  updateTaskAsync,
} from "../../../features/board/card/Slice/cardSlice";
import { DragDropContext, Draggable } from "react-beautiful-dnd";
import { StrictModeDroppable } from "./StrictModeItem";
import TaskItem from "../../../components/Tasks/TaskItem";

function CardList({ boardId }) {
  const dispatch = useDispatch();

  const [cards, setCards] = useState([]);
  const [fetch, setFetch] = useState(false);

  useEffect(() => {
    dispatch(getAllCardsInOneBoardAsync(boardId));
  }, [fetch]);
  useEffect(() => {
    dispatch(getAllCardsInOneBoardAsync(boardId));
  }, []);

  const cardItems = useSelector((state) => state.card.cardItems);
  useEffect(() => {
    if (cardItems.length > 0) setCards(cardItems);
    // window.location.reload();
    // if (cardItems.length == 0) window.location.reload();
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
        dispatch(updateCardAsync({ entries, boardId })).unwrap();
        setCards(entries);
      }
      if (type === "task") {
        const taskSourceIndex = source.index;
        // console.log(taskSourceIndex);
        const taskDestinationIndex = destination.index;
        // console.log(taskDestinationIndex);
        const cardSourceIndex = cards.findIndex(
          (card) => card.cardType === source.droppableId
        );
        const cardDestinationIndex = cards.findIndex(
          (card) => card.cardType === destination.droppableId
        );
        //task source data
        const newSourceTasks = [...cards[cardSourceIndex]?.tasks];
        //task destination data
        // if (!cardSourceIndex || !cardDestinationIndex) return;
        const newDestinationTask =
          source.droppableId !== destination.droppableId
            ? [...cards[cardDestinationIndex]?.tasks]
            : newSourceTasks;
        //source task data remove
        const [removedTask] = newSourceTasks.splice(taskSourceIndex, 1);
        newDestinationTask.splice(taskDestinationIndex, 0, removedTask);
        //sort ข้อมูลทั้งหมด
        const newCard = [...cards];
        newCard[cardSourceIndex] = {
          ...cards[cardSourceIndex],
          tasks: newSourceTasks,
        };
        newCard[cardDestinationIndex] = {
          ...cards[cardDestinationIndex],
          tasks: newDestinationTask,
        };
        // console.log(newCard);
        setCards(newCard);
        dispatch(updateTaskAsync({ newCard, boardId }));
        // console.log("fetch", fetch);
        // setFetch(!fetch);
        // console.log("newCard", newCard);
        // console.log("newDestinationTask", newDestinationTask);
        // setCards(newDestinationTask);

        // console.log("newCard", newCard);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <StrictModeDroppable
        droppableId="agenda"
        // droppableId={id}
        direction={"horizontal"}
        type="card"
      >
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="flex gap-4"
          >
            {cards.map((card, idx) => (
              <Draggable
                draggableId={card?.cardType}
                key={card?.id}
                // draggableId="agenda"
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
                      boardId={boardId}
                      id={card?.id}
                      cardName={card?.name}
                      cardType={card?.cardType}
                      tasks={card?.tasks}
                      cardItem={card}
                      fetch={fetch}
                      setFetch={setFetch}
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
