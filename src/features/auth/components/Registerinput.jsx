export default function RegisterInput({ placeholder }) {
  return (
    <input
      type="text"
      className="block w-full border rounded-md px-4 py-3.5 outline-none focus:ring-1"
      placeholder={placeholder}
    />
  );
}
