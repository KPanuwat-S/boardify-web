import Avatar from "../../../assets/Avatar.jpg";
export default function Navbar() {
  return (
    <>
      {/* MENU*/}
      <div className="flex ">
        <div>
          <a className="btn btn-ghost normal-case text-xl  ">
            Product Backlog: CC14_Group_Project
          </a>
        </div>
        <a className="btn btn-ghost normal-case text-xl  hover:bg-[#5959598e]">
          Board
        </a>
        <a className="btn btn-ghost normal-case text-xl hover:bg-[#5959598e]">
          Table
        </a>
        <a className="btn btn-ghost normal-case text-xl  hover:bg-[#5959598e]">
          Calendar
        </a>
        <a className="btn btn-ghost normal-case text-xl hover:bg-[#5959598e]">
          Dashboard
        </a>

        {/* Avatar */}
        <div className=" w-28   ">
          <div>
            <div className="avatar">
              <div className="w-12 rounded-full ">
                <img src={Avatar} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
