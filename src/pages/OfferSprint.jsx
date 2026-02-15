import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  FaBolt,
  FaCheckCircle,
  FaClipboardCheck,
  FaCompass,
  FaLaptopCode,
  FaMagic,
  FaQuestionCircle,
  FaRegClock,
  FaShieldAlt,
  FaTachometerAlt,
  FaTools,
  FaTimesCircle,
  FaFlagCheckered,
} from "react-icons/fa";
import TitleHeader from "../shared-UI/TitleHeader.jsx";
import SocialLinks from "../components/SocialLinks/SocialLinks.jsx";
import Footer from "../components/Footer/Footer.jsx";

/**
 * Two offers, intentionally distinct, no contradictions.
 * Rescue = smaller scope, shorter timeline, lower price.
 * 10-day Sprint = bigger scope, more room for polish, still fixed scope.
 */
const PACKAGES = [
  {
    id: "rescue",
    name: "7-Day Frontend Rescue",
    badge: "Fast unblock",
    icon: FaBolt,
    durationLabel: "7 business days",
    price: "EUR 2,000",
    payment: "50/50 split",
    recommended: false,
    bestFor:
      "Urgent unblock for one small, clearly-defined UI bottleneck, low integration risk, fully testable within a week.",
    outcome:
      "You get shippable fixes with full state coverage and a clean handoff, without scope creep.",
    ctaHref: "mailto:1mognia@gmail.com?subject=7-Day%20Rescue%20Triage",
    ctaLabel: "Request 7-Day Rescue",
    includes: [
      "Day 0 scope lock (one lane, fixed deliverables)",
      "One workflow only (max 2 screens), swaps allowed, additions not allowed",
      "All key UI states covered, loading, empty, validation, error",
      "Edge-case pass on agreed scope",
      "Handoff doc + walkthrough",
    ],
  },
  {
    id: "sprint10",
    name: "10-Day Frontend Offer Sprint",
    badge: "Best balance",
    icon: FaCompass,
    durationLabel: "10 business days",
    price: "EUR 3,000",
    payment: "50/50 split",
    recommended: true,
    bestFor:
      "Production-ready UI slice with more room for integration, polish, and stability, still fixed scope and predictable delivery.",
    outcome:
      "You get end-to-end delivery with stronger polish and fewer regressions after merge.",
    ctaHref: "mailto:1mognia@gmail.com?subject=10-Day%20Offer%20Sprint%20Triage",
    ctaLabel: "Request 10-Day Sprint",
    includes: [
      "Day 0 scope lock (one lane, fixed deliverables)",
      "Up to 1 feature slice (typically 1–3 screens), integration supported",
      "UX polish + targeted performance pass",
      "Clean PRs with delivery notes and rollout risks",
      "Handoff doc + walkthrough",
    ],
  },
];

const SERVICE_LANES = [
  {
    title: "Feature Delivery",
    label: "Ship one workflow",
    icon: FaTools,
    description:
      "One focused UI slice, end-to-end, with real user-ready states and clean handoff.",
    bullets: [
      "1–3 screens or one complete feature slice",
      "Loading, empty, validation, and error states",
      "Clean PRs with useful notes for your team",
    ],
  },
  {
    title: "UX + Product Polish",
    label: "Make it feel finished",
    icon: FaMagic,
    description:
      "Take a core surface from almost good to consistently solid, without a redesign.",
    bullets: [
      "Fix friction in key user journeys",
      "Improve hierarchy, spacing, and clarity",
      "Align interaction details across the surface",
    ],
  },
  {
    title: "Stability + Performance",
    label: "Reliability first",
    icon: FaTachometerAlt,
    description:
      "Remove rough edges that slow the product and create support tickets.",
    bullets: [
      "Audit and reduce avoidable re-renders",
      "Tighten data fetching and UI state handling",
      "Harden behavior around edge cases",
    ],
  },
];

const PROCESS_BY_PACKAGE_ID = {
  rescue: [
    {
      step: "01",
      title: "Scope Lock",
      timeline: "Day 0",
      icon: FaClipboardCheck,
      outcome: "Clear acceptance criteria, tight scope, no ambiguity.",
      detail:
        "We lock one small scope that can be fully validated inside 7 days, otherwise we do not start.",
    },
    {
      step: "02",
      title: "Build Sprint",
      timeline: "Days 1–4",
      icon: FaTools,
      outcome: "Fast implementation with daily async updates.",
      detail:
        "You get PRs early, daily progress updates, and quick alignment only when blockers appear.",
    },
    {
      step: "03",
      title: "Quality Pass",
      timeline: "Days 5–6",
      icon: FaShieldAlt,
      outcome: "States, edge cases, stability tightened on shipped scope.",
      detail:
        "Polish, bug fixes, state coverage, and edge-case hardening for the agreed scope.",
    },
    {
      step: "04",
      title: "Handoff",
      timeline: "Day 7",
      icon: FaFlagCheckered,
      outcome: "Clean handoff, your team can continue confidently.",
      detail:
        "Short handoff doc, walkthrough, risks, and clear next steps, no knowledge black hole.",
    },
  ],
  sprint10: [
    {
      step: "01",
      title: "Scope Lock",
      timeline: "Day 0",
      icon: FaClipboardCheck,
      outcome: "Clear acceptance criteria, fixed scope, predictable delivery.",
      detail:
        "We define goals, acceptance criteria, and constraints, and lock scope before coding starts.",
    },
    {
      step: "02",
      title: "Build Sprint",
      timeline: "Days 1–7",
      icon: FaTools,
      outcome: "Focused delivery with daily async alignment.",
      detail:
        "PRs land continuously, daily async updates, and fast feedback loops with your team.",
    },
    {
      step: "03",
      title: "Quality Pass",
      timeline: "Days 8–9",
      icon: FaShieldAlt,
      outcome: "Polished behavior across critical user states and flows.",
      detail:
        "Polish, bug fixes, edge-case handling, and a targeted performance pass on shipped scope.",
    },
    {
      step: "04",
      title: "Handoff",
      timeline: "Day 10",
      icon: FaFlagCheckered,
      outcome: "Your team keeps momentum after merge.",
      detail:
        "Walkthrough, delivery notes, rollout risks, and clear next steps for continued work.",
    },
  ],
};

const DEFINITION_OF_DONE = [
  "PRs merged, or ready-to-merge with clear review notes",
  "All key UI states covered, loading, empty, validation, error",
  "Edge-case pass on the shipped scope",
  "Short handoff doc, what changed, why, risks, next steps",
  "Walkthrough call or async Loom-style walkthrough, your choice",
];

const WHAT_TO_SEND = [
  "Repo link, staging link (if available)",
  "1–3 priority items, bugs, or the workflow to ship",
  "Design system notes, component library, constraints",
  "Deadline (if any), and who can approve scope lock",
];


const PROJECTS = [
  {
    name: "OfferLog",
    image: "/projects/offerLog.webp",
    summary:
      "Production-grade personal CRM for job hunting, dashboards, strong auth, deterministic analytics.",
    links: [
      { label: "Live Demo", href: "https://offerlog.mognia.dev" },
      { label: "Repository", href: "https://github.com/mognia/offerlog" },
    ],
  },
  {
    name: "JD Roaster",
    image: "/projects/jdRoaster.webp",
    summary:
      "JD quality tool, configurable rule engine, receipts, bidirectional navigation in report UI.",
    links: [
      { label: "Live Demo", href: "https://jdroaster.mognia.dev" },
      { label: "Repository", href: "https://github.com/mognia/jdroaster" },
    ],
  },
      {
        name: "Mrello",
        image: "/projects/mrello.webp",
        summary: "Task management app with practical board workflows and clean interaction patterns.",
        links: [
                  { label: "Live Demo", href: "https://mrello-i8u5.vercel.app/" },
            { label: "Repository", href: "https://github.com/mognia/mrello" }
        ],
    },
];

const FAQS = [
  {
    category: "Choosing the right option",
    icon: FaQuestionCircle,
    question: "Which one should we pick, Rescue or 10-Day Sprint?",
    answer:
      "Pick Rescue if the scope is small and urgent, one workflow, one bottleneck, one week. Pick the 10-Day Sprint if there is integration risk, more polish needed, or you want fewer regressions after merge.",
  },
  {
    category: "Stack & Design System",
    icon: FaLaptopCode,
    question: "Can you work inside our existing design system?",
    answer:
      "Yes. I ship inside your components and patterns, I only introduce new patterns when they solve a clear product problem.",
  },
  {
    category: "Scope Management",
    icon: FaCompass,
    question: "What happens if priorities change mid-sprint?",
    answer:
      "Scope stays locked. If priorities shift, we swap items with similar effort, timeline and quality remain predictable.",
  },
  {
    category: "Communication",
    icon: FaRegClock,
    question: "How much meeting time is required?",
    answer:
      "Minimal. Scope lock, optional check-in if needed, and a handoff walkthrough. Most communication is async.",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.45 },
};

const MotionSection = motion.section;
const MotionArticle = motion.article;

const OfferSprint = () => {
  const [selectedId, setSelectedId] = useState("sprint10");

  const selectedPackage = useMemo(
    () => PACKAGES.find((p) => p.id === selectedId) || PACKAGES[1],
    [selectedId]
  );

  const sprintProcess = PROCESS_BY_PACKAGE_ID[selectedPackage.id];

  return (
    <>
      <main className="w-full mt-20 h-full md:px-20 px-5 text-white">
        {/* HERO */}
        <MotionSection
          {...fadeInUp}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#101113] p-6 md:p-10"
        >
          <div className="pointer-events-none absolute -top-24 -right-20 h-64 w-64 rounded-full bg-[#27beb3]/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-[#1c7287]/30 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center rounded-full border border-[#27beb3]/50 bg-[#27beb3]/10 px-4 py-1.5 text-xs md:text-sm text-[#b7f6f0]">
                Fixed-scope delivery, Rescue (7 days) or Sprint (10 days)
              </div>

              <h1 className="mt-4 text-3xl md:text-5xl font-semibold leading-tight">
                Ship a production-ready UI slice in{" "}
                <span className="text-[#27beb3]">7 or 10 business days</span>
              </h1>

              <p className="mt-5 text-[#d3d3d3] text-base md:text-lg leading-relaxed max-w-2xl">
                For agencies and B2B SaaS teams that need senior frontend execution, without hiring delays.
                Fixed scope, clear acceptance criteria, clean PRs.
              </p>

              <div className="mt-6 grid gap-3 text-sm md:text-base text-[#d3d3d3]">
                <p>• React, Next.js, TypeScript first, Angular support when needed</p>
                <p>• UX states and edge-case handling included</p>
                <p>• EMEA-friendly timezone (Istanbul, UTC+3)</p>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#packages"
                  className="rounded-xl border border-[#27beb3] bg-[#27beb3] px-5 py-3 text-center text-sm md:text-base font-semibold text-black transition hover:bg-[#1ec5bb]"
                >
                  Pick Rescue or Sprint
                </a>
                <a
                  href={selectedPackage.ctaHref}
                  className="rounded-xl border border-white/20 px-5 py-3 text-center text-sm md:text-base font-semibold text-white transition hover:border-[#27beb3] hover:text-[#27beb3]"
                >
                  Email scope for triage
                </a>
              </div>
            </div>

            {/* SNAPSHOT, shows selected */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-white/15 bg-black/35 p-5 md:p-6">
                <p className="text-[#27beb3] text-xs md:text-sm tracking-wide uppercase">
                  Selected Snapshot
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {PACKAGES.map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setSelectedId(p.id)}
                      className={`rounded-full px-3 py-1 text-xs font-semibold transition border ${
                        selectedId === p.id
                          ? "border-[#27beb3] bg-[#27beb3]/15 text-[#b7f6f0]"
                          : "border-white/15 bg-white/5 text-[#bdbdbd] hover:border-[#27beb3]/60"
                      }`}
                    >
                      {p.id === "rescue" ? "7-Day Rescue" : "10-Day Sprint"}
                    </button>
                  ))}
                </div>

                <div className="mt-4 space-y-3 text-sm md:text-base">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[#a7a7a7]">Option</span>
                    <span className="font-semibold">{selectedPackage.name}</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[#a7a7a7]">Duration</span>
                    <span className="font-semibold">{selectedPackage.durationLabel}</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[#a7a7a7]">Fixed fee</span>
                    <span className="font-semibold">{selectedPackage.price}</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[#a7a7a7]">Payment</span>
                    <span className="font-semibold">{selectedPackage.payment}</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[#a7a7a7]">Delivery</span>
                    <span className="font-semibold">PRs + handoff doc</span>
                  </div>
                </div>

                <div className="mt-6 rounded-xl border border-[#27beb3]/30 bg-[#27beb3]/10 p-4 text-sm text-[#d8fffc]">
                  {selectedPackage.bestFor}
                </div>
              </div>
            </div>
          </div>
        </MotionSection>

        {/* LANES */}
        <section className="mt-16" id="lanes">
          <TitleHeader title="Pick a Lane" sub="🚀 One lane, fixed scope" />
          <p className="mx-auto mt-4 max-w-3xl text-center text-sm md:text-base text-[#b9b9b9] leading-relaxed">
            You choose one lane based on your current bottleneck. We lock scope on Day 0 so delivery stays predictable.
          </p>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {SERVICE_LANES.map((lane) => {
              const LaneIcon = lane.icon;
              return (
                <MotionArticle
                  {...fadeInUp}
                  key={lane.title}
                  className="group rounded-3xl border border-white/10 bg-[#141416] p-5 md:p-6 transition hover:border-[#27beb3]/40"
                >
                  <div className="flex items-start gap-4">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-[#27beb3]/35 bg-[#27beb3]/10 text-[#9ff5ee]">
                      <LaneIcon className="text-lg" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.14em] text-[#86ded8]">
                        {lane.label}
                      </p>
                      <h3 className="mt-1 text-xl font-semibold">{lane.title}</h3>
                    </div>
                  </div>

                  <p className="mt-4 text-[#b8b8b8] leading-relaxed">{lane.description}</p>
                  <ul className="mt-5 space-y-2.5 text-sm">
                    {lane.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-3 rounded-xl border border-white/10 bg-black/20 px-3 py-2.5 text-[#dbdbdb]"
                      >
                        <FaCheckCircle className="mt-0.5 shrink-0 text-[#27beb3]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </MotionArticle>
              );
            })}
          </div>
        </section>

        {/* PACKAGES */}
        <section className="mt-16" id="packages">
          <TitleHeader title="Rescue vs 10-Day Sprint" sub="💶 Two options, no confusion" />
          <p className="mx-auto mt-4 max-w-3xl text-center text-sm md:text-base text-[#b9b9b9] leading-relaxed">
            Rescue is for urgent, smaller scope. The 10-day sprint is for bigger scope and stronger polish,
            still fixed scope, still predictable.
          </p>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {PACKAGES.map((p) => {
              const Icon = p.icon;
              const isActive = selectedId === p.id;

              return (
                <MotionArticle
                  {...fadeInUp}
                  key={p.id}
                  className={`rounded-3xl border bg-[#141416] p-6 transition ${
                    p.recommended
                      ? "border-[#27beb3] shadow-[0_0_0_1px_rgba(39,190,179,0.45)]"
                      : "border-white/10"
                  } ${isActive ? "ring-1 ring-[#27beb3]/60" : ""}`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-[#27beb3]/30 bg-[#27beb3]/10 text-[#9cf3ed]">
                        <Icon />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.12em] text-[#87dfd9]">
                          {p.badge}
                        </p>
                        <h3 className="mt-1 text-xl font-semibold">{p.name}</h3>
                      </div>
                    </div>
                    {p.recommended ? (
                      <span className="rounded-full border border-[#27beb3]/50 bg-[#27beb3]/10 px-3 py-1 text-xs text-[#9df3ec]">
                        Recommended
                      </span>
                    ) : null}
                  </div>

                  <div className="mt-4 flex items-baseline justify-between gap-4">
                    <p className="text-3xl font-bold text-[#27beb3]">{p.price}</p>
                    <p className="text-sm text-[#bdbdbd]">{p.durationLabel}</p>
                  </div>

                  <p className="mt-3 text-sm text-[#cfcfcf] leading-relaxed">{p.bestFor}</p>

                  <ul className="mt-5 space-y-2.5 text-sm">
                    {p.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 rounded-xl border border-white/10 bg-black/20 px-3 py-2.5 text-[#dadada]"
                      >
                        <FaCheckCircle className="mt-0.5 shrink-0 text-[#27beb3]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 rounded-xl border border-[#27beb3]/20 bg-[#27beb3]/5 px-3 py-2 text-xs text-[#cbfffb]">
                    {p.outcome}
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {/* <button
                      type="button"
                      onClick={() => setSelectedId(p.id)}
                      className="rounded-xl border border-white/20 px-4 py-3 text-sm font-semibold text-white transition hover:border-[#27beb3] hover:text-[#27beb3]"
                    >
                      Select
                    </button> */}
                    <a
                      href={p.ctaHref}
                      className="inline-flex items-center justify-center rounded-xl bg-[#27beb3] px-4 py-3 text-sm font-semibold text-black transition hover:bg-[#1ec5bb]"
                    >
                      {p.ctaLabel}
                    </a>
                  </div>

                  <p className="mt-3 text-xs text-[#a7a7a7]">
                    Payment: {p.payment}. Scope changes require swaps of equal effort.
                  </p>
                </MotionArticle>
              );
            })}
          </div>
        </section>

        {/* PROCESS, reflects selected */}
        <section className="mt-16">
          <TitleHeader title="How It Works" sub="⚙️ Timeline for your selected option" />
          <p className="mx-auto mt-4 max-w-3xl text-center text-sm md:text-base text-[#b9b9b9] leading-relaxed">
            Currently selected: <span className="text-white font-semibold">{selectedPackage.name}</span>.
            The timeline below matches the selected option, so the math always adds up.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {sprintProcess.map((item) => {
              const StepIcon = item.icon;
              return (
                <MotionArticle
                  {...fadeInUp}
                  key={item.step}
                  className="rounded-2xl border border-white/10 bg-[#141416] p-5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-[#27beb3]/30 bg-[#27beb3]/10 text-[#9df4ed]">
                        <StepIcon />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.12em] text-[#84ddd7]">
                          {item.timeline}
                        </p>
                        <h3 className="mt-1 text-lg font-semibold">{item.title}</h3>
                      </div>
                    </div>
                    <div className="text-sm font-bold text-[#27beb3]">{item.step}</div>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-[#cfcfcf]">{item.detail}</p>
                  <div className="mt-4 rounded-xl border border-[#27beb3]/20 bg-[#27beb3]/5 px-3 py-2 text-xs text-[#c9fffb]">
                    {item.outcome}
                  </div>
                </MotionArticle>
              );
            })}
          </div>
        </section>

        {/* DONE + START FAST */}
        <section className="mt-16">
          <TitleHeader title="Definition of Done" sub="✅ Delivered means delivered" />
          <div className="mt-8 grid gap-5 lg:grid-cols-12">
            <div className="lg:col-span-6 rounded-3xl border border-white/10 bg-[#141416] p-6">
              <p className="text-xs uppercase tracking-[0.12em] text-[#87dfd9]">Definition of Done</p>
              <ul className="mt-5 space-y-2.5 text-sm">
                {DEFINITION_OF_DONE.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-white/10 bg-black/20 px-3 py-2.5 text-[#dadada]"
                  >
                    <FaCheckCircle className="mt-0.5 shrink-0 text-[#27beb3]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 rounded-2xl border border-[#27beb3]/25 bg-[#27beb3]/5 p-4 text-sm text-[#d4fffb]">
                Lower failure rate comes from ruthless scope lock, not motivation speeches.
              </div>
            </div>

            <div className="lg:col-span-6 rounded-3xl border border-white/10 bg-[#141416] p-6">
              <p className="text-xs uppercase tracking-[0.12em] text-[#87dfd9]">Send this for triage</p>
              <ul className="mt-5 space-y-2.5 text-sm">
                {WHAT_TO_SEND.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-white/10 bg-black/20 px-3 py-2.5 text-[#dadada]"
                  >
                    <FaCheckCircle className="mt-0.5 shrink-0 text-[#27beb3]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href={selectedPackage.ctaHref}
                className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-[#27beb3] px-4 py-3 text-sm font-semibold text-black transition hover:bg-[#1ec5bb]"
              >
                Email scope for triage, using {selectedPackage.id === "rescue" ? "7-Day Rescue" : "10-Day Sprint"}
              </a>
            </div>
          </div>
        </section>


        {/* PROOF */}
        <section className="mt-16">
          <TitleHeader title="Work Samples" sub="🛠️ Proof, not promises" />
                   <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {PROJECTS.map((project) => (
 <MotionArticle
                                {...fadeInUp}
                                key={project.name}
                                className="overflow-hidden rounded-2xl border border-white/10 bg-[#141416]"
                            >
                                <div className="aspect-video w-full bg-black/30">
                                    <img
                                        src={project.image}
                                        alt={`${project.name} preview`}
                                        className="h-full w-full object-cover"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="p-5">
                                    <h3 className="text-xl font-semibold">{project.name}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-[#c9c9c9]">{project.summary}</p>
                                    <div className="mt-5 flex flex-wrap gap-3">
                                        {project.links.map((link) => (
                                            <a
                                                key={link.href}
                                                href={link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="rounded-lg border border-white/20 px-3 py-2 text-xs font-semibold text-white transition hover:border-[#27beb3] hover:text-[#27beb3]"
                                            >
                                                {link.label}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </MotionArticle>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-16">
          <TitleHeader title="FAQ" sub="❓Decide fast" />
          <p className="mx-auto mt-4 max-w-3xl text-center text-sm md:text-base text-[#b9b9b9] leading-relaxed">
            Straight answers, so you can decide without extra calls.
          </p>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {FAQS.map((faq, index) => {
              const FaqIcon = faq.icon;
              return (
                <MotionArticle
                  {...fadeInUp}
                  key={faq.question}
                  className="rounded-3xl border border-white/10 bg-[#141416] p-5"
                >
                  <details open={index === 0} className="group">
                    <summary className="cursor-pointer list-none">
                      <div className="flex items-start gap-3">
                        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-[#27beb3]/30 bg-[#27beb3]/10 text-[#9cf4ee]">
                          <FaqIcon />
                        </div>
                        <div className="flex-1">
                          <p className="text-xs uppercase tracking-[0.12em] text-[#83ddd7]">
                            {faq.category}
                          </p>
                          <p className="mt-1 pr-4 text-base font-semibold text-white">
                            {faq.question}
                          </p>
                        </div>
                        <span className="mt-1 text-xl text-[#7edbd5] transition-transform group-open:rotate-45">
                          +
                        </span>
                      </div>
                    </summary>
                    <p className="mt-4 rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm leading-relaxed text-[#cfcfcf]">
                      {faq.answer}
                    </p>
                  </details>
                </MotionArticle>
              );
            })}
          </div>
        </section>

        {/* FINAL CTA */}
        <MotionSection
          {...fadeInUp}
          className="mt-16 mb-10 rounded-3xl border border-[#27beb3]/35 bg-[#112223] p-6 md:p-10"
          id="contact"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-white">
            Ready to ship?
          </h2>
          <p className="mt-4 max-w-3xl text-sm md:text-base leading-relaxed text-[#d8f4f2]">
            Email your scope for triage. If it is sprint-fit, I reply with a clear scope lock proposal,
            acceptance criteria, and start date options.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={selectedPackage.ctaHref}
              className="rounded-xl bg-[#27beb3] px-5 py-3 text-center text-sm md:text-base font-semibold text-black transition hover:bg-[#1ec5bb]"
            >
              Email scope for triage
            </a>
            <a
              href="https://www.linkedin.com/in/morten-ghafarnia/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/25 px-5 py-3 text-center text-sm md:text-base font-semibold text-white transition hover:border-white"
            >
              Message on LinkedIn
            </a>
          </div>
        </MotionSection>
      </main>

      <SocialLinks />
      <Footer />
    </>
  );
};

export default OfferSprint;