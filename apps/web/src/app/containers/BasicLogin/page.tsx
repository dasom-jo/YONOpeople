import HalfInput from "../../../../../../packages/ui/src/HalfInput";
import { BasicButton } from "../../../../../../packages/ui/src/BasicButton";
const BasicLogin = () => {
  return (
    <div className="w-80 ">
      <div className="mt-8 mb-8">
        <HalfInput children={"아이디"} />
      </div>
      <div className="mt-8 mb-8">
        <HalfInput children={"비밀번호"} />
      </div>
      <div className="mt-8 mb-8">
        <BasicButton children={"로그인"} />
      </div>
    </div>
  );
};

export default BasicLogin;
