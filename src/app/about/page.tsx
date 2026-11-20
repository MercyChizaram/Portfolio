import Image from "next/image";
import Link from "next/link";
import { Resume } from "@/components/CVResume";
export default function About() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pb-8 pt-14">
        <span className="text-xs font-bold uppercase tracking-[.18em] text-emerald-800">
          About & CV
        </span>
        <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-[-.06em] text-emerald-950 sm:text-6xl">
          A builder’s mindset, with an operator’s care.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
          My journey combines hands-on web development with research,
          coordination, and digital operations.
        </p>
      </section>
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-10 md:grid-cols-[.7fr_1.3fr]">
        <div className="relative mx-auto h-80 w-full max-w-sm overflow-hidden rounded-t-[9rem] rounded-b-xl bg-emerald-100">
          <Image
            src="/assets/about.jpeg"
            alt="Mercy Chizaram"
            fill
            sizes="(max-width: 768px) 90vw, 30vw"
            className="object-cover object-top"
          />
        </div>
        <div className="space-y-5 text-sm leading-7 text-slate-600">
          <h2 className="text-2xl font-semibold text-emerald-950">
            Web development journey
          </h2>
          <p>
            As an aspiring Frontend Developer, I am passionate about creating
            responsive, user-friendly, and visually engaging web experiences. I
            enjoy transforming ideas into functional websites through clean
            code, thoughtful design, and attention to detail. My experience
            building personal projects has strengthened my understanding of
            modern frontend development and responsive design principles.
          </p>
          <p>
            I am committed to writing maintainable code, continuously improving
            my problem-solving skills, and staying up to date with evolving web
            technologies. Every project I complete challenges me to grow as a
            developer and reinforces my passion for creating digital solutions
            that are both practical and visually appealing.
          </p>
          <p>
            As I continue building my career, I am eager to contribute to
            real-world projects, collaborate with experienced professionals, and
            expand my expertise beyond frontend development while delivering
            value through creativity, dedication, and continuous improvement.
          </p>
          <h2 className="pt-4 text-2xl font-semibold text-emerald-950">
            Virtual Assistance & Digital Operations
          </h2>
          <p>
            At Jenga Tech, I evaluate early-stage startup app KPIs, market
            readiness, and competitor benchmarks across B2B apps, compiling
            Google Sheets trackers and executive Google Docs reports. I manage
            calendars, Trello boards, and multi-task research deliverables. I
            completed foundational VA certification and advanced training in
            2026.
          </p>
          <p>
            Video Annotation Specialist qualification at Softechub Limited
            (Encord/VLA workflows).
          </p>
        </div>
      </section>
      <section className="bg-emerald-50 py-14">
        <div className="mx-auto max-w-5xl px-5">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-3xl font-semibold tracking-tight text-emerald-950">
              Curriculum Vitae (CV)
            </h2>
            <Link
              className="rounded-full bg-emerald-900 px-5 py-3 text-sm font-semibold text-white"
              href="/cv"
            >
              Download / Print CV ↗
            </Link>
          </div>
          <Resume />
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="flex flex-wrap items-center justify-between gap-5 rounded-2xl bg-emerald-950 p-8 text-white">
          <h2 className="text-2xl font-semibold">
            Open to remote opportunities.
          </h2>
          <Link
            className="rounded-full bg-lime-300 px-5 py-3 text-sm font-bold text-emerald-950"
            href="/contact"
          >
            Hire Me ↗
          </Link>
        </div>
      </section>
    </>
  );
}
