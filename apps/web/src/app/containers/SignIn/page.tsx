import { BasicButton } from "../../../../../../packages/ui/src/BasicButton";
import HalfInput from "../../../../../../packages/ui/src/HalfInput";

const SignIn = () => {
  return (
    <div className="w-80 h-80">
      <div className="mt-8 mb-8">
        <HalfInput children={"아이디"} />
      </div>
      <div className="mt-8 mb-8">
        <HalfInput children={"이메일"} />
      </div>
      <div className="mt-8 mb-8">
        <HalfInput children={"비밀번호"} />
      </div>
      <div className="mt-12 mb-8">
        <BasicButton children={"회원가입"} />
      </div>
    </div>
  );
};

export default SignIn;
