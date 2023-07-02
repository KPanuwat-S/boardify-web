// import React from "react";
import { useEffect, useState } from "react";
import AddTaskContainer from "../../features/board/task/AddTaskContainer";
import TaskRow from "../../features/board/task/TaskRow";
import { MeatballsIcon2 } from "../../icons";
import { useDispatch, useSelector } from "react-redux";
import { getAllCardsInOneBoardAsync } from "../../features/board/card/Slice/cardSlice";

function CardColumn({ cardItem, fetch, setFetch, boardId }) {
  const dispatch = useDispatch();

  const [cards, setCards] = useState(
    useSelector((state) => state.card.cardItems)
  );

  const fetchCards = useSelector((state) => state.card.cardItems);
  // let tasksOfCards = cards.find((card) => card.id == cardItem.id).tasks;

  const [tasksOfCards, setTaskOfCards] = useState(
    fetchCards.find((card) => card.id == cardItem.id).tasks
  );

  useEffect(() => {
    dispatch(getAllCardsInOneBoardAsync(boardId)).unwrap();
  }, [fetch]);

  useEffect(() => {
    // setCards(fetchCards);
    setTaskOfCards(fetchCards.find((card) => card.id == cardItem.id).tasks);
  }, [fetchCards]);

  useEffect(() => {
    setCards(fetchCards);
  }, [fetchCards]);
  // setTaskOfCards(cards.find((card) => card.id == cardItem.id).tasks);
  // cardItem = card id
  // console.log("fetchcards", fetchCards);
  // console.log("cards", cards);
  // console.log("taskofcards", tasksOfCards);
  return (
    <>
      <div className=" bg-white  shadow-[0_0_4px_rgb(0_0_0_/0.2)] rounded-xl w-[320px] h-fit p-2">
        <div className="flex justify-between p-5">
          <div className="text-gray-600">{cardItem.name}</div>
          <div>
            <MeatballsIcon2 />
          </div>
        </div>
        <div>
          {/* {tasksOfCards?.map((task) => (
            <TaskRow
              task={task}
              cardItem={cardItem}
              fetch={fetch}
              setFetch={setFetch}
            />
          ))} */}
          {tasksOfCards?.map((task) => {
            // console.log("task in ui", task);
            return (
              <TaskRow
                task={task}
                // cardItem={cardItem}
                cardItem={cardItem}
                fetch={fetch}
                setFetch={setFetch}
              />
            );
          })}
        </div>
        <AddTaskContainer
          fetch={fetch}
          setFetch={setFetch}
          cardItem={cardItem}
          // cardItem={fetchCards}
          tasksOfCards={tasksOfCards}
        />
      </div>
    </>
  );
}

export default CardColumn;
