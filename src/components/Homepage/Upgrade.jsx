// import React from "react";

import { Link, useNavigate } from "react-router-dom";
import { BahtIcon } from "../../icons";

function Upgrade() {
  const navigate = useNavigate();

  const handleOnClickSubmit = (e) => {
    navigate("/purchase");
  };

  return (
    <div className="flex  h-[400px] justify-center items-center ">
      <div className="flex flex-col gap-10 items-center  ">
        <div>
          <div className="h-[500px] w-[350px] bg-base-100 shadow-xl border border-solid mb-24">
            <div className=" text-left card-body  gap-8  ">
              <div className="font-bold text-lg ">FREE</div>
              <div className="flex gap-1 items-baseline">
                <div>
                  <BahtIcon />
                </div>
                <p className="text-4xl">
                  0 <span className="text-lg">THB</span>
                </p>
              </div>
              <p className="text-xs pb-4">Free for your whole team</p>

              <p>For individuals or teams looking to organize any project.</p>

              <Link to="/login">
                <div className="flex mt-12">
                  <button
                    type="button"
                    className=" w-[8rem] h-[3rem] border hover:bg-blue-400 bg-blue-600 text-white cursor-pointer text-center rounded-md shadow-sm"
                    name={"price_1NNxUCDKhgMWXKYTfAqfEOlA"}
                    onClick={handleOnClickSubmit}
                  >
                    Get Started
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10 items-center  ">
        <div>
          <div className="h-[500px] w-[350px] bg-base-100 shadow-xl border border-solid mb-24">
            <div className=" text-left card-body  gap-8  ">
              <div className="font-bold text-lg ">Premium</div>
              <div className="flex gap-1 items-baseline">
                <div>
                  <BahtIcon />
                </div>
                <p className="text-4xl">
                  300 <span className="text-lg">THB</span>
                </p>
              </div>
              <p className="text-xs">
                Per user/month if billed annually (350 THB billed monthly)
              </p>
              <p>
                For teams that need to track and visualize multiple projects in
                several ways, including boards, timelines, calendars, etc.
              </p>
              {/* <Link to="/login"> */}
              <div className="flex ">
                <button
                  type="button"
                  className=" w-[8rem] h-[3rem] border hover:bg-blue-400 bg-blue-600 text-white cursor-pointer text-center rounded-md shadow-sm"
                  name={"price_1NNxUCDKhgMWXKYTfAqfEOlA"}
                  onClick={handleOnClickSubmit}
                >
                  Get Started
                </button>
              </div>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upgrade;
