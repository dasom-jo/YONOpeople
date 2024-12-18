import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string; // 유연하게 커스터마이징 가능
}

export const BasicButton = ({ children }: ButtonProps) => {
  return (
    <button className="bg-basicbtn p-5 w-64 border-spacing-1 rounded-xl active:bg-clickbtn">
      {children}
    </button>
  );
};

//버튼 사용법
//<BasicButton className="btn">버튼입니다</BasicButton>