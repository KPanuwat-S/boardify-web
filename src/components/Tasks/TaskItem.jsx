import { Draggable, Droppable } from "react-beautiful-dnd";
// import { StrictModeDroppable as Droppable } from "../../help/StrictModeDroppable";
import AddTaskContainer from "../../features/board/task/AddTaskContainer";
import TaskRow from "../../features/board/task/TaskRow";

import { StrictModeDroppable } from "../../features/board/card/StrictModeItem";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCard,
  deleteCardAsync,
  getAllCardsInOneBoardAsync,
  updateCardNameAsync,
} from "../../features/board/card/Slice/cardSlice";
import Modal from "../Modal";
import Loading from "../Loading";

function TaskItem({
  id,
  cardItem,
  fetch,
  tasks,
  cardType,
  setFetch,
  boardId,
  // cardName,
}) {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const fetchCards = useSelector((state) => state.card.cardItems);

  const [tasksOfCards, setTaskOfCards] = useState(tasks);

  const [isEdit, setIsEdit] = useState(false);
  const [cardName, setCardName] = useState(cardItem.name);
  const [openDeleteCard, setOpenDeleteCard] = useState(false);

  useEffect(() => {
    dispatch(getAllCardsInOneBoardAsync(boardId));
  }, [fetch]);

  useEffect(() => {
    dispatch(clearCard());
    dispatch(getAllCardsInOneBoardAsync(boardId));
  }, []);
  useEffect(() => {
    setTaskOfCards(fetchCards.find((card) => card.id == cardItem.id)?.tasks);
  }, [fetchCards]);

  const subimitCardName = () => {
    const name = { name: cardName };
    const input = {
      id: cardItem.id,
      name,
    };

    dispatch(updateCardNameAsync(input));
    setIsEdit(false);
  };

  const deleteTaskHandler = () => {
    dispatch(deleteCardAsync(cardItem.id));
    setFetch(!fetch);
    window.location.reload();
    setOpenDeleteCard(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, []);

  if (isLoading) return <Loading></Loading>;
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

            {
              <>
                <div
                  onClick={() => {
                    setOpenDeleteCard(true);
                  }}
                  className="flex group items-center justify-center px-2 hover:bg-gray-200 rounded-xl"
                >
                  <i class="fa-regular fa-trash-can text-gray-200 hover:text-gray-200 group-hover:text-white"></i>
                </div>

                <Modal
                  title="Delete Card"
                  open={openDeleteCard}
                  width={20}
                  onClose={(e) => {
                    e.stopPropagation();
                    setOpenDeleteCard(false);
                    setFetch(!fetch);
                  }}
                >
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    <p>Do you want to delete this card?</p>
                    <div className="bg-gray-100 flex items-center gap-5 px-5 py-3 rounded-[4px] mt-5">
                      <i class="fa-regular fa-folder"></i>
                      <p className="font-semibold">{cardItem?.name}</p>
                    </div>
                    <div
                      className="flex gap-5 mt-10"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      <button
                        onClick={deleteTaskHandler}
                        className="text-gray-500 border hover:bg-gray-200 p-2 rounded-[4px]"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => {
                          setOpenDeleteCard(false);
                        }}
                        className="hover:bg-blue-700 bg-blue-600 p-2 text-white rounded-[4px]"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </Modal>
              </>
            }
          </div>
          {tasks?.map((task, idx) => (
            <Draggable
              key={task?.taskId}
              draggableId={task?.taskType}
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
