export default function MemberEventInCard() {
  return (
    <>
      <div className="flex gap-5">
        <div className="flex items-center justify-center w-[40px] h-[40px] bg-blue-400 text-white rounded-full">
          SD
        </div>
        <div>
          <h2 className="font-bold">Sadana Doe</h2>
          <h3>sadananDoe@gmail.com</h3>
        </div>
      </div>
      <div className="flex items-center gap-5 ">
        <div>
          <h2 className="text-blue-600">On 2 Boards</h2>
        </div>
        <div>Admin</div>
        <button className="flex items-center px-2 py-1 bg-gray-100 rounded-[4px] hover:bg-gray-200 duration-200">
          <h2 className="text-gray-500">Remove</h2>
        </button>
      </div>
    </>
  );
}
