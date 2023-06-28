import React, { useState } from "react";
import DropdownTask from "./DropDownTask";
import ReactQuill from "react-quill";
import SaveCancelBtnGroup from "./SaveCancelBtnGroup";
import CheckListSideMenu from "./CheckListSideMenu";
import JoinTaskSideMenu from "./JoinTaskSideMenu";
import LabelSideMenu from "./LabelSideMenu";
import DateSideMenu from "./DateSideMenu";

function TaskEditContent({ cardItem }) {
  const [open, setOpen] = useState(false);
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("Title");
  const [isEdit, setIsEdit] = useState(false);
  const [check, setCheck] = useState(false);
  const [add, setAdd] = useState(false);
  const [taskDetail, setTaskDetail] = useState({
    name: "",
    description: "",
    dueDate: "",
    labelId: "",
    members: [],
    attachment: "",
    checklists: {
      name: "Acceptance Criteria",
      list: [
        { id: 1, description: "checklist", isChecked: false },
        { id: 2, description: "checklist2", isChecked: false },
        { id: 3, description: "checklist3", isChecked: false },
      ],
    },
  });
  // const card = useSelector((state) => state.card.cardItems);

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      // [{ font: [] }],
      // [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
    ],
  };

  // TODO:
  const [listItem, setListItem] = useState({
    description: "",
    isChecked: false,
  });
  const [arrayOfList, setArrayOfList] = useState([]);

  const checklistHandler = (e) => {
    e.preventDefault();
    console.log("etargetvalue", e.target.value);
    setListItem({ ...listItem, description: e.target.value });
  };
  const submitChecklistItem = (e) => {
    e.preventDefault();
    setArrayOfList([...arrayOfList, listItem]);
    //จริงๆ จะต้องแก้ไข task.checklist.list โดยทำ dispatch สำหรับ add list โดยเฉพาะ 
    setAdd(false);
  };
  console.log("arr", arrayOfList);
  return (
    <div className="flex w-full mx-auto gap-10 p-5 rounded-[4px]">
      {/* Right */}
      <div className="flex flex-col gap-10 flex-1 ">
        <div>
          <div className="flex gap-5 items-center">
            <i class="fa-solid fa-bars-progress text-gray-500"></i>
            <h1 className="cursor-pointer hover:bg-gray-100 p-2 rounded-[4px]">
              {isEdit ? (
                <input
                  className="px-2"
                  type="text"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              ) : (
                <h1
                  onClick={() => {
                    setIsEdit(true);
                  }}
                >
                  {title}
                </h1>
              )}
            </h1>
          </div>
          <p className="font-light text-[14px]">In Card: {cardItem.name}</p>
        </div>
        <div>
          <div className="flex gap-5 items-center mb-1">
            <i class="fa-solid fa-align-left text-gray-700"></i>
            <h1>Description</h1>
          </div>
          <div className="flex flex-col gap-10 ml-10">
            {!open && (
              <div
                className="p-2 w-[500px] text-gray-400 bg-gray-100 rounded-[4px] hover:bg-gray-200"
                role="button"
                onClick={() => {
                  setOpen(true);
                }}
              >
                <p>Add a more detailed description...</p>
              </div>
            )}

            {open && (
              <div className="flex flex-col gap-2 ">
                <div className="w-[500px]">
                  <ReactQuill
                    theme="snow"
                    value={description}
                    onChange={setDescription}
                    className="editor-input"
                    modules={modules}
                    bounds="#parent"
                  />
                </div>
                <div
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <SaveCancelBtnGroup />
                </div>
              </div>
            )}
          </div>
          {true && (
            // checklist UI in task body
            // TODO:
            <div>
              <div className="flex gap-5 items-center mt-5">
                <i class="fa-solid fa-align-left text-gray-700"></i>
                <h1>{taskDetail.checklists.name}</h1>
                <button
                  className="bg-gray-100 p-1 rounded-[4px]"
                  onClick={() => {
                    setAdd(true);
                  }}
                >
                  Add List
                </button>
              </div>
              <div className="flex flex-col">
                <div className="flex gap-5 items-center mt-3 mb-3">
                  <p className="font-light text-xs">100%</p>
                  <div className="w-full h-2 bg-blue-100 rounded-full">{}</div>
                </div>
                {taskDetail.checklists.list.map((el) => {
                  console.log(el.isChecked);
                  // <div className="flex gap-5 items-center ml-10">
                  //   <div
                  //     className="h-4 w-4 border"
                  //     onClick={() => {
                  //       setCheck(true);
                  //     }}
                  //   >
                  //     {check && <i class="fa-solid fa-check text-gray-400"></i>}
                  //   </div>
                  //   <i className="">{el.description}</i>
                  // </div>;
                  return (
                    <div className="flex gap-5 ml-10">
                      <input
                        className="checked"
                        id={el.id}
                        name="list"
                        type="checkbox"
                        value={el.description}
                      />
                      <label htmlFor={el.id} className="text-gray-600">
                        {el.description}
                      </label>
                    </div>
                  );
                })}
                {add && (
                  <>
                    <input
                      type="text"
                      placeholer="Add checklist"
                      name="checklist"
                      className="bg-gray-100"
                      value={listItem.description}
                      onChange={checklistHandler}
                    />
                    <div className="flex gap-5 mt-2">
                      <button
                        className="bg-blue-600 px-2 py-1 text-white rounded-[4px]"
                        onClick={submitChecklistItem}
                      >
                        Add
                      </button>
                      <button>Cancel</button>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex w-[150px] flex-col gap-2">
        <DropdownTask
          width="w-[420px]"
          label="Due Dates"
          icon={<i class="fa-regular fa-clock ml-2"></i>}
        >
          <DateSideMenu />
        </DropdownTask>
        <DropdownTask
          label="Join Task"
          icon={<i class="fa-solid fa-arrow-left ml-2"></i>}
        >
          <JoinTaskSideMenu />
        </DropdownTask>
        <DropdownTask
          label="Member"
          icon={<i class="fa-regular fa-user ml-2"></i>}
        />

        <DropdownTask
          label="Labels"
          icon={<i class="fa-solid fa-tag ml-2"></i>}
        >
          <LabelSideMenu />
        </DropdownTask>

        <DropdownTask
          label="Checklists"
          icon={<i class="fa-solid fa-list-check ml-2"></i>}
        >
          <CheckListSideMenu open={open} setOpen={setOpen} />
        </DropdownTask>

        <DropdownTask
          label="Attachment"
          icon={<i class="fa-solid fa-paperclip ml-2"></i>}
        />
      </div>
    </div>
  );
}

export default TaskEditContent;
