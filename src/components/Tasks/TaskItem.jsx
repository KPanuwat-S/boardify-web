import { Draggable, Droppable } from "react-beautiful-dnd";
// import { StrictModeDroppable as Droppable } from "../../help/StrictModeDroppable";
import AddTaskContainer from "../../features/board/task/AddTaskContainer";
import TaskRow from "../../features/board/task/TaskRow";
import { MeatballsIcon2 } from "../../icons";
import { StrictModeDroppable } from "../../features/board/card/StrictModeItem";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCardAsync,
  getAllCardsInOneBoardAsync,
  updateCardAsync,
  updateCardNameAsync,
} from "../../features/board/card/Slice/cardSlice";
import DropdownTask from "./DropDownTask";

function TaskItem({ id, cardItem, fetch, tasks, cardType, setFetch, boardId }) {
  // console.log(cardType);
  const dispatch = useDispatch();
  const fetchCards = useSelector((state) => state.card.cardItems);

  const [tasksOfCards, setTaskOfCards] = useState(
    fetchCards.find((card) => card.id == cardItem.id)?.tasks || tasks
  );

  const [isEdit, setIsEdit] = useState(false);
  const [cardName, setCardName] = useState(cardItem.name);

  useEffect(() => {
    dispatch(getAllCardsInOneBoardAsync(boardId)).unwrap();
  }, [fetch]);

  useEffect(() => {
    // setCards(fetchCards);
    setTaskOfCards(fetchCards.find((card) => card.id == cardItem.id)?.tasks);
  }, [fetchCards]);

  const subimitCardName = () => {
    const name = { name: cardName };
    const input = {
      id: cardItem.id,
      name,
    };
    console.log("input submit CardName", input);
    dispatch(updateCardNameAsync(input));
    setIsEdit(false);
  };

  const deleteCard = () => {
    dispatch(deleteCardAsync(cardItem.id));
    setFetch(!fetch);
  };
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
            {isEdit ? (
              <div className="flex gap-2">
                {" "}
                <input
                  className="px-2 outline outline-blue-600"
                  type="text"
                  value={cardName}
                  onChange={(e) => {
                    setCardName(e.target.value);
                  }}
                  onClick={(e) => {
                    setIsEdit(true);
                    e.stopPropagation();
                  }}
                />
                <div className="font-light flex flex-col gap-2">
                  <button
                    onClick={subimitCardName}
                    className="text-white text-xs bg-blue-600 w-[50px] hover:bg-blue-700 p-1 rounded-[4px]"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => {
                      setIsEdit(false);
                    }}
                    className="text-xs p-1 rounded-[4px] bg-gray-100 hover:bg-gray-200"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div
                onClick={(e) => {
                  setIsEdit(true);
                  e.stopPropagation();
                  // setTitle(.name);
                }}
                className="group flex  items-center gap-5 text-gray-600 hover:bg-gray-100 p-2 rounded-[4px]"
              >
                <p>{cardName}</p>

                <i class="fa-regular fa-pen-to-square text-white group-hover:text-gray-400"></i>
              </div>
            )}
            <div
              className="p-1 rounded-[4px] hover:bg-gray-100 group "
              onClick={deleteCard}
            >
              <i class="fa-regular fa-trash-can text-gray-100 group-hover:text-gray-400 p-2 rounded-[4px]"></i>
            </div>
          </div>
          {tasksOfCards?.map((task, idx) => (
            <Draggable
              key={task?.taskId}
              draggableId={task?.taskType}
              // draggableId={uuidv4()}
              index={idx}
            >
              {(provided) => (
                <div
                  className="w-full p-2 bg-white/90 rounded-lg mb-2 flex flex-col space-y-2"
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
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
