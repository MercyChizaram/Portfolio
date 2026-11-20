"use client";
import { useState, type FormEvent } from "react";
import { profile } from "@/data/portfolioData";
export default function Contact() {
  const [s, S] = useState(false);
  function send(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    location.href =
      "mailto:" +
      profile.email +
      "?subject=" +
      encodeURIComponent("Portfolio inquiry — " + d.get("service")) +
      "&body=" +
      encodeURIComponent(
        "Name: " +
          d.get("name") +
          "\nService: " +
          d.get("service") +
          "\n\n" +
          d.get("message"),
      );
    S(true);
  }
  return (
    <section className="mx-auto max-w-6xl px-5 py-14">
      <span className="text-xs font-bold uppercase tracking-[.18em] text-emerald-800">
        Contact / Hire Me
      </span>
      <h1 className="mt-4 text-5xl font-semibold tracking-[-.06em] text-emerald-950">
        Let’s talk about what you need.
      </h1>
      <p className="mt-5 max-w-2xl leading-7 text-slate-600">
        I am open to internships, freelance work, and collaboration
        opportunities. Feel free to reach out anytime.
      </p>
      <div className="mt-9 grid gap-6 md:grid-cols-[.9fr_1.1fr]">
        <aside className="rounded-2xl bg-emerald-950 p-7 text-white">
          <h2 className="text-2xl font-semibold">Get in touch</h2>
          <p className="mt-3 text-sm leading-6 text-emerald-100">
            Nigeria · Open to Remote Opportunities
          </p>
          <div className="mt-8 grid gap-5 text-sm">
            <div>
              <small className="mb-1 block text-xs text-emerald-200">
                Email
              </small>
              <a href={"mailto:" + profile.email}>{profile.email}</a>
            </div>
            <div>
              <small className="mb-1 block text-xs text-emerald-200">
                Phone
              </small>
              <a href={"tel:" + profile.phone}>{profile.phone}</a>
            </div>
            <div>
              <small className="mb-1 block text-xs text-emerald-200">
                LinkedIn
              </small>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/mercy-chizaram-dev ↗
              </a>
            </div>
            <div>
              <small className="mb-1 block text-xs text-emerald-200">
                WhatsApp
              </small>
              <a
                href="https://wa.me/2349034782003"
                target="_blank"
                rel="noopener noreferrer"
              >
                Message on WhatsApp ↗
              </a>
            </div>
            <div>
              <small className="mb-1 block text-xs text-emerald-200">
                Facebook
              </small>
              <a
                href="https://www.facebook.com/share/1P28pQsW32/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect on Facebook ↗
              </a>
            </div>
          </div>
        </aside>
        <form
          className="rounded-2xl border border-emerald-950/10 bg-white p-6 shadow-sm sm:p-8"
          onSubmit={send}
        >
          <div className="mb-5 grid gap-2">
            <label className="text-sm font-semibold" htmlFor="name">
              Your name
            </label>
            <input
              className="rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100"
              id="name"
              name="name"
              required
            />
          </div>
          <div className="mb-5 grid gap-2">
            <label className="text-sm font-semibold" htmlFor="service">
              Inquiry type
            </label>
            <select
              className="rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none focus:border-emerald-700"
              id="service"
              name="service"
            >
              <option>Web Development</option>
              <option>Virtual Assistance</option>
              <option>Both</option>
            </select>
          </div>
          <div className="mb-5 grid gap-2">
            <label className="text-sm font-semibold" htmlFor="message">
              Message
            </label>
            <textarea
              className="min-h-32 rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100"
              id="message"
              name="message"
              required
            />
          </div>
          <button className="rounded-full bg-emerald-900 px-5 py-4 text-sm font-semibold text-white hover:bg-emerald-800">
            Send inquiry ↗
          </button>
          {s && (
            <p className="mt-4 text-sm text-slate-500">
              Your email app should open with this inquiry ready to send.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
