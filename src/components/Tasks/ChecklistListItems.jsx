import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CheckListSideMenu from "./CheckListSideMenu";
import {
  editTaskAsync,
  addChecklistAsync,
  addChecklist,
  getChecklist,
  getOneTaskAsync,
  editChecklistAsync,
  deleteChecklistAsync,
} from "../../features/board/task/Slice/taskSlice";
import cn from "../../utils/cn";
function ChecklistListItems({ taskItem, setTaskItem, fetch, setFetch }) {
  const dispatch = useDispatch();
  // const taskItem = useSelector((state) => state.task.taskItem);
  const [listItem, setListItem] = useState("");
  const [addChecklist, setAddCheckList] = useState(false);
  const [list, setList] = useState("");

  console.log("taskitem", taskItem);
  const fetchTask = useSelector((state) => state.task.taskItem);
  console.log("fetchTask", fetchTask);
  console.log("list", list);
  useEffect(() => {
    if (fetchTask !== null) setList(fetchTask.ChecklistItems);
  }, [fetchTask]);

  console.log("fetchTask", fetchTask);

  const checklistHandler = (e) => {
    e.preventDefault();
    setListItem(e.target.value);
  };

  const submitChecklistItem = (e) => {
    e.preventDefault();
    if (listItem === "") return;
    const checklistObject = {
      description: listItem,
      isChecked: false,
      taskId: taskItem.id,
    };
    // console.log("checklistobj", checklistObject);
    console.log("task item in submit handler", taskItem);
    const editTaskItem = {
      ...taskItem,
      ChecklistItems: [...list, checklistObject],
    };
    setList((oldList) => {
      return [...oldList, checklistObject];
    });
    dispatch(addChecklistAsync(checklistObject));
    setTaskItem(editTaskItem);
    setListItem("");
    setFetch(!fetch);
    console.log("checklistObject", checklistObject);
    // const input = { id: taskItem.id, data: editTaskItem };

    //จริงๆ จะต้องแก้ไข task.checklist.list โดยทำ dispatch สำหรับ add list โดยเฉพาะ
    setAddCheckList(false);
  };

  // const [percent, setPercent] = useState(0);
  const submitEditChecklistItem = (id) => {
    const editItem = list.find((el) => el.id === id);
    const newEditItem = { ...editItem, isChecked: !editItem.isChecked };
    console.log("newEditItem", newEditItem);
    console.log("list", list);

    dispatch(editChecklistAsync(newEditItem));
    setList((oldList) => {
      const newItem = oldList.filter((el) => el.id !== id);
      const newList2 = oldList.map((el) => {
        if (el.id === id) return newEditItem;
        else return el;
      });
      // const isCheckIsTrue = list.filter((el) => el.isChecked == true);
      // const progressPercentage = (isCheckIsTrue.length / list.length) * 100;
      // setPercent(Math.round(progressPercentage));
      return newList2;
    });
    // setFetch(!fetch);
  };

  const deleteChecklistItem = (id) => {
    const filteredItems = list.filter((el) => el.id !== id);
    dispatch(deleteChecklistAsync(id));
    // console.log("id from delete checklist item", id);
    setList(filteredItems);
    // setFetch(!fetch);
  };

  // useEffect(() => {
  //   const isCheckIsTrue = list.filter((el) => el.isChecked == true);
  //   const progressPercentage = (isCheckIsTrue.length / list.length) * 100;
  //   setPercent(Math.round(progressPercentage));
  // }, [list]);
  return (
    <div>
      <div className="flex gap-5 items-center mt-5">
        <div className="flex flex-1 justify-between items-center mb-2">
          <div className="flex gap-5 items-center justify-center">
            <i class="fa-solid fa-list-check"></i>
            <div>Checklist</div>
          </div>
          <div className="">
            <button
              className="font-light text-xs bg-gray-100 p-1 px-2 rounded-[4px] hover:bg-gray-200"
              onClick={() => {
                setAddCheckList(!addChecklist);
              }}
            >
              + Add List
            </button>
          </div>
        </div>
      </div>

      {list && (
        <div className="flex flex-col">
          {/* Percen */}
          {/* <div className="flex gap-5 ml-10 mb-5">
            <h1 className="text-gray-500 font-light text-xs">Check List</h1>
            <div className="flex gap-5 items-center">
              <p className="font-light text-xs flex-1">{`${percent}%`}</p>
              <div className="w-[250px] h-2 bg-gray-100 rounded-full">
                {
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${percent}%` }}
                  ></div>
                }
              </div>
            </div>
          </div> */}

          <div className="flex flex-col overflow-scroll">
            {list.map((el) => {
              return (
                <div
                  role="button"
                  className="flex relative items-center gap-5 ml-10 p-1 px-2 hover:bg-gray-100 rounded-[4px]"
                  key={el.id}
                >
                  <div
                    onClick={() => {
                      submitEditChecklistItem(el.id);
                    }}
                    className="relative h-4 w-4 rounded-[4px] border flex items-center justify-center"
                  >
                    <div className="absolute right-0">
                      {el.isChecked && (
                        <i class="fa-solid fa-check text-gray-400"></i>
                      )}
                    </div>
                  </div>

                  <label
                    htmlFor={el.id}
                    className={cn(
                      el.isChecked ? "line-through" : "",
                      "font-light text-gray-700 text-"
                    )}
                  >
                    {el.description}
                  </label>
                  <div
                    className="absolute right-5"
                    onClick={() => {
                      deleteChecklistItem(el.id);
                    }}
                  >
                    <i class="fa-regular fa-trash-can text-gray-300 hover:text-blue-600"></i>
                  </div>
                </div>
              );
            })}
          </div>

          {addChecklist && (
            <div className="ml-10">
              <input
                type="text"
                placeholer="Add checklist"
                name="checklist"
                className=" mt-5 py-1 border border-gray-400 rounded-[4px] px-2"
                value={listItem}
                onChange={checklistHandler}
              />
              <div className="flex gap-5 mt-2">
                <button
                  className="bg-blue-600 hover:bg-blue-700 px-2 py-1 text-white rounded-[4px]"
                  onClick={submitChecklistItem}
                >
                  Add
                </button>
                <button
                  className="border px-2 py-1 text-gray-600 rounded-[4px]"
                  onClick={() => {
                    setAddCheckList(false);
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ChecklistListItems;
