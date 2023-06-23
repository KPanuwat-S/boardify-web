// import Avatar from "../../../assets/Avatar.jpg";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      {/* MENU*/}
      <div className="w-full p-3 flex justify-between border-b">
        <div className="flex gap-3 items-center px-5 ">
          <i class="fa-solid fa-chart-simple text-blue-600"></i>
          <div className="text-blue-600 font-semibold">CC14 Workspace</div>
        </div>
        <div className="flex justify-end gap-10 flex-1">
          {/* <Link>
            <div className="btn btn-ghost normal-case hover:text-blue-600">
              Board
            </div>
          </Link> */}
          <Link>
            <div className="btn btn-ghost normal-case hover:text-blue-600">
              Table
            </div>
          </Link>
          <Link>
            {" "}
            <div className="btn btn-ghost normal-case hover:text-blue-600">
              Calendar
            </div>
          </Link>

          <Link>
            <div className="btn btn-ghost normal-case hover:text-blue-600">
              Dashboard
            </div>
          </Link>
        </div>

        {/* Avatar */}
        <div className=" w-28   ">
          <div>
            <div className="avatar">
              <div className="w-12 rounded-full ">
                {/* <img src={Avatar} /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
