import { useEffect, useState } from "react";
import { DragDropContext, Draggable } from "react-beautiful-dnd";
import { StrictModeDroppable } from "../../board/card/StrictModeItem";
import { getAllCardsInOneBoardAsync } from "./Slice/cardSlice";
import { useDispatch, useSelector } from "react-redux";
import { getAllCards } from "../../../api/cardApi";

const CardTest = ({ boardId }) => {
  const dispatch = useDispatch();
  const [state, setState] = useState([]);
  const cardItems = useSelector((state) => state.card.cardItems);

  const onDragEnd = (result) => {
    const { destination, source, type } = result;
    // console.log(result, " result");

    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    if (type === "column") {
      const entries = Array.from(state);

      const [removed] = entries.splice(source.index, 1);
      entries.splice(destination.index, 0, removed);
      setState(entries);
    }

    if (type === "card") {
      const updatedState = [...state]; // Create a new array copy

      const startListIndex = updatedState.findIndex(
        (list) => list.cardId === source.droppableId
      );
      const finishListIndex = updatedState.findIndex(
        (list) => list.cardId === destination.droppableId
      );

      if (startListIndex === -1 || finishListIndex === -1) return;

      const start = [...updatedState[startListIndex].tasks]; // Create a new array copy
      const finish = [...updatedState[finishListIndex].tasks]; // Create a new array copy

      const [removed] = start.splice(source.index, 1);
      finish.splice(destination.index, 0, removed);

      updatedState[startListIndex] = {
        ...updatedState[startListIndex],
        tasks: start,
      };
      updatedState[finishListIndex] = {
        ...updatedState[finishListIndex],
        tasks: finish,
      };

      setState(updatedState);
    }
  };

  useEffect(() => {
    if (cardItems) setState(cardItems);
  }, [cardItems]);

  useEffect(() => {
    dispatch(getAllCardsInOneBoardAsync(boardId));
  }, []);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <StrictModeDroppable
        droppableId="agenda"
        direction="horizontal"
        type="column"
      >
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="container grid grid-cols-1 md:grid-cols-3 gap-4 place-items-start"
          >
            {state.length > 0 &&
              state.map((list, idx) => (
                <Draggable
                  key={list.cardId}
                  draggableId={list.cardId}
                  index={idx}
                >
                  {(provided) => (
                    <div
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                      className="w-full flex flex-col space-y-3"
                    >
                      <StrictModeDroppable
                        droppableId={list.cardId}
                        key={list.cardId}
                        type="card"
                      >
                        {(provided, snapshot) => (
                          <div
                            className={`w-full p-2 bg-white/30 rounded-xl ${
                              snapshot.isDraggingOver && "bg-lime-200"
                            } `}
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                          >
                            <div className="flex items-center justify-between p-2 ">
                              <h1 className="text-xl font-bold">
                                {list.cardName}
                              </h1>
                              <div className="bg-gray-200 rounded">
                                {list.tasks.length}
                              </div>
                            </div>
                            {list.tasks.map((card, index) => (
                              <Draggable
                                key={card.taskId}
                                draggableId={card.taskId}
                                index={index}
                              >
                                {(provided) => (
                                  <div
                                    className="w-full p-2 bg-white/90 rounded-lg mb-2 flex flex-col space-y-2"
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                  >
                                    <div className="flex items-center justify-between">
                                      <h1 className="text-xs font-bold">
                                        {card.taskName}
                                      </h1>
                                      <button type="button">-</button>
                                    </div>
                                  </div>
                                )}
                              </Draggable>
                            ))}
                            {provided.placeholder}
                          </div>
                        )}
                      </StrictModeDroppable>
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
};

export default CardTest;
