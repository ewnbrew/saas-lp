"use client";

import { useEffect, useState } from "react";
import { FaBrain, FaC, FaRobot } from "react-icons/fa6";
import { FaCalendarAlt, FaCheckCircle } from "react-icons/fa";
import {
  FiBookOpen,
  FiCalendar,
  FiGlobe,
  FiX,
  FiShoppingBag,
  FiXCircle,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { RiNotification3Fill } from "react-icons/ri";
import { IoMdOptions } from "react-icons/io";
import { BsCalendar2Event } from "react-icons/bs";

export default function Home() {
  const t = useTranslations();
  const [selectedCardTitle, setSelectedCardTitle] = useState(null);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [openNewFaqIndex, setOpenNewFaqIndex] = useState(null);

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
      steps: [
        t("section-second.points.first.key-point.one"),
        t("section-second.points.first.key-point.second"),
        t("section-second.points.first.key-point.third"),
      ]
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
      steps: [
        t("section-second.points.third.key-point.one"),
        t("section-second.points.third.key-point.second"),
        t("section-second.points.third.key-point.third"),
      ],
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

  const benefits = [
    {
      title: t("benefits.points.first.title"),
      description: t("benefits.points.first.description"),
      icon: RiNotification3Fill,
      bg: "f4faff"
    },
    {
      title: t("benefits.points.second.title"),
      description: t("benefits.points.second.description"),
      icon: FaCalendarAlt,
      bg: "f1f6f5"
    },
    {
      title: t("benefits.points.third.title"),
      description: t("benefits.points.third.description"),
      icon: FaCheckCircle,
      bg: "f8f5ff"
    },
    {
      title: t("benefits.points.fourth.title"),
      description: t("benefits.points.fourth.description"),
      icon: IoMdOptions,
      bg: "f1f6f5"
    }
  ];

  const accordionFaqs = [
    {
      question: t("faq.questions.one"),
      answer: t("faq.answers.one"),
    },
    {
      question: t("faq.questions.two"),
      answer: t("faq.answers.two"),
    },
    {
      question: t("faq.questions.three"),
      answer: t("faq.answers.three"),
    },
    {
      question: t("faq.questions.four"),
      answer: t("faq.answers.four"),
    },
    {
      question: t("faq.questions.five"),
      answer: t("faq.answers.five"),
    },
    {
      question: t("faq.questions.six"),
      answer: t("faq.answers.six"),
    },
    {
      question: t("faq.questions.seven"),
      answer: t("faq.answers.seven"),
    },
    {
      question: t("faq.questions.eight"),
      answer: t("faq.answers.eight"),
    },
  ];

  const staticAccordionFaqs = [
    {
      question: "Will it overbook?",
      answer:
        "It follows the confirmation mode you choose (manual, auto under rules, or mixed), so it won't confirm when a slot should stay blocked.",
    },
    {
      question: "Can I approve every booking?",
      answer:
        "Yes—pick manual confirm and every request waits for your approval before guests get a yes.",
    },
    {
      question: "How fast is setup?",
      answer:
        "Setup takes a few minutes on WhatsApp: answer the hours, rules, and language prompts and you can test immediately.",
    },
    {
      question: "What languages does it support?",
      answer:
        "Choose the languages during setup; the assistant can greet and collect details in multiple languages at once.",
    },
    {
      question: "Can I turn it off anytime?",
      answer:
        "You can pause or switch off the assistant anytime and resume when you're ready.",
    },
    {
      question: "Does it work with my notebook / manager phone / calendar?",
      answer:
        "It runs on WhatsApp, so managers can review clean booking summaries from laptop or phone without extra installs, following the calendar rules you set.",
    },
    {
      question: "How does reconfirmation work?",
      answer:
        "Optional reconfirmation pings guests before service; confirmed guests stay marked and unclear cases can escalate to a human.",
    },
    {
      question: "What happens if a guest cancels?",
      answer:
        "If a guest cancels, the assistant notes it so you can free the slot or follow up right away.",
    },
  ];

  const toggleSelectedCard = (title) => {
    setSelectedCardTitle((prev) => (prev === title ? null : title));
  };

  const toggleFaqItem = (index) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  const toggleNewFaqItem = (index) => {
    setOpenNewFaqIndex((prev) => (prev === index ? null : index));
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
        <header className="relative inset-x-0 top-0 h-16 lg:h-20 bg-[#f8fafc]/95 backdrop-blur px-6 sm:px-10">
          <div className="mx-auto flex h-full w-full max-w-6xl items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-[#006d5a] flex items-center justify-center text-sm font-semibold text-white shadow-sm">
                <BsCalendar2Event size={20}/>
              </div>
              <div>
                <p className="text-xs sm:text-sm uppercase tracking-wider text-[#006d5a] font-semibold">
                  {t("header.line-one")}
                </p>
                <p className="text-xs sm:text-sm uppercase tracking-wider text-[#006d5a] font-semibold">
                  {t("header.line-second")}
                </p>
                <p className="text-sm font-semibold">{t("header.line-third")}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-600">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="hover:text-[#005d4e] transition"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              {/* <LanguageSwitcher /> */}
            </div>
          </div>
        </header>
      </div>

      <main>
        <section className="relative w-full px-6 pt-24 pb-12 md:pt-28 md:pb-16 min-h-[100dvh] md:min-h-screen flex items-center bg-gradient-to-br from-green-50 via-white to-[#1bf277]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0 opacity-[0.18] [mask-image:radial-gradient(ellipse_at_left,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_70%)] [webkit-mask-image:radial-gradient(ellipse_at_left,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_70%)]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(0,109,90,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,109,90,0.35) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
            }}
          />
          <div
            data-reveal
            className="reveal relative z-10 mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center"
          >
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-center sm:text-left">
                  {t("hero.tagline")}
                </h1>
                <p className="text-lg text-slate-700 max-w-2xl text-center sm:text-left">
                  {t("hero.subtagline")}
                </p>
                <ul className="mx-auto sm:mx-0 flex flex-col gap-3 text-base text-slate-700 max-w-2xl">
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="mt-1 shrink-0 text-[#006d5a]" />
                    <span className="flex-1 leading-relaxed">{t("hero.bullet.one")}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="mt-1 shrink-0 text-[#006d5a]" />
                    <span className="flex-1 leading-relaxed">{t("hero.bullet.two")}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="mt-1 shrink-0 text-[#006d5a]" />
                    <span className="flex-1 leading-relaxed">{t("hero.bullet.three")}</span>
                  </li>
                </ul>
              </div>
              <div className="flex gap-3 justify-center md:justify-start">
                <a
                  href="#"
                  className="flex gap-2 rounded-full bg-[#006d5a] px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-[0_12px_32px_-16px_rgba(0,109,90,0.7)] hover:-translate-y-0.5 transition"
                >
                  <FaWhatsapp size={23} /> {t("hero.cta")}
                </a>
              </div>
              <div className="text-lg font-semibold text-center md:text-start">
                {t("hero.microline")}
              </div>
            </div>

            {/* Media column keeps the demo asset anchored opposite to the hero copy */}
            <div className="relative order-last md:order-none w-full">
              <div className="relative w-full overflow-hidden shadow-emerald-100/60 backdrop-blur">
                {/* Autoplaying muted video showcases the product while staying performance-friendly */}
                <video
                  className="h-auto w-full object-cover"
                  src="/assets/video.mp4"
                  aria-label="Product demo video showing the reservation assistant in action"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-6xl space-y-16">
          <section
            id="service"
            className="grid py-16 px-6 xl:px-0 gap-8 lg:grid-cols-3 items-start"
          >
            <div id="service" className="lg:col-span-12">
              <div
                data-reveal
                className="reveal flex justify-center text-center items-center gap-3"
              >
                <div className="mb-5">
                  <h2 className="text-4xl font-medium text-black">
                    {t("problem.title")}
                  </h2>
                </div>
              </div>

              <div
                data-reveal
                className={`flex justify-center items-center reveal group isolate relative overflow-hidden transition will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600/40 before:pointer-events-none before:absolute before:-top-28 before:-right-24 before:h-56 before:w-56 before:rounded-full before:bg-gradient-to-br before:from-[#006d5a]/20 before:via-[#16a34a]/10 before:to-transparent before:blur-2xl before:opacity-0 before:transition before:duration-500 group-hover:before:opacity-100 after:pointer-events-none after:absolute after:inset-0 after:bg-[linear-gradient(to_right,rgba(0,109,90,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,109,90,0.08)_1px,transparent_1px)] after:bg-[size:28px_28px] after:opacity-0 after:transition after:duration-500 group-hover:after:opacity-100`}
                style={{ transitionDelay: `${60}ms` }}
              >
                <span className="text-center text-lg text-base text-[#3b3b3b] leading-relaxed">{t("problem.text")}</span>
              </div>
            </div>
          </section>
        </div>

        <div className="mx-auto max-w-6xl space-y-16">
          <section
            id="third"
            className="grid py-16 px-6 lg:px-8 xl:px-0 gap-10 lg:grid-cols-3 items-start"
          >
            <div id="service" className="lg:col-span-12">
              <div
                data-reveal
                className="reveal flex justify-center text-center items-center gap-3"
              >
                <div className="mb-5">
                  <h2 className="text-4xl font-medium text-black">
                    {t("benefits.title")}
                  </h2>
                </div>
              </div>

              <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {benefits.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={feature.title}
                      data-reveal
                      className="reveal group isolate relative overflow-hidden cursor-pointer rounded-2xl p-6 transition will-change-transform focus-visible:outline-none"
                      style={{
                        transitionDelay: `${index * 60}ms`,
                        backgroundColor: `#${feature.bg}`,
                      }}
                    >
                      <div className="flex h-full flex-col items-start gap-4">
                        {Icon && (
                          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#09474f] shadow-inner shadow-green-100/40">
                            <Icon className="h-6 w-6" />
                          </span>
                        )}
                        <div className="flex flex-col text-left space-y-2">
                          <p className="text-lg font-semibold text-[#0f172a]">
                            {feature.title}
                          </p>
                          <p className="text-base text-[#3b3b3b] leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>

        <div className="mx-auto max-w-6xl space-y-16">
          <section
            id="benefits"
            className="grid py-16 px-6 md:px-0 gap-6 lg:grid-cols-3 items-start"
          >
            <div id="features" className="lg:col-span-12">
              <div
                data-reveal
                className="reveal flex justify-center text-center items-center gap-3"
              >
                <div className="mb-5">
                  <h2 className="text-4xl font-medium text-black">
                    {t("section-second.title")}
                  </h2>
                </div>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
                {featureMatrix.map((feature, index) => {
                  const Icon = feature.icon;
                  const isSelected = selectedCardTitle === feature.title;
                  return (
                    <div
                      key={feature.title}
                      data-reveal
                      className={`reveal group isolate relative overflow-hidden cursor-pointer rounded-xl  border border-[#e0e0e0] p-8`}
                      style={{ transitionDelay: `${index * 60}ms` }}
                    >
                      <div className="flex items-center gap-3 mb-8">
                        <div className="w-fit rounded-xl">
                          <Icon className="font-bold text-[#09474f] size-6 transition-transform duration-300 group-hover:scale-110" />
                        </div>
                        <p className="text-2xl font-semibold">
                          {feature.title}
                        </p>
                      </div>

                      {feature.description && (
                        <p className="mt-3 text-lg font-medium">
                          {feature.description}
                        </p>
                      )}

                      {feature.steps && (
                        <ol className="relative z-10 mt-3 list-none space-y-4 text-md font-medium">
                          {feature.steps.map((step, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#006d5a]/10 text-[#006d5a] text-sm font-semibold">
                                {index + 1}
                              </span>
                              <span className="flex-1 leading-relaxed">{step}</span>
                            </li>
                          ))}
                        </ol>
                      )}

                      {feature.points && (
                        <ul className="relative z-10 mt-3 list-none space-y-4 text-md font-medium">
                          {feature.points.map((point, pointIndex) => {
                            const isCrossList = index === 3;
                            const isChecklist = index === 4;
                            return (
                              <li key={pointIndex} className="flex items-start gap-3">
                                {isCrossList && (
                                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-red-100 bg-red-50 text-red-600">
                                    <FiX className="h-4 w-4" />
                                  </span>
                                )}
                                {isChecklist && (
                                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#006d5a]/10 text-[#006d5a]">
                                    <FaCheckCircle className="h-4 w-4" />
                                  </span>
                                )}
                                {!isCrossList && !isChecklist && (
                                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-slate-400" />
                                )}
                              <span className="flex-1 leading-relaxed">{point}</span>
                            </li>
                          );
                        })}
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
                  className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#006d5a] px-6 py-3 text-base md:text-md font-medium text-white"
                >
                  <FaWhatsapp size={23} /> {t("section-second.cta")}
                </a>
              </div>
            </div>
          </section>
        </div>


        <div className="mx-auto max-w-4xl space-y-10">
          <section
            id="faq-accordion"
            className="grid py-16 px-6 xl:px-0 gap-6 lg:grid-cols-3 items-start"
          >
            <div className="lg:col-span-12">
              <div
                data-reveal
                className="reveal flex flex-col items-center gap-3 text-center"
              >
                <h2 className="text-4xl font-medium text-black">{t("faq.title")}</h2>
              </div>

              <div className="mt-6 overflow-hidden rounded-xl border border-[#e0e0e0] bg-white">
                {accordionFaqs.map((item, index) => {
                  const isOpen = openFaqIndex === index;
                  return (
                    <div
                      key={item.question}
                      className={`border-b border-[#e0e0e0] last:border-b-0 ${isOpen ? "bg-[#f1f6f5]" : "bg-white"
                        }`}
                    >
                      <button
                        type="button"
                        onClick={() => toggleFaqItem(index)}
                        aria-expanded={isOpen}
                        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                      >
                        <div className="flex items-center gap-3">
                          <h3 className="text-lg font-medium text-[#0f172a]">
                            {item.question}
                          </h3>
                        </div>
                        <span
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#e0e0e0] text-base font-bold text-[#006d5a] transition-transform duration-200 ${isOpen ? "rotate-45" : ""
                            }`}
                        >
                          +
                        </span>
                      </button>
                      <div
                        aria-hidden={!isOpen}
                        className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-in-out ${isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0 h-0"
                          }`}
                      >
                        <div className="px-5 pb-4 pt-0 text-base text-slate-600 leading-relaxed sm:px-6">
                          {item.answer}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>

        <div className="mx-auto max-w-6xl space-y-16 px-6 sm:px-10 pb-16">
          <section
            id="cta-ready"
            className="grid py-16 px-0 xl:px-0 gap-8 items-center"
          >
            <div className="lg:col-span-12">
              <div
                data-reveal
                className="reveal flex flex-col items-center gap-4 text-center"
              >
                <h2 className="text-4xl font-medium text-black">
                  {t("final-cta.title")}
                </h2>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#006d5a]">
                  {t("final-cta.microline")}
                </p>
              </div>
              <div
                data-reveal
                className="reveal mt-4 flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center"
                style={{ transitionDelay: "120ms" }}
              >
                <a
                  href="#"
                  className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#006d5a] px-6 py-3 text-base md:text-md font-medium text-white"
                >
                  <FaWhatsapp size={23} /> {t("final-cta.cta")}
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* Floating Button */}
        <div className="fixed bottom-6 right-5 z-40">
          <div className="group relative">
            <a
              href="#"
              className="flex items-center gap-2 bg-[#006d5a] rounded-full p-3 text-sm sm:text-base font-semibold text-white"
            >
              <FaWhatsapp size={24} />
              <span className="sr-only">{t("floating.cta")}</span>
            </a>
            <span className="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-slate-900 px-3 py-2 text-xs font-semibold text-white opacity-0 scale-95 transition duration-200 group-hover:opacity-100 group-hover:scale-100">
              {t("floating.title")}
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}
