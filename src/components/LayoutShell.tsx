"use client";

import { clsx } from "clsx";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import Banner from "./banner";

interface LayoutShellProps {
  locale: string;
  children: React.ReactNode;
}

export function LayoutShell({ locale, children }: LayoutShellProps) {
  const pathname = usePathname();
  const [isHome, setIsHome] = useState(false);

  useEffect(() => {
    setIsHome(pathname === `/${locale}` || pathname === `/${locale}/`);
  }, [pathname, locale]);

  return (
    <div
      className={clsx(
        "flex flex-col min-h-screen",
        "bg-[var(--background)] text-[var(--foreground)]"
      )}
    >
      {isHome && <Banner />}
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer locale={locale} />
    </div>
  );
}
