"use client";

import { useState } from "react";
import { Link } from "@/i18n/navigation";
import React from 'react';

interface HomescardProps {
  title: string;
  subtitle: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
  cardBg: string;
  titleColor: string;
  subtitleColor: string;
  descriptionColor: string;
  buttonBg: string;
  buttonTextColor: string;
  buttonBorder: string;
  clampLines?: number;
  expandable?: boolean;
}

export function Homescard({
  title,
  subtitle,
  description,
  buttonLabel,
  buttonHref,
  cardBg,
  titleColor,
  subtitleColor,
  descriptionColor,
  buttonBg,
  buttonTextColor,
  buttonBorder,
  clampLines = 4,
  expandable = false,
}: HomescardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`relative overflow-hidden rounded-2xl p-6 text-white ${cardBg} flex flex-col justify-between h-full border-[var(--border)]`}
    >
      <div>
        <h3 className={`text-xl font-semibold mb-2 ${titleColor}`}>{title}</h3>
        <h4 className={`text-lg font-medium mb-3 opacity-90 ${subtitleColor}`}>{subtitle}</h4>
        <p
          className={`mt-1 text-sm ${
            expandable && !expanded ? `line-clamp-${clampLines}` : ""
          } ${descriptionColor}`}
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
      <div className="mt-4">
        <Link
          href={buttonHref}
          className={`inline-flex items-center rounded-[var(--radius-sm)] px-4 py-1 text-sm font-semibold ${buttonBg} ${buttonTextColor} ring-1 ${buttonBorder} transition-colors`}
        >
          {buttonLabel}
        </Link>
      </div>
    </div>
  );
}