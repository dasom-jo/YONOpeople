import BasicLogin from "../containers/BasicLogin/page";
import LoginScreen from "../containers/KakaoLogin/page";
import SignIn from "../containers/SignIn/page";

const Login = () => {
  return (
    <div className="Desk:grid grid-cols-2 h-screen gap-4">
      {/* 왼쪽 영역 */}
      <div className="flex flex-col gap-4 Desk:mr-40">
        <div>
          <BasicLogin />
        </div>
        <div>
          <LoginScreen />
        </div>
      </div>
      {/* 오른쪽 영역 */}
      <div className="flex flex-col Desk:justify-start Desk:items-center
                      ">
        <SignIn />
      </div>
    </div>
  );
};

export default Login;
