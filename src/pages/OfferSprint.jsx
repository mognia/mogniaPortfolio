import React from "react";
import { motion } from "framer-motion";
import {
    FaBolt,
    FaCheckCircle,
    FaClipboardCheck,
    FaCompass,
    FaCode,
    FaCrown,
    FaExchangeAlt,
    FaFlagCheckered,
    FaLaptopCode,
    FaMagic,
    FaQuestionCircle,
    FaRegClock,
    FaShieldAlt,
    FaTachometerAlt,
    FaTools,
} from "react-icons/fa";
import TitleHeader from "../shared-UI/TitleHeader.jsx";
import SocialLinks from "../components/SocialLinks/SocialLinks.jsx";
import Footer from "../components/Footer/Footer.jsx";

const serviceLanes = [
    {
        title: "Feature Delivery",
        label: "New feature work",
        icon: FaCode,
        description: "Ship one focused workflow end-to-end with real user-ready states.",
        bullets: [
            "1-3 screens or one complete feature slice",
            "Loading, empty, validation, and error states",
            "Clean PRs with useful notes for your team",
        ],
    },
    {
        title: "UX + Product Polish",
        label: "Experience quality",
        icon: FaMagic,
        description: "Take a core area from almost good to consistently excellent.",
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
        description: "Remove rough edges that slow the product and your team.",
        bullets: [
            "Audit and reduce avoidable re-renders",
            "Tighten data-fetch and UI state handling",
            "Safer UI behavior around edge cases",
        ],
    },
];

const sprintProcess = [
    {
        step: "01",
        title: "Scope Lock",
        timeline: "Day 0",
        icon: FaClipboardCheck,
        outcome: "No ambiguity before development starts.",
        detail:
            "We define goals, acceptance criteria, and exact constraints before coding starts.",
    },
    {
        step: "02",
        title: "Build Sprint",
        timeline: "Days 1-8",
        icon: FaTools,
        outcome: "Fast implementation with daily async alignment.",
        detail:
            "Daily async updates, focused implementation, and fast feedback loops with your team.",
    },
    {
        step: "03",
        title: "Quality Pass",
        timeline: "Days 9-10",
        icon: FaShieldAlt,
        outcome: "Polished behavior across critical user states.",
        detail:
            "Polish, bug fixes, edge-case handling, and final checks on shipped scope.",
    },
    {
        step: "04",
        title: "Handoff",
        timeline: "Final day",
        icon: FaFlagCheckered,
        outcome: "Your team can continue with confidence.",
        detail:
            "Walkthrough, delivery notes, and clear next steps so your team keeps momentum.",
    },
];

const tiers = [
    {
        name: "Lite",
        label: "Quick Start",
        icon: FaBolt,
        price: "EUR 1,200",
        fit: "One clear feature with low integration risk.",
        includes: [
            "10 business days",
            "Single focused feature",
            "Core UX states covered",
            "One implementation walkthrough",
        ],
        outcome: "Great for fast feature momentum with low coordination overhead.",
        cta: "mailto:1mognia@gmail.com?subject=Lite%20Sprint%20Request",
        ctaLabel: "Start Lite Sprint",
    },
    {
        name: "Standard",
        label: "Best Balance",
        icon: FaCompass,
        price: "EUR 3,500",
        fit: "Best balance for agencies and product teams.",
        recommended: true,
        includes: [
            "15 business days",
            "1-3 screens/features",
            "UX polish + performance pass",
            "Clean handoff docs and walkthrough",
        ],
        outcome: "Best value for meaningful delivery plus quality and polish.",
        cta: "mailto:1mognia@gmail.com?subject=Standard%20Sprint%20Request",
        ctaLabel: "Book Standard Sprint",
    },
    {
        name: "Premium",
        label: "Complex Scope",
        icon: FaCrown,
        price: "EUR 5,500",
        fit: "Higher complexity with deeper integration support.",
        includes: [
            "20 business days",
            "Complex multi-state delivery",
            "Deeper quality and stability checks",
            "2 weeks async support after handoff",
        ],
        outcome: "Built for critical surfaces with more complexity and dependencies.",
        cta: "mailto:1mognia@gmail.com?subject=Premium%20Sprint%20Request",
        ctaLabel: "Start Premium Sprint",
    },
];

const projects = [
    {
        name: "OfferLog",
        image: "/projects/offerLog.webp",
        summary: "Personal CRM for job hunting with deterministic analytics and strong auth.",
        links: [
            { label: "Live Demo", href: "https://offerlog.mognia.dev" },
            { label: "Repository", href: "https://github.com/mognia/offerlog" },
        ],
    },
    {
        name: "JD Roaster",
        image: "/projects/jdRoaster.webp",
        summary: "Job description quality tool with linting receipts and issue navigation.",
        links: [
            { label: "Live Demo", href: "https://jdroaster.mognia.dev" },
            { label: "Repository", href: "https://github.com/mognia/jdroaster" },
        ],
    },
    {
        name: "Mrello",
        image: "/projects/mrello.webp",
        summary: "Task management app with practical board workflows and clean interaction patterns.",
        links: [{ label: "Repository", href: "https://github.com/mognia/mrello" }],
    },
];

const faqs = [
    {
        category: "Stack & Design System",
        icon: FaLaptopCode,
        question: "Can you work in our existing design system?",
        answer:
            "Yes. I work inside your existing components and patterns, and only introduce new patterns when they solve a clear product problem.",
    },
    {
        category: "Scope Management",
        icon: FaExchangeAlt,
        question: "What happens if scope changes during the sprint?",
        answer:
            "We keep one locked sprint scope. If priorities shift, we swap items with the same effort level so timeline and quality remain predictable.",
    },
    {
        category: "Tech Coverage",
        icon: FaQuestionCircle,
        question: "Do you support only React and Next.js?",
        answer:
            "React and Next.js are my core delivery stack. I also support Angular and Node.js when your product surface needs it.",
    },
    {
        category: "Communication",
        icon: FaRegClock,
        question: "How much meeting time is required?",
        answer:
            "Minimal. Kickoff, short alignment points when needed, and one final handoff. Most communication is async to protect shipping time.",
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
    return (
        <>
            <main
                className="w-full mt-20 h-full md:px-20 px-5 text-white"
                style={{ fontFamily: "RobotoMono, sans-serif" }}
            >
                <MotionSection
                    {...fadeInUp}
                    className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#101113] p-6 md:p-10"
                >
                    <div className="pointer-events-none absolute -top-24 -right-20 h-64 w-64 rounded-full bg-[#27beb3]/20 blur-3xl" />
                    <div className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-[#1c7287]/30 blur-3xl" />

                    <div className="relative grid gap-8 lg:grid-cols-12">
                        <div className="lg:col-span-7">
                            <div className="inline-flex items-center rounded-full border border-[#27beb3]/50 bg-[#27beb3]/10 px-4 py-1.5 text-xs md:text-sm text-[#b7f6f0]">
                                10-Day Frontend Offer Sprint
                            </div>

                            <h1 className="mt-4 text-3xl md:text-5xl font-semibold leading-tight">
                                Ship a production-ready UI slice in{" "}
                                <span className="text-[#27beb3]">10 business days</span>
                            </h1>
                            <p className="mt-5 text-[#d3d3d3] text-base md:text-lg leading-relaxed max-w-2xl">
                                For agencies and SaaS teams that need strong frontend execution without hiring delays.
                                Fixed scope, clear acceptance criteria, and delivery inside your current stack.
                            </p>

                            <div className="mt-6 grid gap-3 text-sm md:text-base text-[#d3d3d3]">
                                <p>• React, Next.js, TypeScript, Angular support</p>
                                <p>• UX polish + edge-case handling included</p>
                                <p>• EMEA-friendly timezone collaboration</p>
                            </div>

                            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                                <a
                                    href="mailto:1mognia@gmail.com?subject=Offer%20Sprint%20Discovery"
                                    className="rounded-xl border border-[#27beb3] bg-[#27beb3] px-5 py-3 text-center text-sm md:text-base font-semibold text-black transition hover:bg-[#1ec5bb]"
                                >
                                    Book a Discovery Call
                                </a>
                                <a
                                    href="#pricing"
                                    className="rounded-xl border border-white/20 px-5 py-3 text-center text-sm md:text-base font-semibold text-white transition hover:border-[#27beb3] hover:text-[#27beb3]"
                                >
                                    View Pricing
                                </a>
                            </div>
                        </div>

                        <div className="lg:col-span-5">
                            <div className="rounded-2xl border border-white/15 bg-black/35 p-5 md:p-6">
                                <p className="text-[#27beb3] text-xs md:text-sm tracking-wide uppercase">
                                    Sprint Snapshot
                                </p>
                                <div className="mt-4 space-y-3 text-sm md:text-base">
                                    <div className="flex items-center justify-between gap-4">
                                        <span className="text-[#a7a7a7]">Duration</span>
                                        <span className="font-semibold">10 business days</span>
                                    </div>
                                    <div className="flex items-center justify-between gap-4">
                                        <span className="text-[#a7a7a7]">Core price</span>
                                        <span className="font-semibold">EUR 1,500</span>
                                    </div>
                                    <div className="flex items-center justify-between gap-4">
                                        <span className="text-[#a7a7a7]">Payment</span>
                                        <span className="font-semibold">50/50 split</span>
                                    </div>
                                    <div className="flex items-center justify-between gap-4">
                                        <span className="text-[#a7a7a7]">Location</span>
                                        <span className="font-semibold">Remote</span>
                                    </div>
                                </div>

                                <div className="mt-6 rounded-xl border border-[#27beb3]/30 bg-[#27beb3]/10 p-4 text-sm text-[#d8fffc]">
                                    Built for teams that want predictable output, fewer meetings, and cleaner delivery quality.
                                </div>
                            </div>
                        </div>
                    </div>
                </MotionSection>

                <section className="mt-16" id="offer">
                    <TitleHeader title="What You Get In One Sprint" sub="🚀 Delivered, Not Delayed" />
                    <p className="mx-auto mt-4 max-w-3xl text-center text-sm md:text-base text-[#b9b9b9] leading-relaxed">
                        Each lane is structured for fast scanning and clear delivery outcomes. You can choose one lane
                        based on your product bottleneck for this sprint.
                    </p>
                    <div className="mt-10 grid gap-5 lg:grid-cols-3">
                        {serviceLanes.map((lane) => {
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

                <section className="mt-16">
                    <TitleHeader title="How The Sprint Works" sub="⚙️ Clear Delivery Flow" />
                    <p className="mx-auto mt-4 max-w-3xl text-center text-sm md:text-base text-[#b9b9b9] leading-relaxed">
                        A short, predictable sequence designed to reduce back-and-forth and keep delivery quality
                        stable from kickoff to handoff.
                    </p>

                    <div className="mt-8 hidden xl:flex items-center">
                        {sprintProcess.map((item, index) => (
                            <React.Fragment key={`rail-${item.step}`}>
                                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#27beb3]/45 bg-[#27beb3]/10 text-sm font-semibold text-[#98f3ec]">
                                    {item.step}
                                </div>
                                {index < sprintProcess.length - 1 ? (
                                    <div className="mx-2 h-px flex-1 bg-gradient-to-r from-[#27beb3]/65 to-[#1c7287]/15" />
                                ) : null}
                            </React.Fragment>
                        ))}
                    </div>

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

                <section className="mt-16" id="pricing">
                    <TitleHeader title="Offer Sprint Pricing" sub="💶 Fixed Scope Tiers" />
                    <p className="mx-auto mt-4 max-w-3xl text-center text-sm md:text-base text-[#b9b9b9] leading-relaxed">
                        Choose the tier by complexity, not by wish-list size. Every tier keeps the same sprint rhythm
                        with a clear result and clean handoff.
                    </p>
                    <div className="mt-10 grid gap-5 lg:grid-cols-3">
                        {tiers.map((tier) => {
                            const TierIcon = tier.icon;
                            return (
                            <MotionArticle
                                {...fadeInUp}
                                key={tier.name}
                                className={`rounded-3xl border bg-[#141416] p-6 ${
                                    tier.recommended
                                        ? "border-[#27beb3] shadow-[0_0_0_1px_rgba(39,190,179,0.5)]"
                                        : "border-white/10"
                                }`}
                            >
                                <div className="flex items-start justify-between gap-3">
                                    <div className="flex items-start gap-3">
                                        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-[#27beb3]/30 bg-[#27beb3]/10 text-[#9cf3ed]">
                                            <TierIcon />
                                        </div>
                                        <div>
                                            <p className="text-xs uppercase tracking-[0.12em] text-[#87dfd9]">
                                                {tier.label}
                                            </p>
                                            <h3 className="mt-1 text-xl font-semibold">{tier.name}</h3>
                                        </div>
                                    </div>
                                    {tier.recommended ? (
                                        <span className="rounded-full border border-[#27beb3]/50 bg-[#27beb3]/10 px-3 py-1 text-xs text-[#9df3ec]">
                                            Most Popular
                                        </span>
                                    ) : null}
                                </div>

                                <p className="mt-3 text-3xl font-bold text-[#27beb3]">{tier.price}</p>
                                <div className="mt-4 rounded-xl border border-white/10 bg-black/20 p-3">
                                    <p className="text-[11px] uppercase tracking-[0.11em] text-[#7fd9d2]">Best fit</p>
                                    <p className="mt-1 text-sm text-[#d6d6d6]">{tier.fit}</p>
                                </div>

                                <ul className="mt-5 space-y-2.5 text-sm">
                                    {tier.includes.map((item) => (
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
                                    {tier.outcome}
                                </div>

                                <a
                                    href={tier.cta}
                                    className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold transition ${
                                        tier.recommended
                                            ? "bg-[#27beb3] text-black hover:bg-[#1ec5bb]"
                                            : "border border-white/20 text-white hover:border-[#27beb3] hover:text-[#27beb3]"
                                    }`}
                                >
                                    {tier.ctaLabel}
                                </a>
                            </MotionArticle>
                            );
                        })}
                    </div>
                </section>

                <section className="mt-16">
                    <TitleHeader title="Recent Work Samples" sub="🛠️ Proven Execution" />
                    <div className="mt-10 grid gap-5 lg:grid-cols-3">
                        {projects.map((project) => (
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

                <section className="mt-16">
                    <TitleHeader title="Frequently Asked Questions" sub="❓Before You Book" />
                    <p className="mx-auto mt-4 max-w-3xl text-center text-sm md:text-base text-[#b9b9b9] leading-relaxed">
                        Straight answers to the most common pre-sprint questions, so you can decide quickly without
                        extra calls.
                    </p>
                    <div className="mt-10 grid gap-4 lg:grid-cols-2">
                        {faqs.map((faq, index) => {
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
                    <div className="mt-6 rounded-2xl border border-[#27beb3]/30 bg-[#27beb3]/5 p-4 text-sm text-[#d4fffb] md:flex md:items-center md:justify-between">
                        <p>Need answers for a custom scope before booking?</p>
                        <a
                            href="mailto:1mognia@gmail.com?subject=Offer%20Sprint%20Questions"
                            className="mt-3 inline-flex rounded-lg border border-[#27beb3]/40 px-3 py-2 font-semibold text-[#a2f4ee] transition hover:border-[#27beb3] hover:text-white md:mt-0"
                        >
                            Send Your Questions
                        </a>
                    </div>
                </section>

                <MotionSection
                    {...fadeInUp}
                    className="mt-16 mb-10 rounded-3xl border border-[#27beb3]/35 bg-[#112223] p-6 md:p-10"
                    id="contact"
                >
                    <h2 className="text-2xl md:text-3xl font-semibold text-white">Ready to ship your next frontend slice?</h2>
                    <p className="mt-4 max-w-3xl text-sm md:text-base leading-relaxed text-[#d8f4f2]">
                        Send your scope, product context, and delivery deadline. I will review fit and reply with a
                        concrete sprint recommendation.
                    </p>
                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                        <a
                            href="mailto:1mognia@gmail.com?subject=Offer%20Sprint%20Scope%20Review"
                            className="rounded-xl bg-[#27beb3] px-5 py-3 text-center text-sm md:text-base font-semibold text-black transition hover:bg-[#1ec5bb]"
                        >
                            Email Sprint Scope
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
