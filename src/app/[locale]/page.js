"use client";

import {
  Airplay,
  AlertCircleIcon,
  ArrowRightLeftIcon,
  BeerIcon,
  CalendarCheckIcon,
  ChefHat,
  ChefHatIcon,
  CoffeeIcon,
  CreditCardIcon,
  icons,
  MapPinHouseIcon,
  MessageCircleIcon,
  PackageCheckIcon,
  PackageSearchIcon,
  RailSymbol,
  ScanTextIcon,
  ToggleRightIcon,
  UserRoundCogIcon,
  UtensilsIcon,
  WorkflowIcon,
} from "lucide-react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { FaC, FaRobot } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import {
  FiBell,
  FiBookOpen,
  FiCalendar,
  FiGlobe,
  FiSend,
  FiShoppingBag,
  FiXCircle,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const TargetIcon = ({ className = "h-5 w-5" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    className={className}
  >
    <path d="M12 19a7 7 0 1 0-7-7" />
    <path d="M5 12A2 2 0 1 0 7 14" />
    <path d="M12 22a10 10 0 1 0-10-10" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const AlertTriangleIcon = ({ className = "h-5 w-5" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    className={className}
  >
    <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
    <path d="M12 9v4" />
    <path d="M12 17h.01" />
  </svg>
);

const SparklesIcon = ({ className = "h-5 w-5" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    className={className}
  >
    <path d="M12 3v4" />
    <path d="m16.2 7.8-2.9 2.9" />
    <path d="m14 15-2 2" />
    <path d="m9 12 2-2" />
    <path d="M7.8 7.8 3 3" />
    <path d="M21 21l-4.8-4.8" />
  </svg>
);

const CompassIcon = ({ className = "h-5 w-5" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="m16.24 7.76-1.53 4.59-4.59 1.53 1.53-4.59Z" />
  </svg>
);

const AwardIcon = ({ className = "h-5 w-5" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    className={className}
  >
    <circle cx="12" cy="8" r="6" />
    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);

const GlobeIcon = ({ className = "h-5 w-5" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 0 0 4 10 15.3 15.3 0 0 1-8 0 15.3 15.3 0 0 0 4-10Z" />
  </svg>
);

const ToolsIcon = ({ className = "h-5 w-5" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    className={className}
  >
    <path d="m7.5 4.21 2.38 2.38-3.38 3.38a3 3 0 1 0 4.24 4.24l3.38-3.38 2.38 2.38a5.5 5.5 0 0 0-7.78-7.78Z" />
    <path d="m2 22 5.5-5.5" />
  </svg>
);

const LightningIcon = ({ className = "h-5 w-5" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    className={className}
  >
    <path d="M13 2 3 14h9l-1 8 10-12h-9Z" />
  </svg>
);

const LinkIcon = ({ className = "h-5 w-5" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    className={className}
  >
    <path d="M10 13a5 5 0 0 0 7.54.54l1.92-1.92a4 4 0 0 0-5.66-5.66l-.88.88" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-1.92 1.92a4 4 0 0 0 5.66 5.66l.88-.88" />
  </svg>
);

const UploadIcon = ({ className = "h-5 w-5" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    className={className}
  >
    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
    <path d="M7 9l5-5 5 5" />
    <path d="M12 4v12" />
  </svg>
);

const RocketIcon = ({ className = "h-5 w-5" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    className={className}
  >
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
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    className={className}
  >
    <path d="M3 3v18h18" />
    <path d="M7 13h2v5H7z" />
    <path d="M13 9h2v9h-2z" />
    <path d="M19 5h2v13h-2z" />
  </svg>
);

export default function Home() {
  const t = useTranslations();
  const [selectedCardTitle, setSelectedCardTitle] = useState(null);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("[data-reveal]"));
    if (!elements.length) return;

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, activeObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          activeObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const featureMatrix = [
    {
      title: t("section-second.points.first.title"),
      icon: FiBookOpen,
      description: t("section-second.points.first.description"),
    },
    {
      title: t("section-second.points.second.title"),
      icon: FiCalendar,
      steps: [
        t("section-second.points.second.key-point.one"),
        t("section-second.points.second.key-point.second"),
        t("section-second.points.second.key-point.third"),
      ],
    },
    {
      title: t("section-second.points.third.title"),
      icon: FiShoppingBag,
      description: t("section-second.points.third.description"),
    },
    {
      title: t("section-second.points.fourth.title"),
      icon: FiXCircle,
      points: [
        t("section-second.points.fourth.key-point.one"),
        t("section-second.points.fourth.key-point.second"),
        t("section-second.points.fourth.key-point.third"),
      ],
    },
    {
      title: t("section-second.points.fifth.title"),
      icon: FiGlobe,
      points: [
        t("section-second.points.fifth.key-point.one"),
        t("section-second.points.fifth.key-point.second"),
        t("section-second.points.fifth.key-point.third"),
      ],
    },
  ];

  const toggleSelectedCard = (title) => {
    setSelectedCardTitle((prev) => (prev === title ? null : title));
  };

  const navLinks = [
    // { label: "Audience", href: "#audience" },
    // { label: "Benefits", href: "#benefits" },
    // { label: "Features", href: "#features" },
    // { label: "Channels", href: "#channels" },
    // { label: "FAQ", href: "#operations" },
  ];

  return (
    <div className="min-h-screen bg-white text-[#0f172a]">
      <div className="sticky top-0 z-40">
        <header className="absolute inset-x-0 top-0 h-16 lg:h-20 bg-[#f8fafc]/95 backdrop-blur px-6 sm:px-10">
          <div className="mx-auto flex h-full w-full max-w-6xl items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-[#1daa61] flex items-center justify-center text-sm font-semibold text-white shadow-sm">
                AI
              </div>
              <div>
                <p className="text-xs sm:text-sm uppercase tracking-wider text-[#1daa61] font-semibold">
                  Restaurant Chatbot
                </p>
                <p className="text-sm font-semibold">Always-on digital host</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-600">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="hover:text-[#1d4ed8] transition"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <LanguageSwitcher />
            </div>
          </div>
        </header>
      </div>

      <main className="space-y-16">
        <section className="relative w-full px-6 sm:px-10 pt-16 lg:pt-20 min-h-[100dvh] lg:h-screen flex items-center overflow-x-hidden bg-gradient-to-br from-green-50 via-white to-green-400 ">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0 opacity-[0.18] [mask-image:radial-gradient(ellipse_at_left,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_70%)] [webkit-mask-image:radial-gradient(ellipse_at_left,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_70%)]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(29,78,216,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(29,78,216,0.35) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
            }}
          />
          <div
            data-reveal
            className="reveal relative z-10 mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center"
          >
            <div className="space-y-8">
              <div className="w-fit flex items-center mx-auto sm:mx-0 gap-2 rounded-full border border-green-100 bg-white px-4 py-2 shadow-sm">
                <FaRobot className="size-4 text-[#1daa61]" />
                <p className="text-xs font-semibold">
                  Built For Real Restaurant Operations
                </p>
                {/* <span className="h-1.5 w-1.5 rounded-full bg-[#16a34a]" /> */}
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-center sm:text-left">
                  {t("hero.tagline")}
                </h1>
                <p className="text-lg text-slate-700 max-w-2xl text-center sm:text-left">
                  {t("hero.subtagline")}
                </p>
              </div>
              <div className="flex items-center gap-3 justify-center sm:justify-start">
                <a
                  href="#"
                  className="flex items-center gap-2 rounded-full bg-[#1daa61] px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-[0_12px_32px_-16px_rgba(37,99,235,0.7)] hover:-translate-y-0.5 transition"
                >
                  <FaWhatsapp size={23} /> {t("hero.cta")}
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
                  priority={true}
                />
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-6xl space-y-16 pb-16">
          <section
            id="benefits"
            className="grid pt-10 px-6 xl:px-0 gap-6 lg:grid-cols-3 items-start"
          >
            <div id="features" className="lg:col-span-12">
              <div
                data-reveal
                className="reveal flex justify-center text-center items-center gap-3"
              >
                <div className="mb-5">
                  <h2 className="text-4xl font-semibold">
                    {t("section-second.title")}
                  </h2>
                  {/* <p className="text-lg text-slate-600">{t("section-second.sub-title")}</p> */}
                </div>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {featureMatrix.map((feature, index) => {
                  const Icon = feature.icon;
                  const isSelected = selectedCardTitle === feature.title;
                  return (
                    <div
                      key={feature.title}
                      data-reveal
                      className={`reveal group isolate relative overflow-hidden cursor-pointer rounded-2xl border bg-gradient-to-br from-white via-white to-green-50 p-8 shadow-sm backdrop-blur transition will-change-transform hover:-translate-y-1 hover:shadow-xl hover:shadow-green-200/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600/40 ${
                        isSelected
                          ? "border-green-600 ring-2 ring-green-600/25"
                          : "border-green-100/80 hover:border-green-200/90"
                      } before:pointer-events-none before:absolute before:-top-28 before:-right-24 before:h-56 before:w-56 before:rounded-full before:bg-gradient-to-br before:from-[#2563eb]/20 before:via-[#16a34a]/10 before:to-transparent before:blur-2xl before:opacity-0 before:transition before:duration-500 group-hover:before:opacity-100 after:pointer-events-none after:absolute after:inset-0 after:bg-[linear-gradient(to_right,rgba(37,99,235,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(37,99,235,0.08)_1px,transparent_1px)] after:bg-[size:28px_28px] after:opacity-0 after:transition after:duration-500 group-hover:after:opacity-100`}
                      style={{ transitionDelay: `${index * 60}ms` }}
                    >
                      <div className="flex flex-col gap-3">
                        <div className="w-fit p-3 rounded-xl bg-gradient-to-br from-green-50 via-white to-emerald-50 shadow-sm ring-1 ring-green-100">
                          <Icon className="text-[#1da661] size-5 transition-transform duration-300 group-hover:scale-110" />
                        </div>
                        <p className="text-2xl font-semibold text-[#0f172a]">
                          {feature.title}
                        </p>
                      </div>

                      {feature.description && (
                        <p className="mt-3 text-lg text-slate-600">
                          {feature.description}
                        </p>
                      )}

                      {feature.steps && (
                        <ol className="relative z-10 mt-3 list-decimal space-y-1 pl-4 text-lg text-slate-600">
                          {feature.steps.map((step, index) => (
                            <li key={index}>{step}</li>
                          ))}
                        </ol>
                      )}

                      {feature.points && (
                        <ul className="relative z-10 mt-3 list-disc space-y-1 pl-4 text-lg text-slate-600">
                          {feature.points.map((point, index) => (
                            <li key={index}>{point}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  );
                })}
              </div>
              <div
                data-reveal
                className="reveal flex justify-center items-center gap-3 mt-10"
                style={{ transitionDelay: "180ms" }}
              >
                <a
                  href="#"
                  className="flex items-center gap-2 rounded-full bg-[#1daa61] px-6 py-3 text-lg sm:text-base font-semibold text-white shadow-[0_12px_32px_-16px_rgba(37,99,235,0.7)] hover:-translate-y-0.5 transition"
                >
                  <FaWhatsapp size={23} /> {t("section-second.cta")}
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
