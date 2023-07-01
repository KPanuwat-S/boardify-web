import React, { useState } from "react";
import ReactQuill from "react-quill";

function TaskDescription({
  openDescription,
  setOpenDescription,
  cardItem,
  task,
  setTaskItem,
}) {
  const [description, setDescription] = useState("");
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
    <>
      {" "}
      <div className="flex gap-5 items-center mb-1">
        <i class="fa-solid fa-align-left text-gray-700"></i>
        <h1>Description</h1>
      </div>
      <div className="flex flex-col gap-10 ml-10">
        {!openDescription && (
          <div
            className="p-2 w-[500px] text-gray-400 bg-gray-100 rounded-[4px] hover:bg-gray-200"
            role="button"
            onClick={() => {
              setOpenDescription(true);
            }}
          >
            <p>Add a more detailed description...</p>
          </div>
        )}

        {openDescription && (
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
                setOpenDescription(false);
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
    </>
  );
}

export default TaskDescription;
