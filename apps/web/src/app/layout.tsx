import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "yonopeople",
  description: "Household Ledger and Bitcoin Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <header>
          <div>YONOPEOPLE</div>
          <nav>
            <ul>
              <li>
                <a href="/login">로그인</a>
              </li>
              <li>
                <a href="/weekamount">이주의 금액</a>
              </li>
              <li>
                <a href="/registeramount">금액등록</a>
              </li>
              <li>
                <a href="/calender">캘린더</a>
              </li>
              <li>
                <a href="/coinboard">코인 보드</a>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer>© 2025 develop jo dasom</footer>
      </body>
    </html>
  );
}
