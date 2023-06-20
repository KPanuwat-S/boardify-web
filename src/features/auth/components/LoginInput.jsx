import createClasses from "../../../utils/create-classes";

export default function LoginInput({
  placeholder,
  value,
  onChange,
  name,
  isInvalid,
}) {
  //   {
  //   placeholder,
  //   value,
  //   onChange,
  //   name,
  //   isInvalid,
  // }
  const className = createClasses(
    "block w-full border rounded-md px-4 py-2.5 outline-none focus:ring-1  ",
    isInvalid
      ? "border-red-500 focus:ring-red-300"
      : "border-gray-300 focus:border-blue-500 focus:ring-blue-300"
  );
  return (
    <input
      type="text"
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
    />
  );
}
