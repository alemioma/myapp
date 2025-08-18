
"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Container } from "@/components/container";
import { Logomark } from "@/components/logo";

interface FooterProps {
  locale: string;
  children?: React.ReactNode;
}

const social = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61559221708827",
    icon: ({ ...props }: React.ComponentPropsWithoutRef<"svg">) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/4-digital-asset",
    icon: ({ ...props }: React.ComponentPropsWithoutRef<"svg">) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-brand-linkedin"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <line x1="8" y1="11" x2="8" y2="16" />
        <line x1="8" y1="8" x2="8" y2="8.01" />
        <line x1="12" y1="16" x2="12" y2="11" />
        <path d="M16 16v-3a2 2 0 0 0 -4 0" />
      </svg>
    ),
  },
  {
    name: "X",
    href: "https://twitter.com/4DA102798",
    icon: ({ ...props }: React.ComponentPropsWithoutRef<"svg">) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/mone4da/4DA",
    icon: ({ ...props }: React.ComponentPropsWithoutRef<"svg">) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/channel/UC8algICZEbClxHL9Hlj1zlg",
    icon: ({ ...props }: React.ComponentPropsWithoutRef<"svg">) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "Feed",
    href: "/feed.xml",
    icon: ({ ...props }: React.ComponentPropsWithoutRef<"svg">) => (
      <svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor" {...props}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.5 3a.5.5 0 0 1 .5-.5h.5c5.523 0 10 4.477 10 10v.5a.5.5 0 0 1-.5.5h-.5a.5.5 0 0 1-.5-.5v-.5A8.5 8.5 0 0 0 3.5 4H3a.5.5 0 0 1-.5-.5V3Zm0 4.5A.5.5 0 0 1 3 7h.5A5.5 5.5 0 0 1 9 12.5v.5a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5v-.5a4 4 0 0 0-4-4H3a.5.5 0 0 1-.5-.5v-.5Zm0 5a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
        />
      </svg>
    ),
  },
];

export function Footer({ locale }: FooterProps) {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  const navigation = {
    solutions: ["TDPnet", "Braket", "Orca OS", "Database", "Mattrans"],
    support: ["Pricing", "Documentation", "Guides", "API Status"],
    company: ["About", "Blog", "Team", "Contact", "Partners"],
    legal: ["Claim", "Privacy", "Terms"],
  };

  const routeMap: { [key: string]: string } = {
    "Orca OS": "orca",
    TDPnet: "tdpnet",
    Braket: "braket",
    Database: "dbia",
    Mattrans: "mattrans",
    Pricing: "pricing",
    Documentation: "documentation",
    Guides: "guides",
    "API Status": "api-status",
    About: "about",
    Blog: "blog",
    Team: "team",
    Contact: "contact",
    Partners: "partners",
    Claim: "claim",
    Privacy: "privacy",
    Terms: "terms",
  };

  return (
    <footer className="bg-[var(--background)] text-[var(--foreground)]" aria-labelledby="footer-heading">
      <Container>
        <div className="mx-auto max-w-7xl px-6 pb-8 pt-4 sm:pt-8 lg:px-8 lg:pt-12">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-6">
              <Link href={`/${locale}`}>
                <Logomark className="h-10 w-auto fill-cyan-500 dark:fill-cyan-400" />
              </Link>
              <p className="text-sm leading-6">{t("description")}</p>
              <div className="flex space-x-6">
                {social.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-[var(--foreground)] hover:text-cyan-400 dark:hover:text-cyan-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-[var(--foreground)] dark:text-gray-200">
                    {t("solutionsTitle")}
                  </h3>
                  <ul className="mt-6 space-y-4">
                    {navigation.solutions.map((item) => (
                      <li key={item}>
                        <Link
                          href={`/${locale}/${routeMap[item]}`}
                          className="text-sm text-[var(--foreground)] hover:text-cyan-400 dark:hover:text-cyan-300"
                        >
                          {t(`solutions.${item}`)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold text-[var(--foreground)] dark:text-gray-200">
                    {t("supportTitle")}
                  </h3>
                  <ul className="mt-6 space-y-4">
                    {navigation.support.map((item) => (
                      <li key={item}>
                        <Link
                          href={`/${locale}/${routeMap[item]}`}
                          className="text-sm text-[var(--foreground)] hover:text-cyan-400 dark:hover:text-cyan-300"
                        >
                          {t(`support.${item}`)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-[var(--foreground)] dark:text-gray-200">
                    {t("companyTitle")}
                  </h3>
                  <ul className="mt-6 space-y-4">
                    {navigation.company.map((item) => (
                      <li key={item}>
                        <Link
                          href={`/${locale}/${routeMap[item]}`}
                          className="text-sm text-[var(--foreground)] hover:text-cyan-400 dark:hover:text-cyan-300"
                        >
                          {t(`company.${item}`)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold text-[var(--foreground)] dark:text-gray-200">
                    {t("legalTitle")}
                  </h3>
                  <ul className="mt-6 space-y-4">
                    {navigation.legal.map((item) => (
                      <li key={item}>
                        <Link
                          href={`/${locale}/${routeMap[item]}`}
                          className="text-sm text-[var(--foreground)] hover:text-cyan-400 dark:hover:text-cyan-300"
                        >
                          {t(`legal.${item}`)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 border-t border-[var(--foreground)]/10 pt-8 sm:mt-20 lg:mt-24">
            <p className="text-xs text-[var(--foreground)]/60">{t("copyright", { year })}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
