"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export type FAQ = { question: string; answer: string };

export default function FAQSection({ faqs }: { faqs: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div key={i} className="border border-slate-200 rounded-xl overflow-hidden">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex justify-between items-center px-6 py-4 text-left hover:bg-slate-50 transition-colors"
          >
            <span className="font-semibold text-brand-dark font-heading pr-4 text-sm md:text-base">
              {faq.question}
            </span>
            <ChevronDown
              size={20}
              className={`shrink-0 text-brand-primary transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
            />
          </button>
          {open === i && (
            <div className="px-6 pb-5 text-brand-mid leading-relaxed text-sm md:text-base border-t border-slate-100 pt-4">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
