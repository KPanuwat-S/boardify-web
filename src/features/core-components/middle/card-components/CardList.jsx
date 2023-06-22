import { useSelector } from "react-redux";
import TodoItem from "../../../../components/Todoitem";
// import { useState } from "react";
// import { useEffect } from "react";
// import { MeatballsIcon2 } from "../../../../icons";
// import AddTaskContainer from "../task-component/AddTaskContainer";
// import TaskRow from "../task-component/TaskRow";

function CardList() {
  const todoList = useSelector((state) => state.todo.todoList);
  console.log(todoList);

  const sortedTodoList = [...todoList];
  sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time));
  // const [cards, setCards] = useState([]);

  // useEffect(() => {
  //   // Fetch initial cards from an API or set them manually
  //   const initialCards = [
  //     { id: 1, name: "Card Name 1" },
  //     { id: 2, name: "Card Name 2" },
  //     { id: 3, name: "Card Name 3" },
  //   ];

  //   setCards(initialCards);
  // }, []);

  // const createCard = (cardName) => {
  //   const newCard = {
  //     id: cards.length + 1, // Generate a unique ID for the new card
  //     name: cardName,
  //   };

  //   setCards([...cards, newCard]); // Add the new card to the existing cards array
  // };

  return (
    <>
      <div className="flex flex-row-reverse gap-3">
        {sortedTodoList && sortedTodoList.length > 0
          ? sortedTodoList.map((todo) => <TodoItem key={todo.id} todo={todo} />)
          : "no todo found"}
      </div>
    </>
  );
}
export default CardList;
// import { useState, useEffect } from "react";
// import { MeatballsIcon2 } from "../../../../icons";
// import AddTaskContainer from "../task-component/AddTaskContainer";
// import TaskRow from "../task-component/TaskRow";

// export default function CardList() {
//   const [card, setCard] = useState([]); // Initialize card state with an empty object

//   useEffect(() => {
//     // Assuming rs.data is an object with the card name
//     const rs = { data: { name: "Card Name" } }; // Replace this with the actual data

//     setCard(rs.data);
//   }, []);

//   return (
//     <div className="flex gap-4">
//       <div className="bg-[#F1F2F4] w-[320px] h-fit p-2">
//         <div className="flex justify-between p-5 ">
//           {card.map((card, index) => (
//             <div>Card Name: {card.name}</div>
//           ))}
//           {/* <div>Card Name: {card.name}</div> */}
//           <div>
//             <MeatballsIcon2 />
//           </div>
//         </div>
//         <div>
//           <TaskRow />
//           <TaskRow />
//           <TaskRow />
//         </div>
//         <AddTaskContainer />
//       </div>
//     </div>
//   );
// }
