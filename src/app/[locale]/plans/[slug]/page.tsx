import { notFound } from "next/navigation";
import { PlanContent } from "@/components/PlanContent";

const validSlugs = ["freemium", "developer", "premium", "business"];

export async function generateStaticParams() {
  return [
    { locale: 'en', slug: 'freemium' },
    { locale: 'en', slug: 'developer' },
    { locale: 'en', slug: 'premium' },
    { locale: 'en', slug: 'business' },
    { locale: 'es', slug: 'freemium' },
    { locale: 'es', slug: 'developer' },
    { locale: 'es', slug: 'premium' },
    { locale: 'es', slug: 'business' },
    { locale: 'sv', slug: 'freemium' },
    { locale: 'sv', slug: 'developer' },
    { locale: 'sv', slug: 'premium' },
    { locale: 'sv', slug: 'business' },
  ];
}

export default async function PlanPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  if (!validSlugs.includes(slug)) return notFound();

  return <PlanContent slug={slug} />;
}