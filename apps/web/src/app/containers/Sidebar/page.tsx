"use client"
import React from "react";
import { useRouter } from "next/navigation";
import { create } from "zustand";
//zustand을 이용한 페이지 변경
//경로 이동과 상태업데이트 동시에 이루어짐
const useSidebarStore =  create<{
    activePage: string;
    setActivePage: (page: string) => void;
  }>((set) => ({
  activePage: "",
  setActivePage: (page: string) => set({ activePage: page }),
}));

export const SidebarContainer = () => {
  const router = useRouter();
  const { setActivePage } = useSidebarStore();

  const menuItems = [
    { name: "로그인", path: "/login" },
    { name: "이주의 금액", path: "/weekamount" },
    { name: "금액 등록", path: "/registeramount" },
    { name: "캘린더", path: "/calender" },
    { name: "코인 보드", path: "/coinboard" },
  ];

  const handleNavigation = (path: string) => {
    setActivePage(path); // 상태 업데이트
    router.push(path); // 경로 이동
  };

  return (
    <nav className="Desk:row-start-2 Desk:row-end-3 Desk:col-start-1 Desk:col-end-2 bg-background Desk:text-2xl Desk:h-full">
      <ul
        className="flex flex-col items-start ml-5 pb-3
                    Mobile:flex Mobile:flex-row Mobile:items-center Mobile:space-x-4 Mobile:text-sm"
      >
        {menuItems.map(({ name, path }) => (
          <li
            key={path}
            className="hover:bg-white p-2 rounded-lg"
            onClick={() => handleNavigation(path)}
          >
            {name}
          </li>
        ))}
      </ul>
    </nav>
  );
};
