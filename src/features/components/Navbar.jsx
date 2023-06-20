import Avatar from "../../assets/Avatar.jpg";
export default function Navbar() {
  return (
    <>
      {/* LOGO */}
      <div className=" flex justify-center gap-5">
        <img
          className="w-[60px]"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Antu_trello.svg/256px-Antu_trello.svg.png"
        />
        <div className="text-[40px] ">Boardify</div>
      </div>

      <div className="navbar flex h-16 w-[80%] ml-16 ">
        {/* MENU*/}
        <a className="btn btn-ghost normal-case text-xl  hover:bg-[#7b8387]">
          `BOARD NAME `
        </a>
        <a className="btn btn-ghost normal-case text-xl  hover:bg-[#7b8387]">
          Board
        </a>
        <a className="btn btn-ghost normal-case text-xl hover:bg-[#7b8387]">
          Table
        </a>
        <a className="btn btn-ghost normal-case text-xl  hover:bg-[#7b8387]">
          Calendar
        </a>
        <a className="btn btn-ghost normal-case text-xl hover:bg-[#7b8387]">
          Dashboard
        </a>

        {/* Avatar */}
        <div className=" w-28  flex justify-center">
          <div className="avatar">
            <div className="w-12 rounded-full ">
              <img src={Avatar} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
