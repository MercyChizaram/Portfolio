import type { Metadata } from "next";
import "./globals.css";
import { SiteShell } from "@/components/SiteShell";
export const metadata: Metadata = {
  title: "Nwachukwu Mercy Chizaram | Web Developer & Virtual Assistant",
  description: "Web Developer and Virtual Assistant portfolio.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#f5f7f1] font-sans text-[#203b33] antialiased print:bg-white">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
