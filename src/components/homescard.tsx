
"use client";

import { useState } from "react";
import { Link } from "@/i18n/navigation";

interface HomescardProps {
  title: string;
  subtitle: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
  cardBg?: string;
  titleColor?: string;
  subtitleColor?: string;
  descriptionColor?: string;
  buttonBg?: string;
  buttonTextColor?: string;
  buttonBorder?: string;
  clampLines?: number;
  expandable?: boolean;
}

export function Homescard({
  title,
  subtitle,
  description,
  buttonLabel,
  buttonHref,
  cardBg = "bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-500",
  titleColor = "text-indigo-100",
  subtitleColor = "text-white",
  descriptionColor = "text-gray-200",
  buttonBg = "bg-white",
  buttonTextColor = "text-gray-900",
  buttonBorder = "ring-1 ring-gray-200",
  clampLines = 4,
  expandable = false,
}: HomescardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`relative rounded-[var(--radius-md)] overflow-hidden ${cardBg} p-4 flex flex-col justify-between h-full border-[var(--border)]`}
    >
      <div>
        <h2 className={`text-base font-semibold ${titleColor}`}>{title}</h2>
        <p className={`mt-1 text-sm font-medium ${subtitleColor}`}>{subtitle}</p>
        <p
          className={`mt-1 text-sm ${descriptionColor} ${
            expandable && !expanded ? `line-clamp-${clampLines}` : ""
          }`}
        >
          {description}
        </p>
        {expandable && (
          <button
            type="button"
            className="mt-1 text-xs text-indigo-200 underline focus:outline-none"
            onClick={() => setExpanded((v) => !v)}
          >
            {expanded ? "Show less" : "Show more"}
          </button>
        )}
      </div>
      <div className="mt-4 flex justify-center">
        <Link
          href={buttonHref}
          className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${buttonBg} ${buttonTextColor} ${buttonBorder} hover:bg-opacity-90`}
        >
          {buttonLabel}
        </Link>
      </div>
    </div>
  );
}
