import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import validateRegister from "../../../validator/validate-register";
import useForm from "../../../hooks/useForm";

import RegisterInput from "./RegisterInput";
import { registerAsync } from "../slice/auth-slice";
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
      await dispatch(registerAsync(input)).unwrap();
      // navigate("/");
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
          <span className="leading-[1px] h-[40px] text-center ">Boardify</span>
          <div className="flex flex-col pt-[24px] items-center">
            <h5>ลงทะเบียนเพื่อดำเนินการต่อ</h5>
          </div>
        </div>
        {/* form */}
        <div>
          <form
            onSubmit={handleSubmitForm(onSubmit)}
            className="flex flex-col gap-10"
          >
            <RegisterInput
              name="firstName"
              id="firstName"
              value={input.firstName}
              onChange={handleChangeInput}
              placeholder="ชื่อจริง"
              error={error.firstName}
              className={
                error.firstName
                  ? "outline-red-500 border-red-500"
                  : "focus:border-blue-600 outline-none"
              }
            />
            <RegisterInput
              name="lastName"
              id="lastName"
              value={input.lastName}
              onChange={handleChangeInput}
              placeholder="นามสกุล"
              error={error.lastName}
              className={
                error.lastName
                  ? "outline-red-500 border-red-500"
                  : "focus:border-blue-600 outline-none"
              }
            />
            <RegisterInput
              name="email"
              id="email"
              value={input.email}
              onChange={handleChangeInput}
              placeholder="อีเมล"
              error={error.email}
              className={
                error.email
                  ? "outline-red-500 border-red-500"
                  : "focus:border-blue-600 outline-none"
              }
            />
            <RegisterInput
              name="password"
              id="password"
              value={input.password}
              onChange={handleChangeInput}
              placeholder="รหัสผ่าน"
              error={error.password}
              className={
                error.password
                  ? "outline-red-500 border-red-500"
                  : "focus:border-blue-600 outline-none"
              }
            />
            <RegisterInput
              name="confirmPassword"
              id="confirmPassword"
              value={input.confirmPassword}
              onChange={handleChangeInput}
              placeholder="ยืนยันรหัสผ่าน"
              error={error.confirmPassword}
              className={
                error.confirmPassword
                  ? "outline-red-500 border-red-500"
                  : "focus:border-blue-600 outline-none"
              }
            />

            <div>
              <p className="text-[12px] text-gray-500">
                เมื่อลงทะเบียนแล้ว หมายถึงฉันยอมรับข้อตกลงการบริการคลาวด์
                และยอมรับนโยบายความเป็นส่วนตัวของ Atlassian
              </p>
            </div>
            <div>
              <button className="text-white bg-blue-600 px-[10px] align-middle w-full flex justify-center h-[40px] leading-[40px]">
                ลงทะเบียน
              </button>
            </div>
            <span className="w-full text-center text-[11px] text-slate-400">
              หรือ
            </span>
            <button className="h-[40px] leading-[40px] bg-white font-bold shadow flex flex-row items-center gap-10">
              <span className="flex justify-center pl-[10px]">
                <img
                  src="https://aid-frontend.prod.atl-paas.net/atlassian-id/front-end/5.0.445/static/media/google-logo.e086107b.svg"
                  alt="google"
                  className="h-[18px] w-[18px] "
                />
              </span>
              <span>
                <span>ดำเนินการต่อด้วย Google</span>
              </span>
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
