import { BasicButton } from "../../../../packages/ui/src/BasicButton"
import HalfInput from "../../../../packages/ui/src/HalfInput"
import MessageBox from "../../../../packages/ui/src/Messagebox"
import { KakaoIcon } from "../../../../packages/ui/src/KakaoIcon"
import { CategoryBtn } from "../../../../packages/ui/src/CategoryBtn"


export default function Home() {
  return (
    <div >
      <BasicButton className="btn">버튼입니다</BasicButton>
      <HalfInput className="input">닉네임:</HalfInput>
      <MessageBox>요노피플은 오로지 최소한의 생존을 위한 지출만 장려하며 카테고리 외의 물품은 모두 사치품 취급합니다</MessageBox>
      <KakaoIcon/>
      <CategoryBtn/>
    </div>
  );
}