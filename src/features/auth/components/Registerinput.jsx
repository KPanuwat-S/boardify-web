import React from "react";

export default function RegisterInput({
  name,
  id,
  value,
  onChange,
  placeholder,
  error,
  className,
}) {
  return (
    <div className="flex-col align-top text-[14px] overflow-hidden ver flex items-start bg-[#FAFBFC]  cursor-text rounded-[4px]">
      <input
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`${
          className ? className : ""
        }  "py-[8px] px-[6px] h-[2.57em] w-full leading-[1.42857px] border  "`}
      />
      {{ error } && <span className="pl-2">{error}</span>}
    </div>
  );
}
