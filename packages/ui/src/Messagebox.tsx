import { ReactNode } from "react";

interface MessageBoxProps {
  children: ReactNode;
  className?: string; // 유연하게 커스터마이징 가능
}

const MessageBox = ({ children }: MessageBoxProps) => {
  return (
    <div className="flex items-center m-4">
      <div className="relative bg-blue-100 text-black p-4 rounded-lg max-w-xs text-sm leading-relaxed">
        {children}
        <div className="absolute top-2 left-[-8px] w-0 h-0 border-t-8 border-r-8 border-b-8 border-t-transparent border-b-transparent border-r-blue-100"></div>
      </div>
    </div>
  );
};

export default MessageBox;
