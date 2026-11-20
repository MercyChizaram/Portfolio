"use client";
import { Resume } from "@/components/CVResume";
export default function CV() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-10">
      <div className="mb-5 print:hidden">
        <button
          className="rounded-full bg-emerald-900 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-800"
          onClick={() => window.print()}
        >
          Download / Print CV
        </button>
        <p className="mt-2 text-xs text-slate-500">
          Use the print dialog to save this CV as a PDF.
        </p>
      </div>
      <Resume />
    </section>
  );
}
