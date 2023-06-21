import LoginForm from "../features/auth/components/LoginForm";
import RegisterContainer from "../features/auth/components/RegisterContainer";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { gapi } from "gapi-script";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { googleLogin } from "../features/auth/Slice/auth-slice";
export default function LoginPage() {
  const dispatch = useDispatch();
  const clientId =
    "454033013538-3m4ro3a88tgldk3p2pof8ema4j2aghu0.apps.googleusercontent.com";
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  }, []);

  const onSuccess = (res) => {
    setProfile(res.profileObj);
    dispatch(googleLogin(res));
    console.log("onSuccessFn working", res);
  };

  const onFailure = (res) => {
    console.log("fail", res);
  };

  const logOut = () => {
    setProfile(null);
  };

  return (
    <div>
      <div className=" flex justify-center gap-5">
        <img
          className="w-[60px]"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Antu_trello.svg/256px-Antu_trello.svg.png"
        />
        <div className="text-[40px] ">Boardify</div>
      </div>
      {/* FORM */}
      <div className=" flex justify-center mt-10">
        <div className="flex flex-col  items-center justify-between  bg-white rounded-lg shadow-[0_0_15px_rgb(0_0_0_/0.2)] mb-6  w-[400px] h-[500px] px-[25px] py-[40px] text-[14px] font-bold">
          <h1 className="text-lg">Log in to Boardify</h1>
          <div className=" flex flex-col justify-between  text-center w-[300px]  ">
            <div>
              <LoginForm />
            </div>
          </div>
          <div>
            <p className="font-thin text-gray-600 ">OR</p>
          </div>

          {/* GOOGLE lOGIN */}
          <div className="">
            {profile ? (
              <div>
                <h3>User Logged in</h3>
                <p>Name: {profile.name}</p>
                <p>Email: {profile.email}</p>
                <br />
                <br />
                <GoogleLogout
                  clientId={clientId}
                  buttonText="Log Out"
                  onLogoutSuccess={logOut}
                />
              </div>
            ) : (
              <div>
                <GoogleLogin
                  clientId={clientId}
                  buttonText="Sign in with Google"
                  onSuccess={onSuccess}
                  onFailure={onFailure}
                  cookiePolicy={"single_host_origin"}
                  isSignedIn={true}
                />
              </div>
            )}
          </div>
          {/* <RegisterContainer /> */}
          <div>
            <hr className="absolute px-[140px] font-medium  -translate-x-1/2 left-1/2 pt-[2px]" />
            <br />
            <RegisterContainer />
          </div>
        </div>
      </div>
    </div>
  );
}
