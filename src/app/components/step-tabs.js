import Image from "next/image";
import { useState } from "react";

export default function StepTabs({ steps }) {
  const [active, setActive] = useState(0);
  const activeStep = steps[active];
  return (
    <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_auto_1fr] items-start">
      <div className="w-full">
        <Image
          src={`/assets/hero.png`}
          alt={`${activeStep.label} illustration`}
          width={800}
          height={600}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="hidden sm:flex h-full flex-col items-center justify-between">
        {steps.map((_, idx) => (
          <span
            key={idx}
            className={`flex-1 w-[6px] transition ${idx === active ? "bg-[#2563eb]" : "bg-blue-100"}`}
          />
        ))}
      </div>

      <div className="flex items-center h-full">
        <div className="space-y-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = idx === active;
            return (
              <button
                type="button"
                key={step.label}
                onClick={() => setActive(idx)}
                className={`group relative flex w-full items-start gap-4 rounded-2xl border ${isActive ? "border-[#2563eb] bg-blue-50" : "border-blue-100 bg-white"} p-4 transition hover:-translate-y-0.5 hover:border-blue-200`}
              >
                <div className={`flex h-10 w-10 items-center justify-center rounded-2xl ${isActive ? "bg-white text-[#2563eb]" : "bg-blue-50 text-[#1d4ed8]"} shadow-inner`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex-1 space-y-1 text-left">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#0f172a]">
                    {step.label}
                  </div>
                  <p className="text-sm text-slate-600">{step.detail}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
