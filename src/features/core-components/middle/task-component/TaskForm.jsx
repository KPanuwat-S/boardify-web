import { useState } from "react";
import { PenIcon } from "../../../../icons";
export default function TaskForm() {
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
        className=" flex cursor-pointer  "
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <div className="flex justify-between bg-white p-4 w-full mx-5 my-2 h-fit">
          <div>Task</div>
          {hover && (
            <div>
              <PenIcon />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

{
  /*  */
}
