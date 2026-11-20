import { vaDeliverables } from "@/data/portfolioData";
import { VACard } from "@/components/Cards";
const cats = [
  "Startup KPI & Feasibility Analysis",
  "Market & Operations Research",
  "Workflow & Trello Management",
];
export default function VA() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-14">
      <span className="text-xs font-bold uppercase tracking-[.18em] text-emerald-800">
        Virtual Assistant & research projects
      </span>
      <h1 className="mt-4 text-5xl font-semibold tracking-[-.06em] text-emerald-950">
        Research made useful and actionable.
      </h1>
      <p className="mt-5 max-w-2xl leading-7 text-slate-600">
        Selected startup evaluations, market research, and workflow coordination
        deliverables.
      </p>
      {cats.map((c) => (
        <section key={c} className="mt-12">
          <h2 className="mb-5 text-2xl font-semibold tracking-tight text-emerald-950">
            {c}
          </h2>
          <div className="grid gap-5 md:grid-cols-2">
            {vaDeliverables
              .filter((v) => v.category === c)
              .map((v) => (
                <VACard key={v.title} v={v} />
              ))}
          </div>
        </section>
      ))}
    </section>
  );
}
