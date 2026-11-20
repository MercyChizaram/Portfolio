import { skillGroups } from "@/data/portfolioData";
export default function Skills() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-14">
      <span className="text-xs font-bold uppercase tracking-[.18em] text-emerald-800">
        Skills & tools
      </span>
      <h1 className="mt-4 text-5xl font-semibold tracking-[-.06em] text-emerald-950">
        A practical toolkit across code and operations.
      </h1>
      <p className="mt-5 max-w-2xl leading-7 text-slate-600">
        Technical skills, research capabilities, and tools used to support
        digital work.
      </p>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g) => (
          <article
            className="rounded-2xl border border-emerald-950/10 bg-white p-6 shadow-sm"
            key={g.title}
          >
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-800">
              Capabilities
            </span>
            <h2 className="my-4 text-xl font-semibold text-emerald-950">
              {g.title}
            </h2>
            <div className="flex flex-wrap gap-2">
              {g.skills.map((s) => (
                <span
                  key={s}
                  className="rounded-lg bg-emerald-50 px-3 py-2 text-xs text-emerald-950"
                >
                  {s}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
