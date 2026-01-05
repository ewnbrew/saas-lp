"use client";

import { Airplay, AlertCircleIcon, ArrowRightLeftIcon, BeerIcon, CalendarCheckIcon, ChefHat, ChefHatIcon, CoffeeIcon, CreditCardIcon, icons, MapPinHouseIcon, MessageCircleIcon, PackageCheckIcon, PackageSearchIcon, RailSymbol, ScanTextIcon, ToggleRightIcon, UserRoundCogIcon, UtensilsIcon, WorkflowIcon } from "lucide-react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useState } from "react";
import { FiBell, FiBookOpen, FiCalendar, FiGlobe, FiSend, FiShoppingBag, FiXCircle } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const TargetIcon = ({ className = "h-5 w-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={className}>
    <path d="M12 19a7 7 0 1 0-7-7" />
    <path d="M5 12A2 2 0 1 0 7 14" />
    <path d="M12 22a10 10 0 1 0-10-10" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const AlertTriangleIcon = ({ className = "h-5 w-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={className}>
    <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
    <path d="M12 9v4" />
    <path d="M12 17h.01" />
  </svg>
);

const SparklesIcon = ({ className = "h-5 w-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={className}>
    <path d="M12 3v4" />
    <path d="m16.2 7.8-2.9 2.9" />
    <path d="m14 15-2 2" />
    <path d="m9 12 2-2" />
    <path d="M7.8 7.8 3 3" />
    <path d="M21 21l-4.8-4.8" />
  </svg>
);

const CompassIcon = ({ className = "h-5 w-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={className}>
    <circle cx="12" cy="12" r="10" />
    <path d="m16.24 7.76-1.53 4.59-4.59 1.53 1.53-4.59Z" />
  </svg>
);

const AwardIcon = ({ className = "h-5 w-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={className}>
    <circle cx="12" cy="8" r="6" />
    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);

const GlobeIcon = ({ className = "h-5 w-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={className}>
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 0 0 4 10 15.3 15.3 0 0 1-8 0 15.3 15.3 0 0 0 4-10Z" />
  </svg>
);

const ToolsIcon = ({ className = "h-5 w-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={className}>
    <path d="m7.5 4.21 2.38 2.38-3.38 3.38a3 3 0 1 0 4.24 4.24l3.38-3.38 2.38 2.38a5.5 5.5 0 0 0-7.78-7.78Z" />
    <path d="m2 22 5.5-5.5" />
  </svg>
);

const LightningIcon = ({ className = "h-5 w-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={className}>
    <path d="M13 2 3 14h9l-1 8 10-12h-9Z" />
  </svg>
);

const LinkIcon = ({ className = "h-5 w-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={className}>
    <path d="M10 13a5 5 0 0 0 7.54.54l1.92-1.92a4 4 0 0 0-5.66-5.66l-.88.88" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-1.92 1.92a4 4 0 0 0 5.66 5.66l.88-.88" />
  </svg>
);

const UploadIcon = ({ className = "h-5 w-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={className}>
    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
    <path d="M7 9l5-5 5 5" />
    <path d="M12 4v12" />
  </svg>
);

const RocketIcon = ({ className = "h-5 w-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={className}>
    <path d="M4.5 16.5c-1.1 1.1-2 3-2 3s1.9-.9 3-2 2-3 2-3-1.9.9-3 2Z" />
    <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
    <path d="M14 9l6-6" />
    <path d="M9 9 3 3" />
    <path d="m15 15 3 3" />
    <path d="m9 15-3 3" />
    <path d="M10 7 8 5a16 16 0 0 1 8 0l-2 2" />
  </svg>
);

const ChartIcon = ({ className = "h-5 w-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={className}>
    <path d="M3 3v18h18" />
    <path d="M7 13h2v5H7z" />
    <path d="M13 9h2v9h-2z" />
    <path d="M19 5h2v13h-2z" />
  </svg>
);

export default function Home() {
  const [selectedCardTitle, setSelectedCardTitle] = useState(null);

  const audiences = [
    { name: "Quick service & takeaway", icon: <PackageCheckIcon /> },
    { name: "Casual dining & cafés", icon: <CoffeeIcon /> },
    { name: "Bars, lounges, and nightlife", icon: <BeerIcon /> },
    { name: "Cloud kitchens & delivery-only brands", icon: <ChefHatIcon /> },
    { name: "Fine dining & premium restaurants", icon: <UtensilsIcon /> },
    { name: "Multi-location restaurant groups", icon: <MapPinHouseIcon /> },
  ];

  const painPoints = [
    "Missed messages during busy hours",
    "Repetitive menu, price, and hour questions",
    "Manual reservation and order handling",
    "Customer frustration from slow replies",
    "Staff overloaded with chat and calls",
  ];

  const benefits = [
    {
      name: "Answers menu, price, and opening hour questions instantly",
      icon: <MessageCircleIcon />,
    },
    {
      name: "Takes reservations and booking requests",
      icon: <CalendarCheckIcon />,
    },
    {
      name: "Handles order inquiries and delivery status",
      icon: <PackageSearchIcon />,
    },
    {
      name: "Sends payment links and confirmations",
      icon: <CreditCardIcon />,
    },
    {
      name: "Escalates to staff only when needed",
      icon: <UserRoundCogIcon />,
    },
  ];

  const featureMatrix = [
    {
      title: "Untuk siapa",
      icon: FiBookOpen,
      description:
        "Restoran yang mengelola reservasi melalui WhatsApp, buku catatan/kertas, ponsel manajer, Google Calendar atau catatan sederhana.",
    },
    {
      title: "Cara kerja",
      icon: FiCalendar,
      steps: [
        "Klik WhatsApp",
        "Asisten mengajukan beberapa pertanyaan",
        "Langsung bisa dites",
      ],
    },
    {
      title: "Kontrol di tangan restoran",
      icon: FiShoppingBag,
      description:
        "Restoran menentukan informasi apa yang dikumpulkan dan apakah reservasi dikonfirmasi otomatis atau tidak.",
    },
    {
      title: "Apa yang BUKAN",
      icon: FiXCircle,
      points: [
        "Tidak ada software untuk diinstal",
        "Tidak ada integrasi POS",
        "Tidak ada platform reservasi eksternal",
      ],
    },
    {
      title: "Kepercayaan lokal",
      icon: FiGlobe,
      points: [
        "Berbasis di Bali",
        "Bantuan lokal memungkinkan",
        "Ada dukungan manusia di balik AI",
      ],
    },
  ];

  const toggleSelectedCard = (title) => {
    setSelectedCardTitle((prev) => (prev === title ? null : title));
  };

  const advantages = [
    "Universal Compatibility",
    "Zero Friction",
    "Scalability",
    "Brand Voice",
    "Operational Focus",
  ];
  const marqueeAdvantages = [...advantages, ...advantages];

  const channels = [
    { title: "WhatsApp", badge: "Primary", copy: "Launch where guests already message you.", icon: FaWhatsapp },
    { title: "Website Live Chat", badge: "Web", copy: "Own the conversation on your site, instantly.", icon: FiGlobe },
    { title: "Instagram / Social Chat", badge: "Optional", copy: "Extend the same experience to social.", icon: FiSend },
  ];

  const steps = [
    { label: "Connect", detail: "Link your WhatsApp account.", icon: LinkIcon, image: "/assets/steps/connect.png" },
    { label: "Upload", detail: "Sync your menu, hours, and house rules.", icon: UploadIcon, image: "/assets/steps/upload.png" },
    { label: "Deploy", detail: "AI goes live to interact with customers instantly.", icon: RocketIcon, image: "/assets/steps/deploy.png" },
    { label: "Manage", detail: "Monitor performance and refine via the dashboard.", icon: ChartIcon, image: "/assets/steps/manage.png" },
  ];

  const plans = [
    {
      name: "Starter",
      tagline: "Optimized for small restaurants.",
      price: "$49",
      unit: "per month",
      highlights: ["Automations for daily FAQs", "Reservation handoff", "WhatsApp + Web chat"],
    },
    {
      name: "Growth",
      tagline: "Designed for busy, high-volume locations.",
      price: "$129",
      unit: "per month",
      highlights: ["Priority routing during rush", "Payments and links", "Analytics for rush hours"],
    },
    {
      name: "Pro",
      tagline: "Built for large chains and multi-unit groups.",
      price: "Custom",
      unit: "per location",
      highlights: ["Multi-location playbooks", "Brand guardrails", "Team escalations with SLAs"],
    },
  ];

  const operations = [
    { text: "Handles peak-hour traffic without lag.", icon: <ArrowRightLeftIcon /> },
    { text: "Avoids over-promising to ensure realistic customer expectations.", icon: <ScanTextIcon /> },
    { text: "Uses a clear fallback to human staff when necessary.", icon: <ToggleRightIcon /> },
    { text: "Matches real-world restaurant workflows, not just theoretical ones.", icon: <WorkflowIcon /> },
  ];

  const navLinks = [
    // { label: "Audience", href: "#audience" },
    // { label: "Benefits", href: "#benefits" },
    // { label: "Features", href: "#features" },
    // { label: "Channels", href: "#channels" },
    // { label: "FAQ", href: "#operations" },
  ];

  const StepTabs = dynamic(() => import("./components/step-tabs"), { ssr: false });

  return (
    <div className="min-h-screen bg-white text-[#0f172a]">
      <div className="sticky top-0 z-40">
        <header className="absolute inset-x-0 top-0 bg-[#f8fafc]/95 backdrop-blur px-6 sm:px-10">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-[#2563eb] flex items-center justify-center text-sm font-semibold text-white shadow-sm">
                AI
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.32em] text-[#1d4ed8]">Restaurant Chatbot</p>
                <p className="text-sm font-semibold">Always-on digital host</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-600">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="hover:text-[#1d4ed8] transition">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </header>
      </div>

      <main className="space-y-16">
        <section className="relative pt-16 pb-16 w-full px-6 sm:px-10 pt-8 min-h-[100dvh] lg:min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#e0f2fe] via-white to-[#e0fcef]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0 opacity-[0.18] [mask-image:radial-gradient(ellipse_at_left,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_70%)] [webkit-mask-image:radial-gradient(ellipse_at_left,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_70%)]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(29,78,216,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(29,78,216,0.35) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
            }}
          />
          <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-semibold text-[#1d4ed8] shadow-sm">
                Built for real restaurant operations
                <span className="h-1.5 w-1.5 rounded-full bg-[#16a34a]" />
              </div>
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
                  Booking Manager WhatsApp untuk restoran Anda — siap dalam hitungan menit.
                </h1>
                <p className="text-lg text-slate-700 max-w-2xl">
                  Tes langsung. Tanpa software. Tanpa integrasi.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <a href="#" className="flex items-center gap-2 rounded-full bg-[#2563eb] px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-[0_12px_32px_-16px_rgba(37,99,235,0.7)] hover:-translate-y-0.5 transition">
                  <FaWhatsapp size={23} /> Coba sekarang di WhatsApp
                </a>
              </div>
            </div>

            <div className="relative hidden md:block">
              <div>
                <Image
                  src="/assets/hero.png"
                  alt="Hero product preview"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-6 md:px-0 space-y-16 pb-16">
          <section id="benefits" className="grid pb-16 pt-10 gap-6 lg:grid-cols-12 items-start">
            <div id="features" className="lg:col-span-12">
              <div className="flex justify-center text-center items-center gap-3">
                <div>
                  <h2 className="text-2xl font-semibold">Feature automation matrix</h2>
                  <p className="text-sm text-slate-600">Automations mapped to guest journeys.</p>
                </div>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {featureMatrix.map((feature) => {
                  const Icon = feature.icon;
                  const isSelected = selectedCardTitle === feature.title;
                  return (
                    <div
                      key={feature.title}
                      role="button"
                      tabIndex={0}
                      aria-pressed={isSelected}
                      onClick={() => toggleSelectedCard(feature.title)}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault();
                          toggleSelectedCard(feature.title);
                        }
                      }}
                      className={`cursor-pointer rounded-2xl border p-8 transition ${
                        isSelected
                          ? "border-blue-600 ring-blue-600"
                          : "border-blue-50 hover:border-blue-200"
                      }`}
                    >
                      <div className="flex flex-col gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-600 shadow">
                          <Icon className="h-5 w-5" />
                        </span>

                        <p className="text-base font-semibold text-[#0f172a]">
                          {feature.title}
                        </p>
                      </div>

                      {/* Description */}
                      {feature.description && (
                        <p className="mt-3 text-sm text-slate-600">
                          {feature.description}
                        </p>
                      )}

                      {/* Steps (numbered list) */}
                      {feature.steps && (
                        <ol className="mt-3 list-decimal space-y-1 pl-4 text-sm text-slate-600">
                          {feature.steps.map((step, index) => (
                            <li key={index}>{step}</li>
                          ))}
                        </ol>
                      )}

                      {/* Bullet points */}
                      {feature.points && (
                        <ul className="mt-3 list-disc space-y-1 pl-4 text-sm text-slate-600">
                          {feature.points.map((point, index) => (
                            <li key={index}>{point}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-center items-center gap-3 mt-10">
                <a href="#" className="flex items-center gap-2 rounded-full bg-[#2563eb] px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-[0_12px_32px_-16px_rgba(37,99,235,0.7)] hover:-translate-y-0.5 transition">
                  <FaWhatsapp size={23} /> Coba sekarang di WhatsApp
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
