import LoginInput from "./LoginInput";
import validateLogin from "../validators/validateLogin";
import InputErrorMessage from "./InputErrorMessage";
import useForm from "../../../hooks/useForm";
import { useDispatch } from "react-redux";
import { login } from "../Slice/authSlice";
import { toast } from "react-toastify";

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
      toast.success(`Welcome !`, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      console.log("test on submit");
    } catch (err) {
      console.log(err);
      toast.error(`Wrong Account`, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmitForm(onSubmit)}
      className="flex flex-col gap-6 w-full "
    >
      <div>
        <LoginInput
          type="text"
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
          type="password"
          placeholder="Enter password"
          name="password"
          value={input.password}
          onChange={handleChangeInput}
          isInvalid={error.password}
        />
        <InputErrorMessage message={error.password} />
      </div>
      <div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white w-full leading-[2.5rem] rounded-md text-l font-semibold ">
          Continue
        </button>
      </div>
    </form>
  );
}
