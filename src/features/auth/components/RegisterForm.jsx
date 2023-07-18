import { useNavigate } from "react-router-dom";
import useForm from "../../../hooks/useForm";
import RegisterInput from "./RegisterInput";
import { registerAsync } from "../Slice/authSlice";
import validateRegister from "../validators/validateRegister";
import { useDispatch } from "react-redux";
const initialInput = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
export default function () {
  const { input, error, handleSubmitForm, handleChangeInput } = useForm(
    initialInput,
    validateRegister
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSubmit = async () => {
    try {
      // console.log(input);
      await dispatch(registerAsync(input)).unwrap();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <section
        role="main"
        className="flex flex-col  w-[400px] h-[720] py-[32px] pt-[40px] bg-white shadow rounded-md my-0 mx-auto p-10"
      >
        {/* Logo */}
        <div className="flex flex-col">
          <span className="leading-[1px] h-[40px] text-center ">
            {" "}
            <h5>Sign up for your account</h5>
          </span>
        </div>
        {/* form */}
        <div>
          <form
            onSubmit={handleSubmitForm(onSubmit)}
            className="flex flex-col gap-10"
          >
            <RegisterInput
              type="text"
              name="firstName"
              id="firstName"
              value={input.firstName}
              onChange={handleChangeInput}
              placeholder="First Name"
              error={error.firstName}
              className={
                error.firstName
                  ? "outline-red-500 border-red-500"
                  : "focus:border-blue-600 outline-none"
              }
            />
            <RegisterInput
              type="text"
              name="lastName"
              id="lastName"
              value={input.lastName}
              onChange={handleChangeInput}
              placeholder="Last Name"
              error={error.lastName}
              className={
                error.lastName
                  ? "outline-red-500 border-red-500"
                  : "focus:border-blue-600 outline-none"
              }
            />
            <RegisterInput
              type="email"
              name="email"
              id="email"
              value={input.email}
              onChange={handleChangeInput}
              placeholder="Email"
              error={error.email}
              className={
                error.email
                  ? "outline-red-500 border-red-500"
                  : "focus:border-blue-600 outline-none"
              }
            />
            <RegisterInput
              type="password"
              name="password"
              id="password"
              value={input.password}
              onChange={handleChangeInput}
              placeholder="Password"
              error={error.password}
              className={
                error.password
                  ? "outline-red-500 border-red-500"
                  : "focus:border-blue-600 outline-none"
              }
            />
            <RegisterInput
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={input.confirmPassword}
              onChange={handleChangeInput}
              placeholder="Confirm Password"
              error={error.confirmPassword}
              className={
                error.confirmPassword
                  ? "outline-red-500 border-red-500"
                  : "focus:border-blue-600 outline-none"
              }
            />

            <div></div>
            <div>
              <button className="rounded-[4px] text-white bg-blue-600 px-[10px] align-middle w-full flex justify-center h-[40px] leading-[40px]">
                Register
              </button>
            </div>
            {/* <span className="w-full text-center text-[11px] text-slate-400">
              OR
            </span> */}
            {/* <button className="h-[40px] leading-[40px] bg-white font-bold shadow flex flex-row items-center gap-10">
              <span className="flex justify-center pl-[10px]">
                <img
                  src="https://aid-frontend.prod.atl-paas.net/atlassian-id/front-end/5.0.445/static/media/google-logo.e086107b.svg"
                  alt="google"
                  className="h-[18px] w-[18px] "
                />
              </span>
              <span>
                <span>Login </span>
              </span>
            </button> */}
          </form>
        </div>
      </section>
    </div>
  );
}
