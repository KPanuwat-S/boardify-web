import React, { useState } from "react";
import DropdownTask from "./DropDownTask";
import ReactQuill from "react-quill";

function Task() {
  const [open, setOpen] = useState(false);
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("Title");
  const [isEdit, setIsEdit] = useState(false);
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
  return (
    <div className="bg-gray-700 ">
      <div className="flex bg-gray-100 w-[760px] mx-auto p-5 rounded-[4px]">
        {/* Right */}
        <div className="flex flex-col gap-10 flex-1 ">
          <div>
            <div className="flex gap-5 items-center">
              <i class="fa-solid fa-bars-progress text-gray-500"></i>
              <h1>
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
            <p className="font-light text-[14px]">In Card: card name</p>
          </div>
          <div>
            <div className="flex gap-5 items-center mb-1">
              <i class="fa-solid fa-align-left text-gray-700"></i>
              <h1>Description</h1>
            </div>
            <div className="flex gap-5 ml-10">
              {!open && (
                <div
                  className="p-2 w-[500px] text-gray-400 bg-gray-200 rounded-[4px] hover:bg-gray-300"
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
                    <div className="flex gap-2">
                      <button className="bg-blue-600 text-white py-1 px-2 rounded-[4px]">
                        Save
                      </button>
                      <button className="py-1 px-2 rounded-[4px] border border-gray-300 hover:bg-gray-300">
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Left */}
        <div className="flex w-[150px] flex-col gap-2 mt-10">
          {/* <div
            role="button"
            className="flex gap-2 items-center bg-gray-200 hover:bg-gray-300 p-1 py-2 rounded-[4px] text-gray-600"
          >
         
            <p className="text-sm ">Join Task</p> */}
          <DropdownTask
            label="Join Task"
            icon={<i class="fa-solid fa-arrow-left ml-2"></i>}
            data={["test"]}
          />
          {/* </div> */}

          {/* <div
            role="button"
            className="flex gap-2 items-start bg-gray-200 hover:bg-gray-300 p-1 py-2 rounded-[4px] text-gray-600"
          >
            <p className="text-sm ">Member</p>
          </div> */}

          <DropdownTask
            label="Member"
            icon={<i class="fa-regular fa-user ml-2"></i>}
            data={["test"]}
          />

          <DropdownTask
            label="Labels"
            icon={<i class="fa-solid fa-tag ml-2"></i>}
            data={["test"]}
          />

          <DropdownTask
            label="Checklists"
            icon={<i class="fa-solid fa-list-check ml-2"></i>}
            data={["test"]}
          />
          <DropdownTask
            label="Dates"
            icon={<i class="fa-regular fa-clock ml-2"></i>}
            data={["test"]}
          />
          <DropdownTask
            label="Attachment"
            icon={<i class="fa-solid fa-paperclip ml-2"></i>}
            data={["test"]}
          />
        </div>
      </div>
    </div>
  );
}

export default Task;
