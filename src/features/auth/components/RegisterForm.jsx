// import { useState } from "react";
// import RegisterInput from "./RegisterInput";

// export default function RegisterForm() {
//   const [email, setEmail] = useState("");
//   const [color, setColor] = useState("bg-[#7a869a]");
//   let buttonProperty = `text-white w-full leading-[2.5rem] rounded-md text-lg font-bold ${color}`;

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//     setColor("bg-[#36b37e]");
//     buttonProperty = `text-white w-full leading-[2.5rem] rounded-md text-lg font-bold ${color}`;
//   };
//   // const buttonColor = email === setEmail ? "bg-[#7a869a]" : "bg-[#36b37e]";

//   return (
//     <form className="flex flex-col gap-6 w-full">
//       <div>
//         <RegisterInput
//           placeholder="Enter email"
//           value={email}
//           onChange={handleEmailChange}
//         />
//       </div>
//       <div>
//         <RegisterInput placeholder="Enter password" />
//       </div>
//       <div>
//         <button className={buttonProperty}>Continue</button>
//       </div>
//     </form>
//   );
// }

import { useState } from "react";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [buttonColor, setButtonColor] = useState("skyblue");

  const changeTheColorOfButtonDemo = (event) => {
    const emailValue = event.target.value;
    setEmail(emailValue);
    updateButtonColor(emailValue);
  };

  const updateButtonColor = (emailValue) => {
    if (emailValue !== "") {
      setButtonColor("green");
    } else {
      setButtonColor("skyblue");
    }
  };

  return (
    <>
      <label>UserName:</label>
      <input
        type="text"
        // id="changeColorDemo"
        onChange={changeTheColorOfButtonDemo}
      />
      <br />
      <br />
      <button
        // id="buttonDemo"
        style={{ background: buttonColor, marginLeft: "10px" }}
      >
        Press Me
      </button>
    </>
  );
}
