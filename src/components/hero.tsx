
"use client";

import { useTranslations, useLocale } from "next-intl";
import { Homescard } from "./homescard";
import { Container } from "./container";
import { Link } from "@/i18n/navigation";

export function Hero() {
  const t = useTranslations("homePage");
  const locale = useLocale();

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

  const resources = [
    {
      video: t("video1.video"),
      title: t("video1.title"),
      description: t("video1.description"),
    },
    {
      video: t("video2.video"),
      title: t("video2.title"),
      description: t("video2.description"),
    },
    {
      video: t("video3.video"),
      title: t("video3.title"),
      description: t("video3.description"),
    },
  ];

  return (
    <div className="bg-[var(--background)] overflow-hidden py-20 sm:py-24 lg:pb-28 xl:pb-28">
      <Container>
        <h2 className="text-base font-semibold text-[var(--primary)]">
          {t("title")}
        </h2>
        <div className="flex flex-col sm:flex-row sm:items-start sm:gap-6">
          <p className="mt-2 max-w-2xl text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl">
            {t("subtitle")}
          </p>
          <ol
            role="list"
            className="flex flex-col sm:flex-row sm:gap-4 mt-2 sm:mt-0 w-full sm:w-auto"
          >
            {resources.map((resource, index) => (
              <li
                key={index}
                className="flex flex-col items-start sm:w-1/3 px-2"
              >
                <div
                  className="relative h-[100px] sm:h-[114px] w-full overflow-hidden rounded-[var(--radius-md)] shadow-lg cursor-pointer bg-[var(--muted)]"
                  onClick={() => {
                    const iframe = document.getElementById(`video-${index}`) as HTMLIFrameElement;
                    if (iframe) {
                      iframe.src = `${resource.video}?autoplay=1`;
                    }
                  }}
                >
                  <iframe
                    id={`video-${index}`}
                    src={resource.video}
                    title={resource.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full rounded-[var(--radius-md)] border-none"
                  />
                </div>
                <div className="mt-2">
                  <p className="mt-1 text-xs text-[var(--muted-foreground)]">
                    {resource.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {cards.map((card, index) => (
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
          ))}
        </div>
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:flex lg:items-center lg:justify-between lg:px-8">
          <h2 className="max-w-2xl text-4xl font-semibold tracking-tight text-[var(--foreground)]">
            {t("ctaHeading")}
            <br />
            {t("ctaSubheading")}
          </h2>
          <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:shrink-0">
            <Link
              href="#"
              className="inline-flex items-center rounded-[var(--radius-sm)] px-4 py-1 text-[var(--primary)] ring-1 ring-[var(--primary)] ring-inset hover:bg-[var(--primary)]/10 transition-colors"
            >
              {t("ctaGetStarted")}
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
