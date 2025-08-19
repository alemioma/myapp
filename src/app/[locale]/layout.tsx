import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '../../i18n/routing';
import * as React from 'react';
import { LayoutShell } from '@/components/LayoutShell';
import { ThemeProvider } from '@/components/theme-provider';
import { clsx } from 'clsx';
import { readFile, readdir } from 'fs/promises';
import path from 'path';
import '../globals.css'; // Added import for global styles


export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }, { locale: 'sv' }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Dynamically load messages from the root messages directory
  const messagesDir = path.resolve(process.cwd(), 'messages', locale); // Adjusted path
  const messages: Record<string, unknown> = {};
  try {
    const files = await readdir(messagesDir);
    const jsonFiles = files.filter((file) => file.endsWith('.json'));

    for (const file of jsonFiles) {
      const ns = file.replace('.json', '');
      const filePath = path.join(messagesDir, file);
      try {
        const fileContent = await readFile(filePath, 'utf-8');
        messages[ns] = JSON.parse(fileContent);
      } catch (error) {
        console.warn(`Could not load ${ns} for locale ${locale}:`, error);
      }
    }
  } catch (error) {
    console.warn(`Could not read messages directory for locale ${locale}:`, error);
  }

  // Default translations as fallback
  messages.header = messages.header || {
    navLinks: {
      developer: "Developer",
      business: "Business",
      industry: "Industry",
      academy: "Academy",
      contact: "Contact",
    },
    languageLabel: "Language",
    languages: { en: "English", es: "Spanish", sv: "Swedish" },
  };

  messages.footer = messages.footer || {
    description: "4 Digital Asset - Empowering your digital future.",
    solutionsTitle: "Solutions",
    solutions: {
      TDPnet: "TDPnet",
      Braket: "Braket",
      "Orca OS": "Orca OS",
      Database: "Database",
      Mattrans: "Mattrans",
    },
    supportTitle: "Support",
    support: {
      Pricing: "Pricing",
      Documentation: "Documentation",
      Guides: "Guides",
      "API Status": "API Status",
    },
    companyTitle: "Company",
    company: {
      About: "About",
      Blog: "Blog",
      Team: "Team",
      Contact: "Contact",
      Partners: "Partners",
    },
    legalTitle: "Legal",
    legal: {
      Claim: "Claim",
      Privacy: "Privacy Policy",
      Terms: "Terms of Service",
    },
    copyright: "© {year} 4 Digital Asset. All rights reserved.",
  };

  messages.banner = messages.banner || {
    title: "Painless approach to development on 2025",
    description: "Join us from June 7 – 9 to see what’s coming next.",
    ctaText: "Get your license now",
    ctaLink: "#",
    closeLabel: "Close banner",
  };

return (
  <html lang={locale} suppressHydrationWarning>
    <body
      className={clsx(
        'transition-colors duration-300 bg-[var(--background)] text-[var(--foreground)]'
      )}
    >
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <LayoutShell locale={locale}>{children}</LayoutShell>
        </NextIntlClientProvider>
      </ThemeProvider>
    </body>
  </html>
);}