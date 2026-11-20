"use client";
import Image from "next/image";
import type { Web, VA } from "@/data/portfolioData";
export function WebCard({ p, i }: { p: Web; i: number }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-emerald-950/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-56 bg-gradient-to-br from-emerald-100 to-stone-200">
        <Image
          src={p.image}
          alt={p.title + " screenshot"}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
        <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-2 text-xs font-semibold text-emerald-950">
          0{i + 1}
        </span>
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span
              key={t}
              className="rounded-full bg-emerald-50 px-3 py-1.5 text-[11px] text-emerald-900"
            >
              {t}
            </span>
          ))}
        </div>
        <h3 className="mt-4 text-xl font-semibold tracking-tight text-emerald-950">
          {p.title}
        </h3>
        <p className="mt-2 text-sm leading-7 text-slate-600">{p.description}</p>
        <a
          className="mt-4 inline-flex border-b border-emerald-700 pb-1 text-sm font-semibold text-emerald-900 hover:text-emerald-700"
          href={p.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Preview ↗
        </a>
      </div>
    </article>
  );
}
export function VACard({ v }: { v: VA }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-emerald-950/10 bg-white shadow-sm">
      <div className="relative h-40 bg-emerald-50 p-4">
        {v.image ? (
          <Image
            src={v.image}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        ) : (
          <div className="h-full rounded-lg border border-emerald-950/10 bg-white p-4 text-[10px] tracking-widest text-emerald-800">
            SHEET · PREVIEW
            <div className="mt-3 grid grid-cols-4 gap-1">
              {Array.from({ length: 12 }, (_, i) => (
                <i
                  key={i}
                  className="h-4 rounded-sm bg-emerald-50 even:bg-emerald-100"
                />
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="p-5">
        <span className="text-[11px] font-semibold text-emerald-800">
          {v.category}
        </span>
        <h3 className="mt-2 text-lg font-semibold leading-snug text-emerald-950">
          {v.title}
        </h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">{v.summary}</p>
        <div className="mt-4 flex flex-wrap items-center gap-4">
          {v.url && (
            <a
              className="rounded-full bg-emerald-900 px-4 py-3 text-xs font-semibold text-white hover:bg-emerald-800"
              href={v.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Spreadsheet / Report ↗
            </a>
          )}
          {v.pdfPath && (
            <a
              className="text-sm font-semibold text-emerald-900 underline"
              href={v.pdfPath}
            >
              PDF ↓
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
