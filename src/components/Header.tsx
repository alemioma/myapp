"use client";

import React, { useState } from "react";
import { ModeToggle } from "@/components/Toggle";
import { ESFlag } from "@/components/esflag";
import { SVFlag } from "@/components/svflag";
import { UKFlag } from "@/components/ukflag";
import { Link } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Container } from "@/components/container";

export function Header() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations("header");

  const navLinks = [
    { name: t("navLinks.developer"), href: "/" },
    { name: t("navLinks.business"), href: "/" },
    { name: t("navLinks.industry"), href: "/" },
    { name: t("navLinks.academy"), href: "/" },
    { name: t("navLinks.contact"), href: "/" },
  ];

  const languages = [
    { code: "en", name: t("languages.en"), flag: <UKFlag className="w-6 h-4" /> },
    { code: "es", name: t("languages.es"), flag: <ESFlag className="w-6 h-4" /> },
    { code: "sv", name: t("languages.sv"), flag: <SVFlag className="w-6 h-4" /> },
  ];

  const currentLanguage = languages.find((lang) => lang.code === locale) || languages[0];

  // Refined getLocalizedPath to ensure correct locale replacement
  const getLocalizedPath = (newLocale: string) => {
    // Usamos el 'pathname' de next-intl para que la ruta sea correcta.
    // Esto es la forma más recomendada para cambiar la ruta sin errores.
    const pathWithoutLocale = pathname.startsWith(`/${locale}`) ? pathname.substring(`/${locale}`.length) : pathname;
    return `/${newLocale}${pathWithoutLocale}`;
  };

  const handleLanguageSwitch = (newLocale: string) => {
    const newPath = getLocalizedPath(newLocale);
    router.push(newPath);
    setIsMenuOpen(false);
  };

  return (
    <header className="border-b">
      <Container className="flex items-center justify-between h-16">
        <div className="flex items-center">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground">
            <span className="font-bold">4DA</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <nav className="hidden md:flex items-center space-x-6">
            <div className="w-[120px]"></div>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <ModeToggle />
          <div className="hidden md:block">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center space-x-2 text-sm font-medium hover:text-primary border border-border rounded-md px-3 py-1">
                  {currentLanguage.flag}
                  <span>{currentLanguage.code.toUpperCase()}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="min-w-0">
                {languages.map((language) => (
                  <DropdownMenuItem
                    key={language.code}
                    onClick={() => handleLanguageSwitch(language.code)}
                  >
                    <div className="flex items-center space-x-2 px-4 py-2 text-sm">
                      {language.flag}
                      <span>{language.name}</span>
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </Container>
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <Container className="py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium transition-colors hover:text-primary py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{t("languageLabel")}</span>
                  <div className="flex items-center space-x-2">
                    {currentLanguage.flag}
                    <span className="text-sm font-medium">{currentLanguage.name}</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 mt-2">
                  {languages.map((language) => (
                    <div
                      key={language.code}
                      className="flex flex-col items-center cursor-pointer"
                      onClick={() => handleLanguageSwitch(language.code)}
                    >
                      {language.flag}
                      <span className="text-xs mt-1">{language.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}