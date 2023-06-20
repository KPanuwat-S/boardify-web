// import Avatar from "../assets/Avatar.jpg";
export default function Navbar() {
  return (
    <>
      <div className="navbar flex h-16 w-[80%]  ">
        {/* BOARD NAME */}
        <a className="btn btn-ghost normal-case text-xl">`BOARD NAME`</a>
        <a className="btn btn-ghost normal-case text-xl">Board</a>
        <a className="btn btn-ghost normal-case text-xl">Table</a>
        <a className="btn btn-ghost normal-case text-xl">Calendar</a>
        <a className="btn btn-ghost normal-case text-xl">Dashboard</a>
        {/* Avatar */}
      </div>
      {/* <div className="avatar">
        <div className=" rounded-full">
          <img src={Avatar} />
        </div>
      </div> */}
    </>
  );
}
