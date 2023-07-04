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
import { v4 as uuidv4 } from "uuid";

function CardList({ boardId, fetch, setFetch }) {
  const cardItems = useSelector((state) => state.card.cardItems);
  const dispatch = useDispatch();
  const [cards, setCards] = useState([]);
  // const [fetch, setFetch] = useState(false);

  useEffect(() => {
    dispatch(getAllCardsInOneBoardAsync(boardId));
    console.log("cardlist fn running");
  }, [fetch]);

  useEffect(() => {
    if (cardItems.length > 0) setCards(cardItems);
  }, [cardItems]);
  // const MockCards = [
  //   {
  //     id: 5,
  //     name: "card05",
  //     position: 1,
  //     cardType: "card-05",
  //     tasks: [
  //       {
  //         taskId: 10,
  //         taskName: "task5",
  //         taskDescription: "task5",
  //         taskPosition: 1,
  //         labelColor: "green",
  //         labelDescription: "S",
  //         taskType: "task-10",
  //         checkListsTotal: 0,
  //         checkListsChecked: 0,
  //         dueDate: "2023-07-31T17:00:00.000Z",
  //         members: [],
  //         numberOfFilesAttached: null,
  //       },
  //     ],
  //   },
  //   {
  //     id: 6,
  //     name: "card06",
  //     position: 2,
  //     cardType: "card-06",
  //     tasks: [
  //       {
  //         taskId: 11,
  //         taskName: "task6",
  //         taskDescription: "task6",
  //         taskPosition: 1,
  //         labelColor: "green",
  //         labelDescription: "S",
  //         taskType: "task-11",
  //         checkListsTotal: 0,
  //         checkListsChecked: 0,
  //         dueDate: null,
  //         members: [],
  //         numberOfFilesAttached: null,
  //       },
  //     ],
  //   },
  // ];

  const onDragEnd = async (result) => {
    console.log("result from drag end", result);
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
        // dispatch(updateCardAsync({ entries, boardId })).unwrap();
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
        // dispatch(updateTaskAsync({ newCard, boardId })).unwrap();
        console.log("newCard", newCard);
        console.log("newDestinationTask", newDestinationTask);
        // setCards(newDestinationTask);

        setCards(newCard);
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log("---cards", cards);

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
                // key={card?.cardId}
                draggableId={card?.cardType}
                // draggableId={card?.cardType}
                key={card?.id}
                // draggableId={uuidv4()}
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
                      id={card?.cardId}
                      // cardName={card?.cardName}
                      cardItem={card}
                      tasks={card?.tasks}
                      cardType={card?.cardType}
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
// ======= Develop2.0
//   // console.log("cardItems", cardItems);

//   // const [cards, setCards] = useState(cardItems);

//   useEffect(() => {
//     dispatch(getAllCardsInOneBoardAsync(boardId)).unwrap();
//     // setCards(cardItems);
//     // if (cardItems !== null) setCards(cardItems);
//   }, [fetch]);

//   // useEffect(() => {
//   //   if (cardItems !== null) setCards(cardItems);
//   // }, [cardItems]);
//   return (
//     <>
//       <div className="flex flex-row-reverse gap-3 ">
//         {cardItems && cardItems.length > 0
//           ? cardItems.map((cardItem, index) => (
//               <CardColumn
//                 boardId={boardId}
//                 key={index}
//                 cardItem={cardItem}
//                 fetch={fetch}
//                 setFetch={setFetch}
//               />
//             ))
//           : "no todo found"}
//       </div>
//     </>
// >>>>>>> origin/develop2.0
//   );
// }

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
