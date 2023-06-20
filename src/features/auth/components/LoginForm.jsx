import LoginInput from "./LoginInput";
import validateLogin from "../validators/validate-login";
import InputErrorMessage from "./InputErrorMessage";
import useForm from "../../../้hooks/useForm";
import { useDispatch } from "react-redux";
import { login } from "../Slice/auth-slice";

export default function LoginForm() {
  const { input, handleChangeInput, error, handleSubmitForm } = useForm(
    {
      email: "",
      password: "",
    },
    validateLogin
  );

  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      await dispatch(login(data)).unwrap();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form
      onSubmit={handleSubmitForm(onSubmit)}
      className="flex flex-col gap-6 w-full "
    >
      <div>
        <LoginInput
          placeholder="Enter email"
          name="email"
          value={input.email}
          onChange={handleChangeInput}
          isInvalid={error.email}
        />
        <InputErrorMessage message={error.email} />
      </div>
      <div>
        <LoginInput
          placeholder="Enter password"
          name="password"
          value={input.password}
          onChange={handleChangeInput}
          isInvalid={error.password}
        />
        <InputErrorMessage message={error.password} />
      </div>
      <div>
        <button className="bg-[#61bd4f] text-white w-full leading-[2.5rem] rounded-md text-lg font-bold ">
          Continue
        </button>
      </div>
    </form>
  );
}
