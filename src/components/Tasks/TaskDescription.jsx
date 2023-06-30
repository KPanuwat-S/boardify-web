import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import the styles

function TaskDescription({
  openDescription,
  setOpenDescription,
  cardItem,
  task,
  setTaskItem,
  taskItem,
}) {
  const [description, setDescription] = useState(taskItem.description || "");
  const [editMode, setEditMode] = useState(!!taskItem.description);
  console.log("editmode", editMode);
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

  const handleEditDescription = () => {
    setEditMode(true);
    console.log(description);
    console.log("description handle", description);
  };

  const handleChangingDescription = () => {
    setDescription(e.target.value);
  };

  const editComponent = (
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
              onChange={handleChangingDescription}
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
              <button
                onClick={handleEditDescription}
                className="bg-blue-600 text-white py-1 px-2 rounded-[4px]"
              >
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
  );

  const taskDescription = (
    <div className="text-gray-500 ml-10 mt-2 p-2 rounded-[4px] bg-gray-100">
      {/* <div className="font-light text-gray-500">{taskItem.description}</div> */}

      <div
        // className="text-gray-500"
        dangerouslySetInnerHTML={{ __html: description }}
      />
      {/* {description} */}
      {/* </div> */}
    </div>
  );

  const onEditMode = (
    <>
      {" "}
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
            <button
              onClick={handleEditDescription}
              className="bg-blue-600 text-white py-1 px-2 rounded-[4px]"
            >
              Save
            </button>
            <button className="py-1 px-2 rounded-[4px] border border-gray-300 hover:bg-gray-300">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      {" "}
      <div className="flex gap-5 items-center mb-1">
        <div className="flex-1 gap-5 ">
          <div className="flex items-center gap-5 justify-start">
            <i class="fa-solid fa-align-left text-gray-700"></i>
            <h1>Description</h1>
          </div>
        </div>
        {taskItem.description && (
          <button
            onClick={() => {
              setEditMode(false);
            }}
            className="flex items-center pointer-cursor hover:bg-gray-200 justify-center gap-2 bg-gray-100 py-1 px-2 rounded-[4px] font-light text-xs"
          >
            <i class="fa-solid fa-pencil text-gray-500 text-xs"></i>
            <p className="">Edit</p>
          </button>
        )}
      </div>
      <div>
        {editMode
          ? taskDescription
          : onEditMode && taskItem.description
          ? onEditMode
          : editComponent}
      </div>
    </>
  );
}

export default TaskDescription;
