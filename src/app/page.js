"use client";

import { Airplay, AlertCircleIcon, ArrowRightLeftIcon, BeerIcon, CalendarCheckIcon, ChefHat, ChefHatIcon, CoffeeIcon, CreditCardIcon, icons, MapPinHouseIcon, MessageCircleIcon, PackageCheckIcon, PackageSearchIcon, RailSymbol, ScanTextIcon, ToggleRightIcon, UserRoundCogIcon, UtensilsIcon, WorkflowIcon } from "lucide-react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { FiBell, FiBookOpen, FiCalendar, FiGlobe, FiSend, FiShoppingBag } from "react-icons/fi";
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
    { title: "Menu Browsing", description: "Smart recommendations based on customer preferences.", icon: FiBookOpen },
    { title: "Reservations", description: "Automated table requests and calendar management.", icon: FiCalendar },
    { title: "Order Intake", description: "Seamless handoff for orders or secure payment links.", icon: FiShoppingBag },
    { title: "Status Updates", description: "Real-time delivery and order tracking notifications.", icon: FiBell },
    { title: "Global FAQs", description: "Instant answers for location, hours, promos, and policies.", icon: FiGlobe },
  ];

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
    { label: "Audience", href: "#audience" },
    { label: "Benefits", href: "#benefits" },
    { label: "Features", href: "#features" },
    { label: "Channels", href: "#channels" },
    { label: "FAQ", href: "#operations" },
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
            <div className="flex items-center gap-2">
              <a
                href="#pricing"
                className="rounded-full border border-blue-200 bg-white px-5 py-2 text-xs sm:text-sm font-semibold text-[#1d4ed8] transition hover:-translate-y-0.5 shadow-sm"
              >
                Pricing & Plans
              </a>
            </div>
          </div>
        </header>
      </div>

      <main className="space-y-16">
        <section className="relative pt-16 pb-16 w-full px-6 sm:px-10 pt-8 min-h-[100dvh] lg:min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#e0f2fe] via-white to-[#e0fcef]">
          <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-semibold text-[#1d4ed8] shadow-sm">
                Built for real restaurant operations
                <span className="h-1.5 w-1.5 rounded-full bg-[#16a34a]" />
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
                  Automate orders, reservations, and customer support—24/7.
                </h1>
                <p className="text-lg text-slate-700 max-w-2xl">
                  An AI chatbot built for restaurants to handle bookings, menu questions, delivery
                  inquiries, and payments across WhatsApp and web chat—so your team can focus on
                  service.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <button className="rounded-full bg-[#2563eb] px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-[0_12px_32px_-16px_rgba(37,99,235,0.7)] hover:-translate-y-0.5 transition">
                  Start Free – Go Live in Minutes
                </button>
                <button className="rounded-full border border-blue-200 bg-white px-6 py-3 text-sm sm:text-base font-semibold text-[#0f172a] hover:-translate-y-0.5 transition">
                  See Restaurant Demo
                </button>
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
          <section id="audience" className="pb-16 grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-12">
              <div className="flex flex-wrap">
                <div>
                  <h2 className="text-2xl font-semibold">Who this is for</h2>
                  <p className="text-sm text-slate-600">
                    Built to work seamlessly across various dining models.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {audiences.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 rounded-2xl border border-blue-50 bg-gradient-to-br from-white via-white to-blue-50/30 px-5 py-4 text-sm font-medium text-[#0f172a] transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div className="bg-[#e0f2fe] p-2 rounded-lg text-[#1d4ed8] border border-blue-50">
                      {item.icon}
                    </div>
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-sm text-[#1d4ed8]">
                One platform, tailored automatically to how your restaurant operates.
              </p>
            </div>
          </section>


          <section className="grid items-center gap-6 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#1d4ed8] via-[#2563eb] to-[#1e40af] shadow-[0_25px_70px_-35px_rgba(37,99,235,0.7)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.18),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.15),transparent_30%)]" />
                <Image
                  src="/assets/hero.png"
                  alt="Guests chatting with the AI host"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover opacity-90"
                  priority
                />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl bg-white/85 px-4 py-3 text-sm font-semibold text-[#0f172a] backdrop-blur shadow-lg">
                  <span className="flex items-center gap-2">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-blue-100 text-blue-600">24/7</span>
                    Calm automation for busy services
                  </span>
                  <span className="text-xs font-semibold text-blue-700">WhatsApp + Web</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-2xl bg-blue-50 text-[#1d4ed8] flex items-center justify-center">
                  <AlertCircleIcon className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold">The problems restaurants face</h2>
                  <p className="text-sm text-slate-600">Pinpointing the daily friction.</p>
                </div>
              </div>
              <div className="space-y-3">
                {painPoints.map((point, idx) => (
                  <div
                    key={point}
                    className={`flex items-center gap-3 rounded-2xl border border-blue-100 px-4 py-3 text-slate-700 bg-white`}
                  >
                    <span className="text-lg">❌</span>
                    <p className="text-sm font-semibold">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="audience" className="pb-16 pt-16 grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-12">
              <div className="flex flex-wrap">
                <div>
                  <h2 className="text-2xl font-semibold">Your always-on digital host</h2>
                  <p className="text-sm text-slate-600">
                    Core benefits, tuned for hospitality.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {benefits.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 rounded-2xl border border-blue-50 bg-gradient-to-br from-white via-white to-blue-50/30 px-5 py-4 text-sm font-medium text-[#0f172a] transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div className="bg-[#e0f2fe] p-2 rounded-lg text-[#1d4ed8] border border-blue-50">
                      {item.icon}
                    </div>
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="benefits" className="grid pb-16 pt-10 gap-6 lg:grid-cols-12 items-start">
            <div id="features" className="lg:col-span-12">
              <div className="flex items-center gap-3">
                <div>
                  <h2 className="text-2xl font-semibold">Feature automation matrix</h2>
                  <p className="text-sm text-slate-600">Automations mapped to guest journeys.</p>
                </div>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {featureMatrix.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <div key={feature.title} className="rounded-2xl border border-blue-50 p-8 shadow-sm bg-gradient-to-br from-blue-50 via-white to-blue-10]">
                      <div className="flex flex-col gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-[#1d4ed8]">
                          <Icon className="h-5 w-5" />
                        </span>
                        <p className="text-base font-semibold text-[#0f172a]">{feature.title}</p>
                      </div>
                      <p className="mt-3 text-sm text-slate-600">{feature.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section id="channels" className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-2xl bg-blue-50 text-[#1d4ed8] flex items-center justify-center">
                <AwardIcon className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold">Why restaurants choose this</h2>
                <p className="text-sm text-slate-600">Competitive advantages, on a smooth marquee.</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[28px] px-4 py-5">
              <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white via-white/60 to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white via-white/60 to-transparent" />
              <div className="marquee-track flex gap-3">
                {marqueeAdvantages.map((advantage, idx) => (
                  <span
                    key={`${advantage}-${idx}`}
                    className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-[#0f172a] shadow-sm"
                  >
                    <span className="h-2 w-2 rounded-full bg-[#1d4ed8]" />
                    {advantage}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-9">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-2xl bg-blue-50 text-[#1d4ed8] flex items-center justify-center">
                  <GlobeIcon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Meet guests where they message you</h3>
                  <p className="text-sm text-slate-600">Multi-channel support without extra lift.</p>
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {channels.map((channel) => {
                  const Icon = channel.icon;
                  return (
                    <div
                      key={channel.title}
                      className="rounded-2xl border border-blue-100 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                    >
                      <div className="flex items-center justify-between">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-[#1d4ed8]">
                          <Icon className="h-5 w-5" />
                        </span>
                        <span className="rounded-full bg-blue-50 px-3 py-1 text-[11px] font-semibold text-[#1d4ed8] shadow-sm">
                          {channel.badge}
                        </span>
                      </div>
                      <p className="mt-3 text-sm font-semibold text-[#0f172a]">{channel.title}</p>
                      <p className="mt-2 text-xs text-slate-600">{channel.copy}</p>
                      <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold text-[#16a34a]">
                        <span className="h-2 w-2 rounded-full bg-[#16a34a]" />
                        Live
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <style jsx>{`
              @keyframes marqueeSlide {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
              .marquee-track {
                width: max-content;
                animation: marqueeSlide 26s linear infinite;
              }
            `}</style>
          </section>

          <section className="grid gap-6 lg:grid-cols-12 items-start">
            <div className="lg:col-span-12 rounded-[28px] p-6 sm:p-8">
              <div className="flex justify-center text-center items-center gap-3">
                <div>
                  <h2 className="text-2xl font-semibold">Implementation made simple</h2>
                  <p className="text-sm text-slate-600">From connect to live in four steps.</p>
                </div>
              </div>
              <StepTabs steps={steps} />
            </div>
          </section>

          <section>
            <div
              id="pricing"
              className="rounded-[28px] border border-blue-100 bg-white p-6 sm:p-8 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.12)] space-y-6"
            >
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <h2 className="text-2xl font-semibold">Pricing & plans</h2>
                  <p className="text-sm text-slate-600">Start small, upgrade as volume grows.</p>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {plans.map((plan) => (
                  <div key={plan.name} className="rounded-2xl border border-blue-100 bg-white p-4 shadow-sm bg-gradient-to-br from-white via-white to-[#e0f2fe]">
                    <p className="text-md font-bold text-[#1d4ed8]">{plan.name} Plan</p>
                    <p className="text-xs text-slate-600">{plan.tagline}</p>
                    <div className="mt-3 flex items-baseline gap-1">
                      <span className="text-2xl font-semibold text-[#0f172a]">{plan.price}</span>
                      <span className="text-xs text-slate-500">{plan.unit}</span>
                    </div>
                    <div className="mt-3 space-y-2">
                      {plan.highlights.map((item) => (
                        <div key={item} className="flex items-start gap-2 text-xs text-slate-700">
                          <span className="text-[#1d4ed8]">•</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-[#1d4ed8]">Upgrade anytime as your volume grows.</p>
            </div>
          </section>

          <section id="operations">
            <div className="flex items-center justify-center">
              <div>
                <h2 className="text-2xl font-semibold text-c">Operational philosophy</h2>
                <p className="text-sm text-slate-600">Designed for operations, not demos.</p>
              </div>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-4">
              {operations.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex md:flex-col items-start gap-3 rounded-2xl border border-blue-50 px-4 py-3 bg-white`}
                >
                  <div className="bg-[#e0f2fe] p-2 rounded-lg text-[#1d4ed8]">
                    {item.icon}
                  </div>
                  <p className="text-sm font-bold">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[28px] border border-blue-100 bg-white p-8 sm:p-10 shadow-[0_24px_60px_-30px_rgba(37,99,235,0.18)] bg-gradient-to-br from-[#e0f2fe] via-white to-white">
            <div className="text-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-center">
                  Turn every message into a reservation, order, or satisfied guest.
                </h2>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap justify-center items-center">
              <button className="rounded-full bg-[#2563eb] px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-[0_12px_32px_-16px_rgba(37,99,235,0.7)] hover:-translate-y-0.5 transition">
                Start Your Restaurant AI Today
              </button>
            </div>
            <p className="mt-6 text-xs uppercase tracking-[0.24em] text-slate-500 text-center">
              Built to match real-world restaurant workflows
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
