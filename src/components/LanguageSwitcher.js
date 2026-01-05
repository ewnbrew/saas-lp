"use client";

import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";

const LOCALES = [
  { code: "id", label: "ID" },
  { code: "en", label: "EN" },
];

export default function LanguageSwitcher({ className = "" }) {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div
      className={[
        "inline-flex items-center rounded-full border border-slate-200 bg-white/70 p-1 text-xs font-semibold text-slate-600 shadow-sm",
        className,
      ].join(" ")}
      role="group"
      aria-label="Language switcher"
    >
      {LOCALES.map((option) => {
        const isActive = option.code === locale;

        return (
          <Link
            key={option.code}
            href={pathname}
            locale={option.code}
            aria-current={isActive ? "true" : undefined}
            className={[
              "rounded-full px-2.5 py-1 transition",
              isActive
                ? "bg-[#2563eb] text-white shadow-[0_10px_25px_-15px_rgba(37,99,235,0.9)]"
                : "hover:bg-slate-100 hover:text-slate-900",
            ].join(" ")}
          >
            {option.label}
          </Link>
        );
      })}
    </div>
  );
}

