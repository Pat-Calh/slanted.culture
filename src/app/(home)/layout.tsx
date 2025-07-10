import type { ReactNode } from "react";
import NavBar from "../NavBar";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen flex flex-col font-sans">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
