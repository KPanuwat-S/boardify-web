// import React from "react";
import Board from "../../assets/Board.png";
import {
  AnnouncementIcon,
  CheckListIcon,
  FolderIcon,
  LeafIcon,
} from "../../icons";

function Section() {
  return (
    <section className="">
      <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
          <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
            <h2 className="text-left text-3xl font-bold sm:text-4xl">
              A productivity powerhouse
            </h2>

            <p className="mt-4 text-gray-600 text-left">
              A productivity powerhouse Simple, flexible, and powerful. All it
              takes are boards, lists, and cards to get a clear view of who’s
              doing what and what needs to get done. Learn more in our guide for
              getting started.
            </p>
          </div>
        </div>
      </div>
      <div className="flex  ">
        <div className="flex flex-col gap-4">
          <div className=" w-80 p-4 border border-blue-600 ml-8 border-l-8 rounded-lg shadow-xl shadow-slate-500">
            <div>Bords</div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
              officiis, provident nulla eos libero, repudiandae iusto nemo ex
            </p>
          </div>
          <div className=" w-80 p-4 border border-blue-600 ml-8 border-l-8 rounded-lg shadow-xl shadow-slate-500">
            <div>Bords</div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
              officiis, provident nulla eos libero, repudiandae iusto nemo ex
            </p>
          </div>
          <div className=" w-80 p-4 border border-blue-600 ml-8 border-l-8 rounded-lg shadow-xl shadow-slate-500">
            <div>Bords</div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
              officiis, provident nulla eos libero, repudiandae iusto nemo ex
            </p>
          </div>
        </div>
        <div className="ml-16">
          {" "}
          <img src={Board} width={800} className="rounded-xl" />
        </div>
      </div>
      <div className="mt-24 mb-7">
        <div className=" ml-8 font-semibold">TRELLO IN ACTION</div>
        <div className="ml-8 text-3xl font-semibold">
          Workflows for any project, big or small
        </div>
      </div>

      {/* carualsal */}
      <div className="flex gap-4 ml-8">
        <div className="bg-[#ff7452] border relative z-0 w-72 ">
          <div className="invisible">00</div>
          <div className="flex w-8 h-7 bg-slate-50 absolute inset-2   z-0 rounded-md">
            <FolderIcon />
          </div>
          <div className="bg-white h-24 pt-6 pl-3 pb-32  p-4">
            <div className="font-bold ">Project Management</div>
            <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
              Keep tasks in order, deadlines on track, and team members aligned
              with Trello
            </p>
          </div>
        </div>
        <div className="bg-[#2684FF] border relative z-0 w-72 ">
          <div className="invisible">00</div>
          <div className="flex w-9 h-8 bg-slate-50 absolute inset-3    z-0 rounded-md">
            <AnnouncementIcon />
          </div>
          <div className="bg-white h-24 pt-6 pl-3 pb-32  p-4">
            <div className="font-bold ">Project Management</div>
            <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
              Empower your team meetings to be more productive, empowering, and
              dare we say-fun
            </p>
          </div>
        </div>
        <div className="bg-[#57D9A3] border relative z-0 w-72 ">
          <div className="invisible">00</div>
          <div className="flex w-9 h-8 bg-slate-50 absolute inset-3    z-0 rounded-md">
            <LeafIcon />
          </div>
          <div className="bg-white h-24 pt-6 pl-3 pb-32  p-4">
            <div className="font-bold ">Onboarding</div>
            <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
              Onboarding to a new company or project is a snap with Trello&aposs
              visual layout of to-do&aposs, resources, and progress tracking.
            </p>
          </div>
        </div>
        <div className="bg-[#FFC400] border relative z-0 w-72 ">
          <div className="invisible">00</div>
          <div className="flex w-10 h-8 bg-slate-50 absolute items-center justify-center inset-3    z-0 rounded-md">
            <CheckListIcon />
          </div>
          <div className="bg-white h-24 pt-6 pl-3 pb-32  p-4">
            <div className="font-bold ">Task management</div>
            <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
              Use Trello to track, manage, complete, and bring tasks together
              like pieces of a puzzle, and make your team&aposs projects a
              cohesive success every time.
            </p>
          </div>
        </div>
      </div>
      <div className="flex ml-8 gap-60 my-24 "></div>
    </section>
  );
}

export default Section;

{
  /*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/
}
