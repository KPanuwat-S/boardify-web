import { useState } from "react";
import { PenIcon } from "../../icons";
import { TaskInput } from "./TaskInput";
export function TaskForm() {
  const [hover, setHover] = useState(false);

  const handleMouseOver = () => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  };

  return (
    <>
      <div
        className="bg-red-300 flex cursor-pointer  "
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <div className="p-5 bg-purple-400 w-[90%] h-fit  ">
          <TaskInput />
        </div>
        {hover && (
          <div className="bg-amber-300 w-[10%] h-fit flex justify-end ">
            <PenIcon />
          </div>
        )}
      </div>
    </>
  );
}

{
  /*  */
}
