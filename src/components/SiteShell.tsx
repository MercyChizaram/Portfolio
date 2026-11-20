"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const links = [
  ["/", "Home"],
  ["/about", "About & CV"],
  ["/skills", "Skills"],
  ["/projects/web", "Web projects"],
  ["/projects/va", "VA research"],
  ["/contact", "Contact"],
];
export function SiteShell({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[#dce4dc] bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-4">
          <Link href="/" className="text-xs font-bold tracking-[.12em]">
            MERCY CHIZARAM
            <small className="mt-1 block text-[9px] tracking-widest text-slate-500">
              WEB · OPERATIONS
            </small>
          </Link>
          <nav className="order-3 flex w-full gap-5 overflow-x-auto text-xs text-slate-600 md:order-none md:w-auto">
            {links.map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className={
                  path === href
                    ? "whitespace-nowrap font-semibold text-emerald-900"
                    : "whitespace-nowrap transition hover:text-emerald-900"
                }
              >
                {label}
              </Link>
            ))}
          </nav>
          <Link
            href="/contact"
            className="rounded-full bg-emerald-900 px-4 py-3 text-xs font-semibold text-white transition hover:bg-emerald-800"
          >
            Let’s talk ↗
          </Link>
        </div>
      </header>
      <main>{children}</main>
      <footer className="flex flex-wrap items-center justify-between gap-3 bg-emerald-50 px-5 py-7 text-xs text-slate-600">
        <span>© {new Date().getFullYear()} Nwachukwu Mercy Chizaram</span>
        <span>Nigeria · Open to remote opportunities</span>
        <Link
          href="/contact"
          className="font-semibold text-emerald-900 hover:underline"
        >
          Start a conversation ↗
        </Link>
      </footer>
    </>
  );
}
