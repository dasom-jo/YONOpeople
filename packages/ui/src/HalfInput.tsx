import { ReactNode } from "react";

interface HalfInputProps {
  children: ReactNode;
  className?: string; // 유연하게 커스터마이징 가능
}

const HalfInput = ({ children }: HalfInputProps) => {
  return (
    <div className="flex items-center">
      <label className="bg-basicbtn font-bold px-8 py-4 w-32 rounded-l-lg">
        {children}
      </label>
      <input
        type="text"
        className="bg-basicgray px-8 py-4 w-48 rounded-r-lg"
      />
    </div>
  );
};

export default HalfInput;
