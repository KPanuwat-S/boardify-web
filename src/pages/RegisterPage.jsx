import RegisterForm from "../features/auth/components/RegisterForm";
import RegisterContainer from "../features/auth/components/RegisterContainer";

export default function RegisterPage() {
  return (
    <div>
      <div className=" flex justify-center items-center gap-5">
        {/* <img
          className="w-[60px]"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Antu_trello.svg/256px-Antu_trello.svg.png"
        /> */}
        <i class="fa-solid fa-border-top-left fa-2xl"></i>
        <div className="text-[40px] ">Boardify</div>
      </div>
      <div className=" flex justify-center mt-10">
        {/* <div className="flex flex-col  items-center justify-between  bg-white rounded-lg shadow-[0_0_15px_rgb(0_0_0_/0.2)] mb-6  w-[400px] h-[500px] px-[25px] py-[40px] text-[14px] font-bold">
          <h1 className="text-lg">Sign up for your account</h1>
          <div className=" flex flex-col justify-between  text-center w-[300px]  ">
            <div> */}

        {/* </div>
          </div> */}

        <div>
          <hr className="absolute px-[140px] font-medium  -translate-x-1/2 left-1/2 pt-[2px]" />
          <br />
          <RegisterContainer />
        </div>
      </div>
    </div>
    // </div>
  );
}
