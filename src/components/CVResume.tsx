import { cv } from "@/data/portfolioData";
export function Resume() {
  return (
    <article className="rounded-2xl border border-emerald-950/10 bg-white p-6 shadow-sm sm:p-10 print:border-0 print:p-0 print:shadow-none">
      <h2 className="text-3xl font-bold tracking-tight text-emerald-950">
        {cv.name}
      </h2>
      <p className="mt-2 text-sm font-semibold text-emerald-800">
        {cv.headline}
      </p>
      <p className="mt-3 text-sm leading-6 text-slate-600">
        {cv.locationContact}
      </p>
      <h3 className="mt-8 border-b border-emerald-100 pb-2 text-xs font-bold uppercase tracking-[.15em] text-emerald-900">
        Professional Summary
      </h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{cv.summary}</p>
      <h3 className="mt-8 border-b border-emerald-100 pb-2 text-xs font-bold uppercase tracking-[.15em] text-emerald-900">
        Work Experience
      </h3>
      {cv.experience.map((j) => (
        <section
          key={j.role}
          className="break-inside-avoid border-b border-slate-100 py-4 last:border-0"
        >
          <h4 className="font-semibold text-emerald-950">
            {j.role} — {j.organization}
          </h4>
          <p className="mt-1 text-xs text-slate-500">{j.dates}</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
            {j.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </section>
      ))}
      <h3 className="mt-8 border-b border-emerald-100 pb-2 text-xs font-bold uppercase tracking-[.15em] text-emerald-900">
        Education & Certifications
      </h3>
      {cv.education.map((x) => (
        <p key={x} className="mt-3 text-sm leading-6 text-slate-600">
          {x}
        </p>
      ))}
      <h3 className="mt-8 border-b border-emerald-100 pb-2 text-xs font-bold uppercase tracking-[.15em] text-emerald-900">
        Leadership Experience
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">
        {cv.leadership.join("; ")}
      </p>
    </article>
  );
}
