import Image from "next/image";
import Link from "next/link";
import { profile, webProjects } from "@/data/portfolioData";
import { WebCard } from "@/components/Cards";
export default function Home() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-14 md:grid-cols-[1.1fr_.9fr] md:py-20">
        <div>
          <span className="text-xs font-bold uppercase tracking-[.18em] text-emerald-800">
            Web Developer & Virtual Assistant · Nigeria
          </span>
          <h1 className="mt-6 text-5xl font-semibold leading-[.98] tracking-[-.06em] text-emerald-950 sm:text-6xl lg:text-7xl">
            Thoughtful digital work,{" "}
            <em className="font-serif font-normal text-emerald-700">
              built to move things forward.
            </em>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
            I’m {profile.name}, a Web Developer and Virtual Assistant. I build
            responsive web experiences and support research, reporting, and
            digital operations with organized workflows.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              className="rounded-full bg-emerald-900 px-5 py-4 text-sm font-semibold text-white hover:bg-emerald-800"
              href="/projects/web"
            >
              View Projects ↗
            </Link>
            <Link
              className="rounded-full border border-emerald-900/20 bg-white px-5 py-4 text-sm font-semibold text-emerald-900 hover:bg-emerald-50"
              href="/cv"
            >
              View / Download CV ↓
            </Link>
            <Link
              className="rounded-full border border-emerald-900/20 bg-white px-5 py-4 text-sm font-semibold text-emerald-900 hover:bg-emerald-50"
              href="/contact"
            >
              Hire Me ↗
            </Link>
          </div>
          <div className="mt-8 flex gap-8 text-xs leading-5 text-slate-500">
            <span>
              <b className="text-emerald-950">Web development</b>
              <br />
              Responsive interfaces
            </span>
            <span>
              <b className="text-emerald-950">Digital operations</b>
              <br />
              Research & coordination
            </span>
          </div>
        </div>
        <div className="relative mx-auto h-[25rem] w-full max-w-md overflow-hidden rounded-t-[48%] rounded-b-2xl bg-gradient-to-br from-emerald-100 to-stone-200">
          <Image
            src="/assets/profile.jpeg"
            alt="Mercy Chizaram"
            fill
            priority
            sizes="(max-width: 768px) 90vw, 40vw"
            className="object-cover object-top"
          />
          <span className="absolute bottom-4 right-4 rounded-lg bg-white/95 px-4 py-3 font-serif italic text-emerald-950">
            Web · Research · Operations
          </span>
        </div>
      </section>
      <section className="bg-emerald-50 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-[.18em] text-emerald-800">
                Selected work
              </span>
              <h2 className="mt-2 text-4xl font-semibold tracking-tight text-emerald-950">
                Projects with purpose.
              </h2>
            </div>
            <Link
              className="text-sm font-semibold text-emerald-900 underline decoration-emerald-300 underline-offset-4"
              href="/projects/web"
            >
              All web projects ↗
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {webProjects.slice(0, 2).map((p, i) => (
              <WebCard key={p.title} p={p} i={i} />
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="flex flex-col justify-between gap-5 rounded-2xl bg-emerald-950 p-8 text-white sm:flex-row sm:items-center sm:p-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-lime-300">
              Ready to collaborate?
            </span>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">
              Let’s make useful work happen.
            </h2>
            <p className="mt-2 text-sm text-emerald-100">
              Web development or virtual assistance inquiries are welcome.
            </p>
          </div>
          <Link
            className="rounded-full bg-lime-300 px-5 py-4 text-center text-sm font-bold text-emerald-950"
            href="/contact"
          >
            Hire Me ↗
          </Link>
        </div>
      </section>
    </>
  );
}
