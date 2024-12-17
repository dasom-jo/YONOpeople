import { BasicButton } from "../../../../packages/ui/src/BasicButton"
import HalfInput from "../../../../packages/ui/src/HalfInput"
export default function Home() {
  return (
    <div >
      <BasicButton className="btn">버튼입니다</BasicButton>
      <HalfInput className="input">닉네임:</HalfInput>
    </div>
  );
}
