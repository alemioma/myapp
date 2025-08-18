"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/container";
import React from 'react';

// Interfaz para tipar los ítems de los valores
interface ValueItem {
  title: string;
  description: string;
}

export default function AboutPage() {
  const t = useTranslations("about");

  const items = t.raw("values.items") as ValueItem[];

  return (
    <div className="bg-[var(--background)] text-[var(--foreground)] py-20">
      <Container>
        <section className="text-center">
          <h1 className="text-4xl font-bold">{t("title")}</h1>
          <p className="mt-4 text-lg">{t("description")}</p>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-semibold">{t("hero.heading")}</h2>
          <p className="mt-4 text-lg">{t("hero.subheading")}</p>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold">{t("mission.title")}</h2>
          <p className="mt-4 text-lg">{t("mission.content")}</p>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold">{t("values.title")}</h2>
          <ul className="mt-4 space-y-4">
            {items.map((item, index) => (
              <li key={index}>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-2">{item.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold">{t("team.title")}</h2>
          <p className="mt-4 text-lg">{t("team.description")}</p>
        </section>
      </Container>
    </div>
  );
}