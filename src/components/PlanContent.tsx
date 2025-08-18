"use client";

import { useTranslations } from "next-intl";
import { Resources } from "@/components/resources";
import { Container } from "@/components/container";
import { Link } from "@/i18n/navigation";
import { ShadcnPlanTable } from "@/components/ShadcnPlanTable";

interface PlanContentProps {
  slug: string;
}

export function PlanContent({ slug }: PlanContentProps) {
  const t = useTranslations(`plans`);

  return (
    <div className="bg-[var(--background)] text-[var(--foreground)]">
      <Container>
        <div className="flex justify-center m-16 gap-8">
          <h2 className="text-3xl font-bold">{t(`${slug}.price`)}</h2>
          <Link
            href={`/register?plan=${slug}`}
            className="inline-flex items-center rounded-[var(--radius-sm)] px-4 py-1 text-[var(--primary)] ring-1 ring-[var(--primary)] ring-inset hover:bg-[var(--primary)]/10 transition-colors"
          >
            {t(`${slug}.startButton`)}
          </Link>
        </div>
      </Container>
      <Container>
        <ShadcnPlanTable planKey={slug} />
      </Container>
     
      <Container>
        <div className="border-t border-[var(--border)] py-6" />
      </Container>
      <Resources planKey={slug} />
      <Container>
        <div className="border-t border-[var(--border)] py-6 mt-10" />
      </Container>
      
    </div>
    
  );
}