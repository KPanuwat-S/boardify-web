export default function AddMemberForm() {
  return (
    <>
      <form>
        <div>
          <input
            className=" rounded-md border border-gray-300 px-3 py-1.5 outline-none text-sm focus:ring focus:ring-blue-300 focus:border-blue-500"
            placeholder="Email address or name"
          />
        </div>
      </form>
    </>
  );
}
