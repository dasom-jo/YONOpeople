import type { Metadata } from "next";
import "./globals.css";
import { SidebarContainer } from "./containers/Sidebar/page";

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
        <div className="Desk:grid Desk:grid-rows-[auto,1fr,auto] Desk:grid-cols-[200px,1fr] Desk:h-screen">
          {/* Header */}
          <header className="row-start-1 row-end-2 col-span-2 bg-background text-5xl p-10 flex items-center justify-center">
            <div>YONOPEOPLE</div>
          </header>

          {/* Sidebar href 가아니라 콘텐츠만 변경 */}
          <nav className="Desk:row-start-2 Desk:row-end-3 Desk:col-start-1 Desk:col-end-2 bg-background Desk:text-2xl Desk:h-full">
            <SidebarContainer/>
          </nav>

          {/* Main */}
          <main className="row-start-2 row-end-3 col-start-2 col-end-3 bg-white p-10 flex items-center justify-center">
            {children}
          </main>

          {/* Footer */}
          <footer className="row-start-3 row-end-4 col-span-2 bg-background text-center p-4">
            © 2025 develop jo dasom
          </footer>
        </div>
      </body>
    </html>
  );
}
