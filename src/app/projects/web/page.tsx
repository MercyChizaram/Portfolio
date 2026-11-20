import { webProjects } from "@/data/portfolioData";
import { WebCard } from "@/components/Cards";
export default function Web() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-14">
      <span className="text-xs font-bold uppercase tracking-[.18em] text-emerald-800">
        Web development projects
      </span>
      <h1 className="mt-4 text-5xl font-semibold tracking-[-.06em] text-emerald-950">
        Interfaces built for real use.
      </h1>
      <p className="mt-5 max-w-2xl leading-7 text-slate-600">
        Selected responsive applications and web experiences.
      </p>
      <div className="mt-9 grid gap-5 md:grid-cols-2">
        {webProjects.map((p, i) => (
          <WebCard key={p.title} p={p} i={i} />
        ))}
      </div>
    </section>
  );
}
