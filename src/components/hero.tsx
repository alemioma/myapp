"use client";

import { useTranslations } from "next-intl";
import { Homescard } from "./homescard";
import { Container } from "./container";
import { Link } from "@/i18n/navigation";
import React from 'react';

interface HeroProps {
  locale: string;
}

export function Hero({ locale }: HeroProps) {
  const t = useTranslations("homePage");

  const cards = t.raw("cards") as Array<{
    title: string;
    subtitle: string;
    description: string;
    slug: string;
    cardBg: string;
    titleColor: string;
    subtitleColor: string;
    descriptionColor: string;
    buttonBg: string;
    buttonTextColor: string;
    buttonBorder: string;
  }>;

  return (
    <div className="bg-[var(--background)] overflow-hidden py-2 sm:py-4 lg:pb-6 xl:pb-6">
      <Container>
        {/* Los textos del título y subtítulo */}
        <h2 className="text-base font-semibold text-[var(--primary)] text-center">
          {t("title")}
        </h2>
        <div className="flex justify-center">
          <p className="mt-2 max-w-2xl text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl text-center">
            {t("subtitle")}
          </p>
        </div>
        <div className="mt-12 flex justify-center">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-4xl">
            {cards.map((card, index) => {
              return (
                <Homescard
                  key={index}
                  title={card.title}
                  subtitle={card.subtitle}
                  description={card.description}
                  buttonLabel={t("readMore")}
                  buttonHref={`${locale}/plans/${card.slug}`}
                  cardBg={card.cardBg}
                  titleColor={card.titleColor}
                  subtitleColor={card.subtitleColor}
                  descriptionColor={card.descriptionColor}
                  buttonBg={card.buttonBg}
                  buttonTextColor={card.buttonTextColor}
                  buttonBorder={card.buttonBorder}
                />
              );
            })}
          </div>
        </div>
        {/* Aquí está el nuevo botón de registro */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/register"
            className="inline-flex items-center justify-center rounded-full border border-gray-400 dark:border-gray-600 dark:bg-gray-800 bg-transparent px-6 py-2 text-black dark:text-white hover:bg-gray-700 dark:hover:bg-gray-900 hover:border-gray-500 transition-colors"
          >
            {t("signupButton")}
          </Link>
        </div>
      </Container>
    </div>
  );
}