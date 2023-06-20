import { MeatballsIcon } from "../../icons";

export default function SideBar() {
  return (
    <>
      <div className="">
        {/* BOARDS BOX */}
        <div>Boards</div>
        {/* MEMBER BOX */}
        <div tabIndex={0} className="collapse collapse-plus  ">
          <div className="collapse-title ">Members</div>
          <div className="collapse-content">
            <p>Pop-up Modal</p>
          </div>
        </div>
        {/* SETTING BOX */}
        <div tabIndex={0} className="collapse collapse-arrow  ">
          <div className="collapse-title ">Setting</div>
          <div className="collapse-content">
            <p>All setting</p>
          </div>
        </div>
        {/* YOUR BOARD BOX */}

        <div>
          <div tabIndex={0} className="collapse collapse-plus ">
            <div className="collapse-title ">Your boards</div>
            <div className="collapse-content">
              <p>
                tabIndex={0} attribute is necessary to make the div focusable
              </p>
            </div>
          </div>
          <div className="bg-red-400 flex justify-between">
            <div>My board 1</div>
            <MeatballsIcon className="w-3" />
          </div>
          <div className="bg-red-400 flex justify-between">
            <div>My board 2</div>
            <MeatballsIcon className="w-3" />
          </div>
          <div className="bg-red-400 flex justify-between">
            <div>My board 3</div>
            <MeatballsIcon className="w-3" />
          </div>
        </div>
      </div>
    </>
  );
}
